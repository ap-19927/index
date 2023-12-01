<script setup>
const prop = defineProps(["url","alt"]);
</script>
<template>
<div class="w-fit">
  <NuxtLink :to=url>
    <img src="/img/GitHub-Mark-32px.png" :alt=alt>
  </NuxtLink>
</div>
</template>
