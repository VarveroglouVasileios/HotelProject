<script setup lang="ts">
import { computed } from 'vue'

export type IconName =
  | 'bed' | 'users' | 'ruler' | 'wave' | 'sun' | 'wifi' | 'coffee' | 'car' | 'snow' | 'kitchen'
  | 'pool' | 'leaf' | 'clock' | 'pin' | 'x' | 'left' | 'right' | 'menu' | 'arrow' | 'wine'
  | 'bell' | 'anchor' | 'home' | 'sunset'

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 22 })

const paths: Record<IconName, string> = {
  bed: 'M3 19v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 16h18M7 9V6h4v3',
  users: 'M16 20v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 20v-1a3 3 0 0 0-2-2.8M16 5.2a3 3 0 0 1 0 5.6',
  ruler: 'M3 17 17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2',
  wave: 'M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2',
  sun: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  wifi: 'M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M2 9a15 15 0 0 1 20 0',
  coffee: 'M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h2a2 2 0 0 1 0 4h-2M7 2v3M11 2v3M15 2v3',
  car: 'M3 17h18M3 13l2-6h14l2 6v4H3zM7 17v2M17 17v2M7.5 13h.01M16.5 13h.01',
  snow: 'M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7M9 4l3 2 3-2M9 20l3-2 3 2',
  kitchen: 'M6 3v8M10 3v8M6 7h4M8 11v10M17 3c-2 1-3 4-3 8h3v10',
  pool: 'M2 19c2 0 2-1.5 4-1.5S8 19 10 19s2-1.5 4-1.5S16 19 18 19s2-1.5 4-1.5M8 14V6a2 2 0 0 1 4 0M14 14V6a2 2 0 0 1 4 0M8 10h6',
  leaf: 'M5 19c0-8 5-13 14-14 0 9-5 14-13 14M5 19l7-7',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  pin: 'M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  x: 'M6 6l12 12M18 6 6 18',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  wine: 'M8 2h8l-1 8a3 3 0 0 1-6 0zM12 13v8M8 21h8',
  bell: 'M4 18h16M6 18a6 6 0 0 1 12 0M12 6v2M10 6h4',
  anchor: 'M12 7v14M12 5.5a1.5 1.5 0 1 0 0-.01M5 12H3a9 9 0 0 0 18 0h-2M8 11h8',
  home: 'M3 11l9-8 9 8v9H3zM9 20v-6h6v6',
  sunset: 'M17 18a5 5 0 0 0-10 0M12 9V2M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4',
}

const d = computed(() => paths[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="shrink-0"
  >
    <path :d="d" />
  </svg>
</template>
