import type { AnnouncerPoliteness } from '@nononavas/shadcn-vue/composables/useAnnouncer'

export { default as Announcer } from './Announcer.vue'

export interface AnnouncerProps {
  atomic?: boolean
  politeness?: AnnouncerPoliteness
}

export interface AnnouncerSlotProps {
  message: string
}
