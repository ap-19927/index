<script setup>
const prop = defineProps(["url","alt"]);
const colorMode = useColorMode();
</script>
<template>
<div class="w-fit">
  <NuxtLink :to=url>
    <img v-if="colorMode.preference == 'emerald'" src="/img/github-mark.png" :alt=alt class="h-[32px] w-[32px]">
    <img v-if="colorMode.preference == 'black'" src="/img/github-mark-white.png" :alt=alt class="h-[32px] w-[32px]">
  </NuxtLink>
</div>
</template>
