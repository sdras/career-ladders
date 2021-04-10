<template>
  <div class="nav">
    <div class="nav-icon">
      <svg
        height="50"
        width="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#f0f0f0">
          <path
            d="M66 39H34a3 3 0 010-6h32a3 3 0 010 6zM66 53H34a3 3 0 010-6h32a3 3 0 010 6zM66 67H34a3 3 0 010-6h32a3 3 0 010 6z"
          />
          <path
            d="M50 91a41 41 0 1141-41 41 41 0 01-41 41zm0-76a35 35 0 1035 35 35 35 0 00-35-35z"
          />
        </g>
      </svg>
    </div>
    <ul v-if="!matchMedia">
      <li><nuxt-link to="/engineering/">Engineering</nuxt-link></li>
      <li><nuxt-link to="/devex/">Developer Experience</nuxt-link></li>
      <li><nuxt-link to="/docs/">Documentation</nuxt-link></li>
      <li><nuxt-link to="/about/">About</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matchMedia: null
    };
  },
  mounted() {
    this.matchMedia = window.matchMedia("(max-width: 650px)").matches;
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  float: right;
}

li {
  padding-right: 40px;
}

a {
  color: #2d2d2d;
}

.nuxt-link-exact-active {
  font-weight: bold;
  color: #7e1ecb;
}

.nav-icon {
  width: 50px;
}

@media screen and (min-width: 650px) {
  .nav-icon {
    display: none;
  }

  ul {
    display: none !important;
  }
}
</style>
