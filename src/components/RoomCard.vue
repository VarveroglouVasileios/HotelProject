<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { roomContent } from '@/data/roomContent'
import type { Room } from '@/lib/types'

const props = defineProps<{
  room: Room
  /** Present only when dates were searched. */
  nights?: number
  total?: number
  left?: number
  bookTo?: { name: string; params: Record<string, string>; query: Record<string, string> }
}>()

const { t, locale } = useI18n()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))
const base = import.meta.env.BASE_URL
const searched = computed(() => props.total !== undefined && props.nights !== undefined)
const view = computed(() => roomContent[props.room.id]?.view[lang.value] ?? '')
const detailTo = computed(() => ({ name: 'room', params: { id: props.room.id }, query: props.bookTo?.query ?? {} }))
</script>

<template>
  <article class="group flex h-full flex-col">
    <router-link :to="detailTo" class="relative block overflow-hidden rounded-sm bg-paper-dark" :aria-label="room.name[lang]">
      <img
        :src="`${base}images/${room.image}.webp`"
        :alt="room.name[lang]"
        width="1024"
        height="768"
        loading="lazy"
        class="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span v-if="left !== undefined && left <= 2" class="absolute left-3 top-3 rounded-sm bg-clay-500 px-2.5 py-1 text-sm font-medium text-white">
        {{ left === 1 ? t('rooms.lastOne') : t('rooms.left', { n: left }) }}
      </span>
    </router-link>

    <div class="mt-5 flex items-baseline justify-between gap-4">
      <h3 class="text-2xl leading-snug sm:text-[1.7rem]">
        <router-link :to="detailTo" class="hover:text-sea-600">{{ room.name[lang] }}</router-link>
      </h3>
      <p class="whitespace-nowrap text-right font-serif text-xl tabular-nums">
        <template v-if="searched">{{ total }}€</template>
        <template v-else><span class="font-sans text-sm text-ink-soft">{{ t('rooms.from') }}</span> {{ room.basePrice }}€</template>
      </p>
    </div>
    <p class="text-right text-sm text-ink-soft sm:-mt-0.5">
      <template v-if="searched">{{ t('rooms.forNights', { nights }) }}</template>
      <template v-else>{{ t('rooms.perNightShort') }}</template>
    </p>

    <p class="mt-2 text-ink-soft">{{ room.description[lang] }}</p>

    <ul class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
      <li class="flex items-center gap-1.5"><Icon name="ruler" :size="18" />{{ t('rooms.sqm', { n: room.size }) }}</li>
      <li class="flex items-center gap-1.5"><Icon name="users" :size="18" />{{ t('rooms.upTo', { n: room.capacity }) }}</li>
      <li v-if="view" class="flex items-center gap-1.5"><Icon name="wave" :size="18" />{{ view }}</li>
    </ul>

    <div class="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
      <router-link v-if="bookTo" :to="bookTo" class="btn">{{ t('rooms.book') }}</router-link>
      <router-link :to="detailTo" class="link inline-flex items-center gap-1.5">
        {{ t('roomPage.details') }} <Icon name="arrow" :size="16" />
      </router-link>
    </div>
  </article>
</template>
