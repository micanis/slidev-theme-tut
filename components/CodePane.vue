<script setup lang="ts">
import AutoFit from './AutoFit.vue'

defineProps({
  width: {
    type: String,
    default: '800px'
  }
})
</script>

<template>
  <div class="h-full w-full flex justify-center items-stretch">
    <AutoFit>
      <div :style="{ width: width }">
        <slot />
      </div>
    </AutoFit>
  </div>
</template>
