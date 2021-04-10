<template>
  <div class="nav">
    <div class="nav-icon">
      <svg
        @click="isOpen = !isOpen"
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
    <div class="nav-display" v-if="isDisplaying">
      <ul @click="isOpen = !isOpen">
        <li><nuxt-link to="/engineering/">Engineering</nuxt-link></li>
        <li><nuxt-link to="/devex/">Developer Experience</nuxt-link></li>
        <li><nuxt-link to="/docs/">Documentation</nuxt-link></li>
        <li><nuxt-link to="/about/">About</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matchMedia: null,
      isOpen: false
    };
  },
  methods: {
    isNavClicked(e) {
      console.log(e.target.childNodes);
    }
  },
  computed: {
    isDisplaying() {
      if (this.matchMedia) {
        return this.isOpen ? true : false;
      } else {
        return true;
      }
    }
  },
  mounted() {
    this.matchMedia = window.matchMedia("(max-width: 900px)").matches;
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
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  li {
    padding-right: 30px;
  }
}

@media screen and (min-width: 900px) {
  .nav-icon {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .nav-display {
    top: 80px;
    right: 0;
    position: absolute;
    z-index: 300;
    width: 300px;
    background: #2d2d2d;
    color: #f0f0f0;
  }

  ul {
    flex-direction: column;
    width: 100%;
    padding: 20px 40px 40px;
    line-height: 1.8;
  }

  a {
    color: #f0f0f0;
  }

  .nuxt-link-exact-active {
    font-weight: bold;
    color: #fff;
  }
}
</style>
