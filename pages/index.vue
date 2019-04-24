<template>
  <div id="app">
    <p>{{isClient}}</p>
    <aside-nav></aside-nav>
    <no-ssr>
      <home-page></home-page>
    </no-ssr>
    <!-- <footerBtm /> -->
  </div>
</template>

<script>
  import {footerBtm, asideNav, headNav} from "~/components"
  import homePage from '~/components/home/homePage.vue'
  export default {
    components:{footerBtm, asideNav, headNav, homePage},
    data(){
      return{
        isClient: process.client ? 'true' : 'false'
      }
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
