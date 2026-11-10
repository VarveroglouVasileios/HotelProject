<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/Icon.vue'
import Lightbox from '@/components/Lightbox.vue'
import RoomCard from '@/components/RoomCard.vue'
import SearchBar from '@/components/SearchBar.vue'
import FaqSection from '@/components/FaqSection.vue'
import { dayParts, distances, gallery } from '@/data/content'
import { rooms } from '@/data/rooms'

const { t, locale } = useI18n()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))
const base = import.meta.env.BASE_URL
const img = (name: string): string => `${base}images/${name}.webp`

const lightboxIndex = ref<number | null>(null)
const lightboxItems = computed(() =>
  gallery.map((g) => ({ src: img(g.image), alt: g.alt[lang.value], caption: g.caption[lang.value] })),
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate flex min-h-[92vh] items-end overflow-hidden text-white">
      <img :src="img('hero-bay')" alt="" width="1024" height="576" class="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-black/25" />
      <div class="wrap pb-32 pt-40 sm:pb-40">
        <p class="text-shadow-soft text-base font-medium tracking-wide text-white/90">{{ t('home2.eyebrow') }}</p>
        <h1 class="text-shadow-soft mt-4 max-w-4xl text-5xl font-medium leading-[1.05] text-white sm:text-7xl lg:text-[5.5rem]">
          {{ t('home2.h1a') }}<br /><span class="italic">{{ t('home2.h1b') }}</span>
        </h1>
        <p class="text-shadow-soft mt-6 max-w-xl text-lg text-white/90 sm:text-xl">{{ t('home2.lead') }}</p>
        <a href="#search" class="mt-8 inline-flex items-center gap-2 text-base font-medium text-white underline decoration-white/50 underline-offset-8 hover:decoration-white">
          {{ t('home2.discover') }} <Icon name="arrow" :size="18" class="rotate-90" />
        </a>
      </div>
    </section>

    <!-- Search card overlapping the hero -->
    <section id="search" class="wrap relative z-10 -mt-16 scroll-mt-32 sm:-mt-20" aria-label="Availability">
      <SearchBar id="home" />
    </section>

    <!-- Story -->
    <section class="wrap mt-24 grid items-center gap-12 md:mt-32 lg:grid-cols-12 lg:gap-16">
      <div v-reveal class="lg:col-span-6">
        <p class="text-base font-medium text-clay-600">{{ t('home2.storyKicker') }}</p>
        <h2 class="mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">{{ t('home2.storyTitle') }}</h2>
        <p class="mt-6 max-w-xl text-lg text-ink-soft">{{ t('home2.storyText') }}</p>
      </div>
      <div class="relative lg:col-span-6">
        <div v-reveal class="ml-auto w-[78%] overflow-hidden rounded-sm">
          <img :src="img('olive-path')" :alt="gallery[0]?.alt[lang]" width="1024" height="1024" loading="lazy" class="aspect-[4/5] w-full object-cover" />
        </div>
        <div v-reveal="150" class="absolute -bottom-10 left-0 w-[48%] overflow-hidden rounded-sm border-[6px] border-paper shadow-xl sm:-bottom-12">
          <img :src="img('breakfast')" alt="" width="1024" height="1024" loading="lazy" class="aspect-square w-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Rooms -->
    <section id="rooms" class="wrap mt-32 scroll-mt-28 md:mt-40">
      <div v-reveal class="mb-12 max-w-2xl">
        <p class="text-base font-medium text-clay-600">{{ t('home2.roomsKicker') }}</p>
        <h2 class="mt-3 text-3xl sm:text-5xl">{{ t('home2.roomsTitle') }}</h2>
      </div>
      <div class="grid gap-x-10 gap-y-16 md:grid-cols-2">
        <div v-for="(room, i) in rooms" :key="room.id" v-reveal="(i % 2) * 120" :class="i % 2 === 1 ? 'md:mt-16' : ''">
          <RoomCard :room="room" />
        </div>
      </div>
    </section>

    <!-- A day at Elia Bay -->
    <section class="mt-32 bg-ink py-24 text-paper md:mt-44 md:py-32">
      <div class="wrap">
        <div v-reveal class="mb-14 max-w-2xl">
          <p class="text-base font-medium text-clay-500">{{ t('home2.dayKicker') }}</p>
          <h2 class="mt-3 text-3xl text-paper sm:text-5xl">{{ t('home2.dayTitle') }}</h2>
        </div>
        <div class="grid gap-14 md:grid-cols-3 md:gap-8">
          <article v-for="(part, i) in dayParts" :key="part.image" v-reveal="i * 140" :class="i === 1 ? 'md:mt-14' : i === 2 ? 'md:mt-28' : ''">
            <div class="overflow-hidden rounded-sm">
              <img :src="img(part.image)" :alt="part.title[lang]" width="1024" height="1024" loading="lazy" class="aspect-[4/5] w-full object-cover" />
            </div>
            <p class="mt-5 font-serif text-xl italic text-clay-500">{{ part.time[lang] }}</p>
            <h3 class="mt-1 text-2xl text-paper">{{ part.title[lang] }}</h3>
            <p class="mt-3 text-paper/70">{{ part.text[lang] }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="wrap mt-28 scroll-mt-28 md:mt-36">
      <div v-reveal class="mb-10 max-w-2xl">
        <p class="text-base font-medium text-clay-600">{{ t('home2.galleryKicker') }}</p>
        <h2 class="mt-3 text-3xl sm:text-5xl">{{ t('home2.galleryTitle') }}</h2>
      </div>
      <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <button
          v-for="(g, i) in gallery"
          :key="g.image"
          v-reveal="(i % 3) * 100"
          type="button"
          class="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm bg-paper-dark text-left"
          :aria-label="`${t('lightbox.open')}: ${g.caption[lang]}`"
          @click="lightboxIndex = i"
        >
          <img :src="img(g.image)" :alt="g.alt[lang]" width="1024" height="1024" loading="lazy" class="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" :class="g.ratio" />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-10 font-serif text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-sm:opacity-100">
            {{ g.caption[lang] }}
          </span>
        </button>
      </div>
      <Lightbox :items="lightboxItems" :index="lightboxIndex" @close="lightboxIndex = null" @change="lightboxIndex = $event" />
    </section>

    <!-- Location -->
    <section id="location" class="wrap mt-28 grid scroll-mt-28 items-center gap-12 md:mt-36 lg:grid-cols-12 lg:gap-16">
      <div v-reveal class="order-2 lg:order-1 lg:col-span-6">
        <p class="text-base font-medium text-clay-600">{{ t('home2.locKicker') }}</p>
        <h2 class="mt-3 text-3xl sm:text-4xl">{{ t('home2.locTitle') }}</h2>
        <p class="mt-5 max-w-xl text-lg text-ink-soft">{{ t('home2.locText') }}</p>
        <ul class="mt-8 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
          <li v-for="d in distances" :key="d.icon" class="flex items-center gap-4 bg-paper p-5">
            <span class="grid h-11 w-11 place-items-center rounded-full bg-paper-dark text-sea-600"><Icon :name="d.icon" :size="22" /></span>
            <span>
              <span class="block text-sm text-ink-soft">{{ d.label[lang] }}</span>
              <span class="block font-medium">{{ d.value[lang] }}</span>
            </span>
          </li>
        </ul>
      </div>
      <div v-reveal class="order-1 lg:order-2 lg:col-span-6">
        <div class="mx-auto max-w-md overflow-hidden rounded-sm">
          <img :src="img('village')" :alt="gallery[3]?.alt[lang]" width="1024" height="1024" loading="lazy" class="aspect-[4/5] w-full object-cover" />
        </div>
      </div>
    </section>

    <FaqSection />

    <!-- Closing call to action -->
    <section class="relative isolate mt-28 overflow-hidden text-white md:mt-36">
      <img :src="img('pool-evening')" alt="" width="1024" height="1024" loading="lazy" class="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-black/45" />
      <div class="wrap py-24 text-center md:py-32">
        <h2 class="text-shadow-soft mx-auto max-w-3xl text-4xl text-white sm:text-6xl">{{ t('home2.ctaTitle') }}</h2>
        <p class="text-shadow-soft mx-auto mt-5 max-w-xl text-lg text-white/90">{{ t('home2.ctaText') }}</p>
        <a href="#search" class="mt-8 inline-flex rounded-sm bg-white px-8 py-3.5 text-base font-medium text-ink transition-colors hover:bg-paper">
          {{ t('home2.ctaButton') }}
        </a>
      </div>
    </section>
  </div>
</template>
