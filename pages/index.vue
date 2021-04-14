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

<style scoped></style>
