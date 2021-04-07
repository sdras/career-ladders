<template>
  <fragment>
    <ul v-scroll-spy-active v-scroll-spy-link>
      <li>
        <a>Menu 1</a>
      </li>
      <li>
        <a>Menu 2</a>
      </li>
    </ul>

    <div v-scroll-spy>
      <div>
        <h1>Header 1</h1>
        <p>Content</p>
      </div>
      <div>
        <h1>Header 2</h1>
        <p>Content</p>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {};
</script>

<style scoped></style>
