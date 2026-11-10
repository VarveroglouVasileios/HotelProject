<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import Icon from '@/components/Icon.vue'

const { t, locale } = useI18n()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)
const onHome = computed(() => route.name === 'home')
const solid = computed(() => !onHome.value || scrolled.value || menuOpen.value)

const onScroll = (): void => {
  scrolled.value = window.scrollY > 40
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => (menuOpen.value = false))

const links = computed(() => [
  { label: t('nav.rooms'), to: { name: 'rooms' } },
  { label: t('nav2.gallery'), to: { name: 'home', hash: '#gallery' } },
  { label: t('nav2.location'), to: { name: 'home', hash: '#location' } },
  { label: t('nav.admin'), to: { name: 'admin' } },
])
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <div class="fixed inset-x-0 top-0 z-50">
      <p class="bg-ink px-5 py-1.5 text-center text-xs text-paper" role="note">{{ t('demo.banner') }}</p>
      <header
        class="transition-colors duration-300"
        :class="solid ? 'border-b border-rule bg-paper/95 text-ink backdrop-blur' : 'bg-transparent text-white'"
      >
        <div class="wrap flex items-center justify-between py-4">
          <router-link to="/" class="font-serif text-2xl leading-none" :class="solid ? 'text-ink' : 'text-white text-shadow-soft'">
            Elia Bay <span class="ml-1 text-base italic opacity-80">Θάσος</span>
          </router-link>

          <nav class="hidden items-center gap-8 md:flex" aria-label="Main">
            <router-link v-for="l in links" :key="l.label" :to="l.to" class="text-base transition-opacity hover:opacity-70" :class="solid ? '' : 'text-shadow-soft'">
              {{ l.label }}
            </router-link>
            <span class="text-sm" :class="solid ? 'text-ink-soft' : 'text-white/80'">
              <button type="button" class="px-1" :class="locale === 'el' ? 'font-semibold' : 'opacity-70 hover:opacity-100'" :aria-pressed="locale === 'el'" @click="setLocale('el')">ΕΛ</button>/<button type="button" class="px-1" :class="locale === 'en' ? 'font-semibold' : 'opacity-70 hover:opacity-100'" :aria-pressed="locale === 'en'" @click="setLocale('en')">EN</button>
            </span>
            <router-link :to="{ name: 'rooms' }" class="rounded-sm px-5 py-2.5 text-base font-medium transition-colors" :class="solid ? 'bg-sea-600 text-white hover:bg-sea-700' : 'bg-white text-ink hover:bg-paper'">
              {{ t('nav2.book') }}
            </router-link>
          </nav>

          <button type="button" class="grid h-11 w-11 place-items-center md:hidden" :aria-label="menuOpen ? t('nav2.close') : t('nav2.menu')" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
            <Icon :name="menuOpen ? 'x' : 'menu'" :size="26" />
          </button>
        </div>

        <nav v-if="menuOpen" class="wrap border-t border-rule pb-6 pt-2 md:hidden" aria-label="Mobile">
          <router-link v-for="l in links" :key="l.label" :to="l.to" class="block border-b border-rule/70 py-4 font-serif text-2xl">{{ l.label }}</router-link>
          <div class="mt-5 flex items-center justify-between">
            <span>
              <button type="button" class="px-2 py-2" :class="locale === 'el' ? 'font-semibold' : 'text-ink-soft'" @click="setLocale('el')">ΕΛ</button>/<button type="button" class="px-2 py-2" :class="locale === 'en' ? 'font-semibold' : 'text-ink-soft'" @click="setLocale('en')">EN</button>
            </span>
            <router-link :to="{ name: 'rooms' }" class="btn">{{ t('nav2.book') }}</router-link>
          </div>
        </nav>
      </header>
    </div>

    <main class="flex-1" :class="onHome ? '' : 'pt-[112px]'"><router-view /></main>

    <footer class="mt-24 bg-ink text-paper">
      <div class="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-2">
          <p class="font-serif text-3xl">Elia Bay</p>
          <p class="mt-3 max-w-sm text-paper/70">{{ t('home2.lead') }}</p>
        </div>
        <div>
          <p class="font-medium">{{ t('footer.reception') }}</p>
          <p class="mt-2 text-paper/70">{{ t('footer.hours') }}</p>
          <p class="mt-1 text-paper/70">{{ t('footer.address') }}</p>
        </div>
        <div class="text-sm text-paper/60">
          <p>{{ t('demo.by') }}</p>
          <p class="mt-1">{{ t('demo.ai') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
