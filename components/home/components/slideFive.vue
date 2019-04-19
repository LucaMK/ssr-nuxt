<template>
  <div class="slide-five">
    <div class="center-body">
      <img src="../../../assets/images/index5-1-2.png" width="1000" height="541"/>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="scss">
@import '@/static/index.scss';
  .slide-five{
    width: 100%;
    height: 100%;
    @include homeCommon("../../../assets/images/index5-1-1.jpg");
    .center-body {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
