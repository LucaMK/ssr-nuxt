import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'http://api.map.baidu.com/api?v=2.0&ak=qzQVer2rGbcbREEU8nlLunNuTDuXSYEt', type: 'text/javascript'}
      // {src: 'http://api.map.baidu.com/api?v=2.0&ak=qzQVer2rGbcbREEU8nlLunNuTDuXSYEt', type: 'text/javascript'},
      // {src: 'https://cdn.bootcss.com/html5media/1.1.8/html5media.js', type: 'javascript'},
      // {src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js', type: 'javascript'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/static/index.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',                      // axios 配置
    '@/plugins/debounce',                   // lodash debounce 插件
    '@/plugins/element-ui',                 // element-ui 插件
    '@/plugins/routerFilter',               // 路由守卫
    '@/static/swiper/swiper.animate1.0.3.min'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * server port 配置
   */
  server: {
    port: 80, // default: 3000
  },

  proxy:{
    '/v3': {
      target: 'http://49.4.10.112:8080/',
      ws: true,
      changOrigin: true, // 接口跨域，需要配置这个参数
      pathRewrite: { // 重写地址
        '^/v3': '/v3'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
