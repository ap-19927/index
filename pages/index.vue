<script setup>
const projects = useState("projects", () => [
  { projectURL: "https://roadpeoples.com/", projectDesc: "OpenLayers public facilities map", gitHubURL: "https://github.com/ap-19927/rp/", altText: "source code of OpenLayers public facilities map on Github", },
  { projectURL: "", projectDesc: "Nginx reverse proxy and Letsencrypt certificates via Docker", gitHubURL: "https://github.com/ap-19927/webServer/", altText: "source code of webServer on Github", },
  { projectURL: "https://model.roadpeoples.com/", projectDesc: "deep learning model trained to identify Katja", gitHubURL: "https://github.com/ap-19927/model/", altText: "source code of model on Github", },
  { projectURL: "/", projectDesc: "this website", gitHubURL: "https://github.com/ap-19927/index/", altText: "source code of this website on Github", },
  { projectURL: "https://post.roadpeoples.com/", projectDesc: "public thread", gitHubURL: "https://github.com/ap-19927/post/", altText: "source code of post on Github", },
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
