<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue';
import bgImage from "../assets/BackGround.png"
import { filterSectionSlides } from '../composables/useSectionSlides'
</script>

<template>
  <div class="slidev-layout toc h-full w-full bg-cover bg-no-repeat relative p-0" :style="{ backgroundImage: `url(${bgImage})` }">

    <div class="absolute title-wrapper">
      <div class="text-3xl font-bold text-neutral-900">
        <slot name="title" />
      </div>
    </div>

    <div class="absolute content-area">
      <div class="flex flex-col gap-6 pt-8 pl-12 text-2xl font-bold text-neutral-800">
        <div v-for="(item, index) in filterSectionSlides($slidev.nav.tocTree, $slidev.nav.slides)" :key="item.no" class="flex items-center gap-4">
          <span class="text-neutral-600">{{ (index as number) + 1 }}.</span>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>

    <SlideNumber />
  </div>
</template>

<style scoped>
.title-wrapper {
  left: 9%;
  top: 4%;
  width: auto;
  height: 10%;
}
.content-area {
  left: 3.23%;
  top: 18.06%;
  width: 93.75%;
  height: 69.44%;
}
</style>
