<template>
  <div class="nav">
    <ul>
      <li><nuxt-link to="/engineering/">Engineering</nuxt-link></li>
      <li><nuxt-link to="/devex/">Developer Experience</nuxt-link></li>
      <li><nuxt-link to="/docs/">Documentation</nuxt-link></li>
      <li><nuxt-link to="/docs/">About</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
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
</style>
