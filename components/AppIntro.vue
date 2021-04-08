<template>
  <fragment>
    <div class="content">
      <hr />
      <p>
        Roles up to and including Senior, ladders are constructed around
        becoming the best at what one does that one might personally be.
      </p>
      <p>
        At Staff level, the career expands to help others be successful with
        what you do and know, and scale yourself.
      </p>
      <p>
        At Principal and beyond, you are trying to help others be the best that
        they can be, removing yourself and meeting others where they are.
      </p>
      <p>
        Each team in the department has different approaches and roles. Their
        individual career laddering is defined below:
      </p>
      <h2><nuxt-link to="/engineering">Engineering ▸</nuxt-link></h2>
      <h2><nuxt-link to="/devex">Developer Experience ▸</nuxt-link></h2>
      <h2><nuxt-link to="/docs">Documentation ▸</nuxt-link></h2>
    </div>
  </fragment>
</template>

<script>
export default {};
</script>

<style scoped>
hr {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
}

h2:first-of-type {
  margin-top: 40px;
}

a {
  margin-left: 10px;
}
</style>
