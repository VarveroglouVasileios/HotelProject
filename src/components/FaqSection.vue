<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'
import { faqCategories, faqs, quickFacts, type FaqCategory } from '@/data/content'

const { t, locale } = useI18n()
const lang = computed(() => (locale.value === 'en' ? 'en' : 'el'))

const active = ref<FaqCategory | 'all'>('all')
const openIndex = ref<number | null>(0)

const visible = computed(() => faqs.filter((f) => active.value === 'all' || f.cat === active.value))
const catIcon = (id: FaqCategory) => faqCategories.find((c) => c.id === id)?.icon ?? 'pin'

const choose = (id: FaqCategory | 'all'): void => {
  active.value = id
  openIndex.value = 0
}
const toggle = (i: number): void => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="wrap mt-28 md:mt-36" aria-labelledby="faq-title">
    <div v-reveal class="max-w-2xl">
      <p class="text-base font-medium text-clay-600">{{ t('faq2.kicker') }}</p>
      <h2 id="faq-title" class="mt-3 text-3xl sm:text-5xl">{{ t('faq2.title') }}</h2>
      <p class="mt-4 text-lg text-ink-soft">{{ t('faq2.lead') }}</p>
    </div>

    <!-- Quick facts: the answers most guests look for first -->
    <ul v-reveal class="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-rule bg-rule lg:grid-cols-4">
      <li v-for="f in quickFacts" :key="f.label.en" class="bg-paper p-5 sm:p-6">
        <span class="text-sea-600"><Icon :name="f.icon" :size="24" /></span>
        <p class="mt-4 font-serif text-2xl leading-tight sm:text-3xl">{{ f.value[lang] }}</p>
        <p class="mt-1 text-sm text-ink-soft">{{ f.label[lang] }}</p>
      </li>
    </ul>

    <div class="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
      <!-- Questions -->
      <div class="min-w-0 lg:col-span-8">
        <div class="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="tablist" aria-label="FAQ">
          <button
            type="button"
            role="tab"
            class="shrink-0 rounded-full border px-4 py-2 text-base transition-colors"
            :class="active === 'all' ? 'border-ink bg-ink text-paper' : 'border-rule bg-white hover:border-ink-soft'"
            :aria-selected="active === 'all'"
            @click="choose('all')"
          >
            {{ t('faq2.all') }}
          </button>
          <button
            v-for="c in faqCategories"
            :key="c.id"
            type="button"
            role="tab"
            class="flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-base transition-colors"
            :class="active === c.id ? 'border-ink bg-ink text-paper' : 'border-rule bg-white hover:border-ink-soft'"
            :aria-selected="active === c.id"
            @click="choose(c.id)"
          >
            <Icon :name="c.icon" :size="18" />{{ c.label[lang] }}
          </button>
        </div>

        <ul class="mt-6 border-t border-rule">
          <li v-for="(f, i) in visible" :key="f.q.en" class="border-b border-rule">
            <h3 class="font-sans">
              <button
                type="button"
                class="flex w-full items-start gap-4 py-5 text-left"
                :aria-expanded="openIndex === i"
                :aria-controls="`faq-panel-${i}`"
                @click="toggle(i)"
              >
                <span class="mt-1 text-sea-600"><Icon :name="catIcon(f.cat)" :size="22" /></span>
                <span class="flex-1 font-serif text-xl leading-snug transition-colors sm:text-[1.35rem]" :class="openIndex === i ? 'text-sea-600' : ''">{{ f.q[lang] }}</span>
                <span class="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xl leading-none transition-all duration-300" :class="openIndex === i ? 'rotate-45 border-sea-600 bg-sea-600 text-white' : 'border-rule'" aria-hidden="true">+</span>
              </button>
            </h3>
            <div
              :id="`faq-panel-${i}`"
              class="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              :class="openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              role="region"
            >
              <div class="overflow-hidden">
                <p class="max-w-2xl pb-6 pl-[38px] text-lg text-ink-soft">{{ f.a[lang] }}</p>
              </div>
            </div>
          </li>
        </ul>
        <p class="mt-4 text-sm text-ink-soft">{{ t('faq2.count', { n: visible.length }) }}</p>
      </div>

      <!-- Contact card -->
      <aside class="lg:col-span-4">
        <div class="rounded-sm bg-ink p-7 text-paper lg:sticky lg:top-32">
          <span class="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-clay-500"><Icon name="bell" :size="24" /></span>
          <h3 class="mt-5 text-2xl text-paper">{{ t('faq2.noAnswerTitle') }}</h3>
          <p class="mt-3 text-paper/75">{{ t('faq2.noAnswerText') }}</p>
          <p class="mt-5 text-sm text-paper/60">{{ t('faq2.emailLabel') }}</p>
          <p class="font-medium">reception@eliabay.example</p>
          <a href="#search" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper">
            {{ t('faq2.cta') }} <Icon name="arrow" :size="18" />
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>
