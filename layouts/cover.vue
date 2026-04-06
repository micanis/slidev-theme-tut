<template>
  <div class="slidev-layout cover h-full w-full bg-[url('/BackGround.png')] bg-cover bg-no-repeat relative p-0">
    
    <div class="absolute top-[40%] left-0 w-full text-center">
      
      <div class="title-wrapper text-4xl font-bold text-neutral-900">
        <slot name="header" />
      </div>
      
      <div class="date-wrapper mt-10 text-xl font-normal text-neutral-800 flex flex-col gap-0">
        <slot name="date" />
      </div>

    </div>

  </div>
</template>

<style scoped>
.date-wrapper :deep(p) {
  margin: 0 !important;
}
</style>