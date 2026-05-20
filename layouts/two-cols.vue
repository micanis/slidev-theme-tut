<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue';
import bgImage from "../assets/BackGround.png"
</script>

<template>
  <div class="slidev-layout two-cols h-full w-full  bg-cover bg-no-repeat relative p-0" :style="{backgroundImage: `url(${bgImage})`}">
    
    <div class="absolute title-wrapper">
      <div class="text-3xl font-bold text-neutral-900">
        <slot name="title" />
      </div>
    </div>

    <div class="absolute content-area">

      <div class="min-h-0 h-full grid grid-cols-2 grid-rows-1 gap-8">

        <div class="relative min-h-0 h-full text-xl text-neutral-800 overflow-hidden">
          <slot name="left"/>
        </div>

        <div class="relative min-h-0 h-full text-xl text-neutral-800 overflow-hidden">
          <slot name="right" />
        </div>

      </div>

      <div v-if="$slots.conc" class="w-full text-2xl font-bold text-neutral-800 flex items-center justify-center">
        <slot name="conc" />
      </div>

    </div>

    <slide-number />

  </div>
</template>

<style scoped>
.title-wrapper {
    left: 9%;
    top: 4%;
    width:auto;
    height: 10%;
}
/* 先ほど確定した黄金比率コンテナ */
.content-area {
  left: 3.23%;
  top: 18.06%;
  width: 93.75%;
  height: 69.44%;
  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(2.5rem, auto);
  gap: 1rem;
  overflow: hidden;
}

.content-area :deep(p) {
  margin-bottom: 1rem;
}

.content-area > div:last-child :deep(p) {
  margin: 0 !important;
}
</style>