<script setup lang="ts">
defineProps({
  top: { type: String, default: "92.5%" },
  left: { type: String, default: "85%" },
  color: { type: String, default: "#171717" },
})
</script>

<template>
  <div
    class="absolute text-xl font-bold z-99"
    :style="{ top, left, color }"
  >
    {{ $slidev.nav.currentPage }}
  </div>
</template>
