<template>
  <section class="maincontent">
    <app-ladderimg></app-ladderimg>
    <app-intro></app-intro>
  </section>
</template>

<script>
import AppLadderimg from "@/components/AppLadderimg.vue";
import AppIntro from "@/components/AppIntro.vue";

export default {
  components: {
    AppLadderimg,
    AppIntro
  }
};
</script>

<style scoped>
/* 
old code
.sidebar {
  grid-area: 3 / 1 / 6 / 2;
  color: #ccc;
}
.sidebar a {
  color: #ccc;
}
ul.sidebar {
  padding-left: 80px;
  line-height: 1.6;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
.content {
  grid-area: 3 / 2 / 6 / 3;
} */
</style>
