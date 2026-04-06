<script setup>
import SlideNumber from '../components/SlideNumber.vue';

</script>

<template>
  <div class="slidev-layout section h-full w-full bg-[url('/BackGround.png')] bg-cover bg-no-repeat relative p-0">
    <div class="hidden">
      <slot />
    </div>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-16">
      <div class="text-3xl font-bold text-neutral-900 tracking-widest">
        <template v-for="(item, index) in $slidev.nav.tocTree.filter(i => i.level === 1)" :key="item.no">
          <span v-if="item.no === $slidev.nav.currentPage">
            {{ index + 1 }}. {{ item.title }}
          </span>
        </template>
        </div>
      </div>
    <slide-number />
  </div>
</template>