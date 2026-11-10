<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from './Icon.vue'

export interface LightboxItem {
  src: string
  alt: string
  caption: string
}

const props = defineProps<{ items: LightboxItem[]; index: number | null }>()
const emit = defineEmits<{ close: []; change: [index: number] }>()

const { t } = useI18n()
const panel = ref<HTMLElement | null>(null)
const open = computed(() => props.index !== null)
const current = computed(() => (props.index === null ? null : props.items[props.index]))

const go = (delta: number): void => {
  if (props.index === null) return
  emit('change', (props.index + delta + props.items.length) % props.items.length)
}

const onKey = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'ArrowLeft') go(-1)
}

watch(open, async (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    await nextTick()
    panel.value?.focus()
  } else {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="open && current" class="fixed inset-0 z-[60] flex flex-col bg-ink/95" role="dialog" aria-modal="true" :aria-label="current.alt" @click.self="emit('close')">
    <div ref="panel" tabindex="-1" class="flex flex-1 flex-col items-center justify-center p-4 outline-none sm:p-8" @click.self="emit('close')">
      <img :src="current.src" :alt="current.alt" class="max-h-[78vh] w-auto max-w-full rounded-sm object-contain" />
      <p class="mt-4 max-w-xl text-center font-serif text-lg italic text-paper/90">{{ current.caption }}</p>
    </div>
    <button type="button" class="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full text-paper hover:bg-white/10 sm:right-6 sm:top-6" :aria-label="t('lightbox.close')" @click="emit('close')">
      <Icon name="x" :size="26" />
    </button>
    <button v-if="items.length > 1" type="button" class="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-paper hover:bg-white/10 sm:left-6" :aria-label="t('lightbox.prev')" @click="go(-1)">
      <Icon name="left" :size="28" />
    </button>
    <button v-if="items.length > 1" type="button" class="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full text-paper hover:bg-white/10 sm:right-6" :aria-label="t('lightbox.next')" @click="go(1)">
      <Icon name="right" :size="28" />
    </button>
  </div>
</template>
