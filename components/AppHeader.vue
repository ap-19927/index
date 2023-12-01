<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'emerald',
  'black',
];
</script>
<template>
  <div>
    <head>
      <title> Pappy's webpage </title>
    </head>
    <header>
      <nav>
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl" href="/">index</a>
            <a class="btn btn-ghost text-xl" href="/contact">contact</a>
          </div>
          <div class="flex-none gap-2">
            <select class="select w-full max-w-xs" v-model="colorMode.preference">
              <option disabled selected>Theme</option>
              <option v-for="theme of themes" :key="theme">{{ theme }}</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
