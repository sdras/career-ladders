<template>
  <main>
    <aside></aside>
    <app-logo></app-logo>
    <app-title></app-title>
    <app-nav></app-nav>
    <app-github-corner></app-github-corner>
    <Nuxt />
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import AppTitle from "@/components/AppTitle.vue";
import AppNav from "@/components/AppNav.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppLogo,
    AppTitle,
    AppNav,
    AppGithubCorner,
    AppFooter
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

body {
  overflow-x: hidden;
  position: relative;
  top: 0;
  bottom: 0;
}

main {
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  grid-template-rows: 75px 250px repeat(3, 1fr) 50px;
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

footer {
  grid-area: 6 / 1 / 7 / 4;
  background: #2d2d2d;
  width: 100%;
  padding: 20px 30px;
  color: white;
  text-align: center;
  margin-top: -50px;
}

section.maincontent {
  grid-area: 3 / 1 / 7 / 3;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 80px;
  position: relative;
  height: 100%;
  padding-bottom: 150px;
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

.italic {
  font-style: italic;
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

/* Responsive */

@media screen and (max-width: 1400px) {
  main {
    grid-template-columns: 1.5fr 3fr 100px;
    grid-template-rows: 75px 250px repeat(3, 1fr) 50px;
    grid-column-gap: 40px;
    grid-row-gap: 30px;
  }

  section.maincontent {
    grid-template-columns: 1.5fr 3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
  }
}

@media screen and (max-width: 1000px) {
  h1 {
    font-size: 80px;
    font-weight: bold;
  }
}

@media screen and (max-width: 650px) {
  h1 {
    font-size: 50px;
  }

  main {
    grid-template-columns: 3fr 80px !important;
    grid-template-rows: 85px 200px repeat(3, 1fr) 80px;
    grid-column-gap: 0 !important;
    grid-row-gap: 0;
  }

  aside {
    display: none;
  }

  .logo {
    grid-area: 1 / 1 / 2 / 2;
    background: #2d2d2d;
    padding: 20px 10px;
  }
  .nav {
    grid-area: 1 / 2 / 2 / 3;
    padding: 20px 20px 0 0;
    background: #2d2d2d;
    color: white;
  }
  .title {
    grid-area: 2 / 1 / 3 / 3;
    padding: 0 20px;
    width: calc(100vw - 20px);
  }
  section.maincontent {
    padding: 40px 20px 100px;
    grid-area: 3 / 1 / 6 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 20px;
    max-width: calc(100vw - 20px);
  }
  .sidebar {
    display: none;
  }
  .content {
    grid-area: 1 / 1 / 2 / 2;
  }
  footer {
    grid-area: 6 / 1 / 7 / 3;
    max-width: calc(100vw - 20px);
  }
}
</style>
