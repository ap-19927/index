<script setup>
const projects = ref([
  { projectURL: "/", projectDesc: "this website", gitHubURL: "https://github.com/ap-19927/index/", altText: "source code of this website on Github", },
  { projectURL: "https://post.roadpeoples.com/", projectDesc: "public thread", gitHubURL: "https://github.com/ap-19927/post/", altText: "source code of post on Github", },
  { projectURL: "", projectDesc: "minimal host and virtualization setup for gpu passthrough", gitHubURL: "https://github.com/ap-19927/gpu_passthrough/", altText: "source code of virtualization on Github", },
  { projectURL: "https://local.roadpeoples.com/", projectDesc: "peer-to-peer messaging", gitHubURL: "https://github.com/ap-19927/lr/", altText: "source code of peer-to-peer messaging on Github", },
  { projectURL: "https://replit.com/@ap19927/inventory#.replit/", projectDesc: "crud inventory", gitHubURL: "https://github.com/ap-19927/inventory/", altText: "source code of inventory on Github", },
  { projectURL: "https://breaker.roadpeoples.com/", projectDesc: "dummy circom circuit", gitHubURL: "https://github.com/ap-19927/breakersq/", altText: "source code of circom circuit on Github", },
  { projectURL: "https://roadpeoples.com/", projectDesc: "OpenLayers fetching GraphHopper routing API", gitHubURL: "https://github.com/ap-19927/rp/", altText: "source code of OpenLayers fetching GraphHopper API on Github", },
  { projectURL: "https://blog.roadpeoples.com/", projectDesc: "blog website for Ryker", gitHubURL: "https://github.com/ap-19927/pole-diversity/", altText: "source code of blog on Github", },
])
</script>
<template>
<div>
  <h1>projects</h1>
  <ul>
    <li v-for="(project, index) in projects">
      <NuxtLink :to=project.projectURL> {{project.projectDesc }} </NuxtLink>
      <GitHubLink :url=project.gitHubURL :alt=project.altText />
    </li>
    <li>
      <a href="/notes">math notes</a>
    </li>
  </ul>
</div>
</template>
