<script setup>
const prop = defineProps(["url","alt"]);
</script>
<template>
<ul class="github-ul">
  <li>
    <NuxtLink :to=url>
      <img src="/img/GitHub-Mark-32px.png" :alt=alt>
    </NuxtLink>
  </li>
</ul>
</template>
