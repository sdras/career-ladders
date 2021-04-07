<template>
  <main>
    <aside></aside>
    <app-logo></app-logo>
    <app-nav></app-nav>
    <Nuxt />
  </main>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import AppNav from "@/components/AppNav.vue";

export default {
  components: {
    AppLogo,
    AppNav
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-height: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border-left: 20px solid #7e1ecb;
  background: #f0f0f0;
  color: #2d2d2d;
}

main {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  grid-template-rows: 75px repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

aside {
  grid-area: 1 / 1 / 6 / 2;
  color: #f0f0f0;
  background: #2d2d2d;
}
.logo {
  grid-area: 1 / 1 / 2 / 2;
  padding: 20px;
}
.navigation {
  grid-area: 1 / 2 / 2 / 4;
  padding: 20px;
}
.title {
  grid-area: 2 / 2 / 3 / 3;
}
.sidebar {
  grid-area: 3 / 1 / 4 / 2;
}
.content {
  grid-area: 3 / 2 / 4 / 3;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
