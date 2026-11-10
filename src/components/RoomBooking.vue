<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { addDays, minNights, nightsBetween, todayIso, totalPrice, unitsLeft, validateStay } from '@/lib/booking'
import { useBookings } from '@/lib/store'
import type { Room } from '@/lib/types'

const props = defineProps<{ room: Room }>()

const { t } = useI18n()
const route = useRoute()
const { bookings } = useBookings()
const today = todayIso()

const form = reactive({
  checkIn: String(route.query.in || addDays(today, 30)),
  checkOut: String(route.query.out || addDays(today, 33)),
  guests: Number(route.query.g || 2),
})

const error = computed(() => validateStay(form))
const tooMany = computed(() => form.guests > props.room.capacity)
const left = computed(() => (error.value ? 0 : unitsLeft(props.room, bookings.value, form.checkIn, form.checkOut)))
const nights = computed(() => (error.value ? 0 : nightsBetween(form.checkIn, form.checkOut)))
const total = computed(() => (error.value ? 0 : totalPrice(props.room, form.checkIn, form.checkOut)))
const canBook = computed(() => !error.value && !tooMany.value && left.value > 0)
const errorText = computed(() =>
  error.value ? t(`errors.${error.value}`, { n: minNights(form.checkIn, form.checkOut) }) : '',
)
const bookTo = computed(() => ({
  name: 'book',
  params: { roomId: props.room.id },
  query: { in: form.checkIn, out: form.checkOut, g: String(form.guests) },
}))
</script>

<template>
  <div class="border border-rule bg-white p-6 shadow-[0_24px_60px_-30px_rgba(38,33,28,0.4)]">
    <h2 class="text-2xl">{{ t('roomPage.bookTitle') }}</h2>
    <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <div>
        <label for="rb-in" class="field-label">{{ t('search.checkIn') }}</label>
        <input id="rb-in" v-model="form.checkIn" type="date" :min="today" class="field" />
      </div>
      <div>
        <label for="rb-out" class="field-label">{{ t('search.checkOut') }}</label>
        <input id="rb-out" v-model="form.checkOut" type="date" :min="form.checkIn" class="field" />
      </div>
      <div class="sm:col-span-2 lg:col-span-1 xl:col-span-2">
        <label for="rb-g" class="field-label">{{ t('search.guests') }}</label>
        <input id="rb-g" v-model.number="form.guests" type="number" min="1" max="6" inputmode="numeric" class="field" />
      </div>
    </div>

    <div class="mt-5 border-t border-rule pt-5" aria-live="polite">
      <p v-if="errorText" class="text-sm text-clay-600">{{ errorText }}</p>
      <p v-else-if="tooMany" class="text-sm text-clay-600">{{ t('roomPage.tooMany', { n: room.capacity }) }}</p>
      <p v-else-if="left < 1" class="text-sm font-medium text-clay-600">{{ t('roomPage.soldOut') }}</p>
      <template v-else>
        <p class="font-serif text-3xl tabular-nums">{{ total }}€</p>
        <p class="text-sm text-ink-soft">{{ t('rooms.forNights', { nights }) }} · {{ t('roomPage.available') }}</p>
        <p v-if="left <= 2" class="mt-1 text-sm font-medium text-clay-600">{{ left === 1 ? t('rooms.lastOne') : t('rooms.left', { n: left }) }}</p>
      </template>
    </div>

    <router-link v-if="canBook" :to="bookTo" class="btn mt-5 w-full">{{ t('roomPage.continue') }}</router-link>
    <button v-else type="button" class="btn mt-5 w-full" disabled>{{ t('roomPage.continue') }}</button>
    <p class="mt-3 text-xs text-ink-soft">{{ t('roomPage.totalNote') }}</p>
  </div>
</template>
