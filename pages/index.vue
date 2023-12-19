<script setup>
const projects = useState("projects", () => [
  { projectURL: "https://model.roadpeoples.com/", projectDesc: "deep learning model trained to identify Katja", gitHubURL: "https://github.com/ap-19927/model/", altText: "source code of model on Github", },
  { projectURL: "/", projectDesc: "this website", gitHubURL: "https://github.com/ap-19927/index/", altText: "source code of this website on Github", },
  { projectURL: "https://post.roadpeoples.com/", projectDesc: "public thread", gitHubURL: "https://github.com/ap-19927/post/", altText: "source code of post on Github", },
  { projectURL: "", projectDesc: "minimal host and virtualization setup for gpu passthrough", gitHubURL: "https://github.com/ap-19927/gpu_passthrough/", altText: "source code of virtualization on Github", },
  { projectURL: "https://replit.com/@ap19927/inventory#.replit/", projectDesc: "crud inventory", gitHubURL: "https://github.com/ap-19927/inventory/", altText: "source code of inventory on Github", },
  { projectURL: "https://local.roadpeoples.com/", projectDesc: "peer-to-peer messaging", gitHubURL: "https://github.com/ap-19927/lr/", altText: "source code of peer-to-peer messaging on Github", },
  { projectURL: "https://breaker.roadpeoples.com/", projectDesc: "dummy circom circuit", gitHubURL: "https://github.com/ap-19927/breakersq/", altText: "source code of circom circuit on Github", },
  { projectURL: "https://roadpeoples.com/", projectDesc: "OpenLayers fetching GraphHopper routing API", gitHubURL: "https://github.com/ap-19927/rp/", altText: "source code of OpenLayers fetching GraphHopper API on Github", },
])
</script>
<template>
<div>
  <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">projects</h1>
  <ul class="menu bg-base-400 rounded-box">
    <li v-for="(project, index) in projects">
      <div class="w-fit">
        <NuxtLink :to=project.projectURL> {{project.projectDesc }} </NuxtLink>
      </div>
      <ul class="menu bg-base-400 rounded-box">
        <li>
          <GitHubLink :url=project.gitHubURL :alt=project.altText />
        </li>
      </ul>
    </li>
    <li>
      <div class="w-fit">
        <NuxtLink to="/notes">math notes</NuxtLink>
      </div>
    </li>
  </ul>
</div>
</template>
