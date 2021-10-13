const pkg = require('./package')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'DOIT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/normalize.css',
    '~/assets/style/global.scss',
    '~/assets/style/input.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/v-calednar.js',
      mode: 'client'
    },
    '~/plugins/v-select.js',
    '~/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/firebase',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  firebase: {
    config : {
      apiKey: "AIzaSyCI7KDDg8xKHA7a3bRmZIJxyht3CcfuAyA",
      authDomain: "doit-abd08.firebaseapp.com",
      projectId: "doit-abd08",
      storageBucket: "doit-abd08.appspot.com",
      messagingSenderId: "688462632224",
      appId: "1:688462632224:web:ffc13200205d5493d37345",
      measurementId: "G-JY9TF1K9T7"
    },
    services : {
      auth: true,
      database: true,
      storage: true
    }
  },

  styleResources: {
    scss: [
      'assets/style/global.scss'
    ]
  }
}
