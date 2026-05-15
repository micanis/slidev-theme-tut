<script setup lang="ts">
import SlideNumber from '../components/SlideNumber.vue';
import bgImage from "../assets/BackGround.png"
import { filterSectionSlides } from '../composables/useSectionSlides'
</script>

<template>
  <div class="slidev-layout section h-full w-full bg-cover bg-no-repeat relative p-0" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="hidden">
      <slot />
    </div>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-16">
      <div class="text-3xl font-bold text-neutral-900 tracking-widest">
        <template v-for="(item, index) in filterSectionSlides($slidev.nav.tocTree, $slidev.nav.slides)" :key="item.no">
          <span v-if="item.no === $slidev.nav.currentPage">
            {{ (index as number) + 1 }}. {{ item.title }}
          </span>
        </template>
      </div>
    </div>
    <slide-number />
  </div>
</template>
