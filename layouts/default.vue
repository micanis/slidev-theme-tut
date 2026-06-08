<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue';
import bgImage from "../assets/BackGround.png"
</script>

<template>
  <div class="slidev-layout default h-full w-full bg-cover bg-no-repeat relative p-0" :style="{ backgroundImage: `url(${bgImage})` }">
    
    <div class="absolute title-wrapper">
      <div class="text-3xl font-bold text-neutral-900">
        <slot name="title" />
      </div>
    </div>

    <div v-fit class="absolute content-area">
      <div class="content-grid" :class="{ 'has-conc': $slots.conc }">
        <div class="default-slot min-h-0 h-full text-xl text-neutral-800 leading-relaxed overflow-hidden">
          <slot />
        </div>

        <div v-if="$slots.conc" class="conc-slot w-full text-2xl font-bold text-neutral-800 flex items-center justify-center">
          <slot name="conc" />
        </div>
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
/* Figmaの数値をパーセンテージに変換して完璧に配置 */
.content-area {
  left: 3.23%;
  top: 18.06%;
  width: 93.75%;
  height: 69.44%;
}

.content-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  gap: 0;
  overflow: hidden;
}

.content-grid.has-conc {
  grid-template-rows: minmax(0, 1fr) minmax(2.5rem, auto);
  gap: 1rem;
}

/* （任意）Markdownで普通に文字を打った時の段落の余白を整える */
.content-grid :deep(p) {
  margin-bottom: 1rem;
}

.content-grid :deep(.conc-slot p) {
  margin: 0 !important;
}
</style>
