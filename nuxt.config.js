export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "career-ladders",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@sarah_edo" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://career-ladders.dev/"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Career Ladders for Tech, Open Sourced"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "A sample of career ladders Sarah Drasner uses for her organization, open sourced for anyone."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://career-ladders.dev/og-image.jpg"
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Career Ladders"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://career-ladders.dev/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Career Ladders for Tech, Open Sourced"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A sample of career ladders Sarah Drasner uses for her organization, open sourced for anyone."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://career-ladders.dev/og-image.jpg"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://career-ladders.dev/og-image.jpg"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Career Ladders"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cloud.typography.com/7626114/6154772/css/fonts.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fragment.client.js", "~/plugins/scrollspy.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
