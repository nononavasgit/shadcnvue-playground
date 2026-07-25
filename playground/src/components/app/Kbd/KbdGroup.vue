<script setup lang="ts">
import { useAttrs } from 'vue'
import { KbdGroup as KbdGroupBase } from '@nononavas/shadcn-vue/components/ui/Kbd'

defineOptions({ inheritAttrs: false })

defineSlots<{
  default?(): unknown
}>()

const attrs = useAttrs()
</script>

<template>
  <KbdGroupBase v-bind="attrs">
    <slot />
  </KbdGroupBase>
</template>
