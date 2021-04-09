<template>
  <section class="maincontent">
    <app-ladderimg></app-ladderimg>
    <app-about></app-about>
  </section>
</template>

<script>
import AppLadderimg from "@/components/AppLadderimg.vue";
import AppAbout from "@/components/AppAbout.vue";

export default {
  components: {
    AppLadderimg,
    AppAbout
  }
};
</script>

<style scoped></style>
