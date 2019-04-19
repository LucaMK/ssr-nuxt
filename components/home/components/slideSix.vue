<template>
  <div class="slide-six">
    <div class="center-body">
      <div class="left-con">
        <img src="../../../assets/images/index6-1-5.png" width="291" height="82"/>
        <ul class="good-list">
          <li><img src="../../../assets/images/index6-1-6.png"/>移动办公，便捷高效</li>
          <li><img src="../../../assets/images/index6-1-6.png"/>随时查看销售动态</li>
          <li><img src="../../../assets/images/index6-1-6.png"/>自由比对历史数据</li>
        </ul>
        <div class="scan-con">
          <div class="scan-img">
            <img src="../../../assets/images/downApp.png" width="131" height="131"/>
            <p>扫码下载长青管家APP</p>
          </div>
          <div class="down-btn">
            <a><img src="../../../assets/images/index6-1-4.png"/>iphone版下载</a>
            <a><img src="../../../assets/images/index6-1-3.png"/>Android版下载</a>
          </div>
        </div>
      </div>
      <img class="right-img" src="../../../assets/images/index6-1-2.png" width="991" height="585"/>
    </div>
    <footer-btm class="foot-bar" v-if="showFoot"></footer-btm>
  </div>
</template>
<script>
  import { footerBtm } from "../../../components"
  export default {
    components:{footerBtm},
    props:{
      showFoot:{
        type:Boolean,
      }
    },
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="scss">
  .slide-six{
    width: 100%;
    height: calc(100% - 80px);
    background: url("../../../assets/images/index6-1-1.jpg") center center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0 0;
    position: relative;
    .foot-bar{
      transition: all 1s;
      flex: 0 0 auto;
      bottom: 0;
      left: 0;
      position: absolute;
      animation: myShow 1s;
    }
    @keyframes myShow
    {
      0%   {bottom: -70%;}
      50%  {bottom: -30%;}
      100% {bottom: 0;}
    }
    .center-body {
      width: 1200px;
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      .left-con{
        width: 320px;
        margin: 0 60px 0 170px;
        flex: 0 0 auto;
        .good-list{
          margin: 50px 0 40px;
          li{
            display: flex;
            align-items: center;
            font-size: 18px;
            margin: 10px 0 ;
            >img{
              width: 14px;
              height: 14px;
              margin: 0 20px 0 0;
            }
          }
        }
        .scan-con{
          display: flex;
          .scan-img{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 16px 0 0;
            >p{
              font-size: 14px;
              line-height: 48px;
              color: #006d6a;
            }
          }
          .down-btn{
            display: flex;
            flex-direction: column;
            a{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 160px;
              height: 44px;
              border-radius: 22px;
              border: solid 2px #006d6a;
              margin: 10px 0;
              >img{
                margin: 0 6px 0 0;
              }
            }
          }
        }
      }
      .right-img{
        flex: 0 0 auto;
        position: relative;
        top: -20px;
      }
    }
  }
</style>
