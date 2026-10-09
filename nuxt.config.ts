// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  components: true,
  app: {
    head: {
      title: "career-ladders",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "" },

        // Twitter
        // Test on: https://cards-dev.twitter.com/validator
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        { name: "twitter:site", content: "@sarah_edo" },
        {
          name: "twitter:url",
          content: "https://career-ladders.dev/",
        },
        {
          name: "twitter:title",
          content: "Career Ladders for Tech, Open Sourced",
        },
        {
          name: "twitter:description",
          content:
            "A sample of career ladders Sarah Drasner uses for her organization, open sourced for anyone.",
        },
        {
          name: "twitter:image",
          content: "https://career-ladders.dev/og-image.jpg",
        },

        // Open Graph
        // Test on: https://developers.facebook.com/tools/debug/
        {
          property: "og:site_name",
          content: "Career Ladders",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://career-ladders.dev/",
        },
        {
          property: "og:title",
          content: "Career Ladders for Tech, Open Sourced",
        },
        {
          property: "og:description",
          content:
            "A sample of career ladders Sarah Drasner uses for her organization, open sourced for anyone.",
        },
        {
          property: "og:image",
          content: "https://career-ladders.dev/og-image.jpg",
        },
        {
          property: "og:image:secure_url",
          content: "https://career-ladders.dev/og-image.jpg",
        },
        {
          property: "og:image:alt",
          content: "Career Ladders",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans+Narrow:wght@400;700&display=swap",
        },
      ],
    },
  },
});
