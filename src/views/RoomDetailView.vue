<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Icon from '@/components/Icon.vue'
import Lightbox from '@/components/Lightbox.vue'
import RoomBooking from '@/components/RoomBooking.vue'
import { getRoom } from '@/data/rooms'
import { amenityLabels, roomContent } from '@/data/roomContent'

const { t, locale } = useI18n()
const route = useRoute()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))
const base = import.meta.env.BASE_URL
const img = (name: string): string => `${base}images/${name}.webp`

const room = computed(() => getRoom(String(route.params.id)))
const content = computed(() => (room.value ? roomContent[room.value.id] : undefined))
const lightboxIndex = ref<number | null>(null)
const items = computed(() =>
  (content.value?.gallery ?? []).map((g) => ({ src: img(g), alt: room.value?.name[lang.value] ?? '', caption: room.value?.name[lang.value] ?? '' })),
)
</script>

<template>
  <div v-if="room && content">
    <section class="wrap pt-6">
      <router-link :to="{ name: 'rooms' }" class="link inline-flex items-center gap-1.5 text-base"><Icon name="left" :size="16" />{{ t('roomPage.back') }}</router-link>
    </section>

    <section class="wrap mt-6 grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div class="lg:col-span-8">
        <button type="button" class="block w-full overflow-hidden rounded-sm bg-paper-dark" :aria-label="t('lightbox.open')" @click="lightboxIndex = 0">
          <img :src="img(room.image)" :alt="room.name[lang]" width="1024" height="768" class="aspect-[4/3] w-full object-cover sm:aspect-[16/10]" />
        </button>
        <div class="mt-3 grid grid-cols-2 gap-3">
          <button v-for="(g, i) in content.gallery.slice(1)" :key="g" type="button" class="overflow-hidden rounded-sm bg-paper-dark" :aria-label="t('lightbox.open')" @click="lightboxIndex = i + 1">
            <img :src="img(g)" alt="" width="1024" height="1024" loading="lazy" class="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
          </button>
        </div>

        <h1 class="mt-10 text-4xl sm:text-5xl">{{ room.name[lang] }}</h1>
        <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-ink-soft">
          <li class="flex items-center gap-2"><Icon name="ruler" :size="20" />{{ t('rooms.sqm', { n: room.size }) }}</li>
          <li class="flex items-center gap-2"><Icon name="users" :size="20" />{{ t('rooms.upTo', { n: room.capacity }) }}</li>
          <li class="flex items-center gap-2"><Icon name="wave" :size="20" />{{ t('roomPage.view') }}: {{ content.view[lang] }}</li>
        </ul>
        <p class="mt-6 max-w-2xl font-serif text-xl leading-relaxed">{{ content.story[lang] }}</p>

        <h2 class="mt-12 text-2xl">{{ t('roomPage.amenities') }}</h2>
        <ul class="mt-5 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
          <li v-for="a in content.amenities" :key="a" class="flex items-center gap-4 bg-paper p-4">
            <span class="text-sea-600"><Icon :name="a" :size="24" /></span>
            {{ amenityLabels[a][lang] }}
          </li>
        </ul>
      </div>

      <aside class="lg:col-span-4">
        <div class="lg:sticky lg:top-32"><RoomBooking :room="room" /></div>
      </aside>
    </section>

    <Lightbox :items="items" :index="lightboxIndex" @close="lightboxIndex = null" @change="lightboxIndex = $event" />
  </div>
  <p v-else class="wrap pt-10">{{ t('done.notFound') }}</p>
</template>
