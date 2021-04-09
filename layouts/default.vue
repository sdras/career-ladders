<template>
  <main>
    <app-social-head></app-social-head>
    <aside></aside>
    <app-logo></app-logo>
    <app-title></app-title>
    <app-nav></app-nav>
    <app-github-corner></app-github-corner>
    <Nuxt />
  </main>
</template>

<script>
import AppSocialHead from "@/components/AppSocialHead.vue";
import AppLogo from "@/components/AppLogo.vue";
import AppTitle from "@/components/AppTitle.vue";
import AppNav from "@/components/AppNav.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";

export default {
  components: {
    AppSocialHead,
    AppLogo,
    AppTitle,
    AppNav,
    AppGithubCorner
  }
};
</script>

<style>
html {
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  min-width: 100%;
  box-sizing: border-box;
  border-left: 15px solid #7e1ecb;
  background: #f0f0f0;
  color: #2d2d2d;
  line-height: 1.4;
}

main {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  grid-template-rows: 75px 250px repeat(3, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 50px;
}

aside {
  grid-area: 1 / 1 / 6 / 2;
  color: #f0f0f0;
  background: #2d2d2d;
  min-height: 100vh;
  height: 100%;
}

.logo {
  grid-area: 1 / 1 / 2 / 2;
  padding: 20px;
}

.nav {
  grid-area: 1 / 2 / 2 / 4;
  padding: 20px 60px 0 0;
}

.title {
  grid-area: 2 / 2 / 3 / 3;
}

section.maincontent {
  grid-area: 3 / 1 / 7 / 3;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 80px;
  position: relative;
  height: 100%;
}

.sidebar ul {
  color: #ccc;
  padding-top: 40px;
  padding-left: 80px;
  line-height: 1.6;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}

.sidebar a {
  color: #ccc;
  cursor: pointer;
}

.content div {
  margin-bottom: 50px;
  padding-top: 30px;
  border-top: 1px solid #ccc;
}

.content li {
  margin-bottom: 5px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: #7e1ecb;
}

h1,
h2,
h3 {
  font-family: "Verlag Cond A", "Verlag Cond B";
  font-style: normal;
}

h1 {
  font-weight: 300;
}

h2,
h3 {
  font-weight: 700;
}

h1 {
  font-size: 120px;
  margin-top: 75px;
}

p {
  margin-bottom: 20px;
}

.active,
.active a {
  color: white;
  font-weight: bold;
}
</style>
