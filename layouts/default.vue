<template>
  <div class="default-con">
    <head-nav></head-nav>
    <div class="layout-default-body">
      <nuxt />
    </div>
  </div>
</template>

<script>
import headNav from '~/components/headNav.vue'
export default {
  components: {
    headNav,
  }
}
</script>

<style lang="scss">
@import '~/static/index.scss';

html{
  overflow-y: overlay;
}

::-webkit-scrollbar {
  width: .3rem;
  height: .5rem;
  background: hsla(0, 0%, 100%, 0.6);
}

::-webkit-scrollbar-track {
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: rgba(95,95,95,.4);
  transition: all .2s;
  border-radius: .5rem;

  &:hover {
    background-color: rgba(95,95,95, .7);
  }
}

body {
  width: 100vw;
  // overflow-y: scroll;
  scrollbar-base-color: transparent;
  scrollbar-darkshadow-color: transparent;
  scrollbar-highlight-color: transparent;
  scrollbar-face-color: transparent;
}

.default-con{
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .layout-default-body{
    width: 100%;
    height: 100%;
    // padding-top: 80px;
  }
}
</style>
