<script setup>
const notes = useState("notes", () => [
  { noteURL: "/docs/curves_series.pdf", noteDesc: "Curves and series notes" },
  { noteURL: "/docs/pde.pdf", noteDesc: "PDE notes" },
  { noteURL: "/docs/college_alg_notes.pdf", noteDesc: "College algebra notes" },
  { noteURL: "/docs/sol'n_college_alg_notes.pdf",
    noteDesc: "Some partial solutions to exercises found in College algebra notes"
  },
  { noteURL: "/docs/notes.pdf", noteDesc: "Multivariable calculus notes" },
  { noteURL: "/docs/Allmann_Lin_Zhu.pdf", noteDesc: "Modified mean curvature flow of entire locally Lipschitz radial graphs in hyperbolic space" },
]);
</script>
<template>
<h1 class="hidden"> notes </h1>
<ul class="menu bg-base-400 w-fit rounded-box">
  <li v-for="(note, index) in notes" class="w-fit">
    <a :href=note.noteURL download> {{note.noteDesc}} </a>
  </li>
</ul>
</template>
