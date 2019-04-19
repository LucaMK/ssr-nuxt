<template>
  <div class="slide-one">
    <div class="swiper-container swiper-container-son">
      <div class="swiper-wrapper">
        <!--第一屏-->
        <div class="swiper-slide slid-one">
          <div class="main-con">
            <div class="left-con">
              <img src="../../../assets/images/index1-1-2.png"/>
              <div class="text-tips">
                <p>打通产地直采、海外仓储、进口报关、国际物流、国内仓储等各个环节，</p>
                <p>降低国内分销商的采购门槛及风险，采购更多实用好货。</p>
              </div>
              <el-button class="jump-btn" @click="jumpRouteBtn('CQ')">批发进货</el-button>
            </div>
            <img class="right-img" src="../../../assets/images/index1-1-3.png" width="739" height="511"/>
          </div>
        </div>
        <!--第二屏-->
        <div class="swiper-slide slid-two">
          <div class="main-con">
            <div class="left-con">
              <img src="../../../assets/images/index1-2-2.png"/>
              <div class="text-tips">
                <p>整合优质的第三方服务，利用大数据原理为店主赋能，为经销商提供</p>
                <p>一站式销售平台，定制化销售方案，助力轻松创业。</p>
              </div>
              <el-button class="jump-btn" @click="jumpRouteBtn('free')">无忧创业</el-button>
            </div>
            <img class="right-img" src="../../../assets/images/index1-2-3.png" width="598" height="549"/>
          </div>
        </div>
        <!--第三屏-->
        <div class="swiper-slide slid-three">
          <div class="main-con">
            <div class="left-con">
              <img src="../../../assets/images/index1-3-2.png"/>
              <div class="text-tips">
                <p>单用途卡提升购物便捷性，提供销售新途径。</p>
                <p>主题礼包随心定制，企业福利新选择。</p>
              </div>
              <el-button class="jump-btn" @click="jumpRouteBtn('vip')">企业采购</el-button>
            </div>
            <img class="right-img" src="../../../assets/images/index1-3-3.png" width="688" height="465"/>
          </div>
        </div>
      </div>
      <div class="swiper-pagination son-pagination"></div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  export default {
    data(){
      return{
        sonSwiper:null,      //第一屏横swiper
      }
    },

    mounted(){
      this.sonSwiper = new Swiper('.swiper-container-son', {
        speed:1500,
        autoplay: {
          delay: 3000,
        },
        effect : 'fade',
        fadeEffect: {
          crossFade: true,
        },
        direction : 'horizontal',
        slidesPerView: 1,
        pagination: {
          el: '.son-pagination',
          clickable: true,
        },
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
        }
      });
    },

    destroyed(){
      this.sonSwiper = null;
    },

    methods:{
      //页面跳转
      jumpRouteBtn(str){
        switch (str){
          case "CQ":
            window.open("http://web.changqingmall.com/#/login","_blank");
            break;
          case "free":
            this.$router.push({path:"/freeOpenShop"});
            break;
          case "vip":
            this.$router.push({path:"/vipGiftPackage"});
            break;
        }
      },
    },
  }
</script>
<style scoped lang="scss">

  .slide-one{
    width: 100%;
    height: 100%;
    .swiper-container{
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        height: 100%;
        .swiper-slide{
          width: 100%;
          padding: 80px 0 0 0;
          height: calc(100% - 80px);
          display: flex;
          align-items: center;
        }
        .slid-one{
          background: url("../../../assets/images/index1-1-1.jpg") center center no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
        }
        .slid-two{
          background: url("../../../assets/images/index1-2-1.jpg") center center no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
        }
        .slid-three{
          background: url("../../../assets/images/index1-3-1.jpg") center center no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
        }
      }
      .swiper-pagination{
        position: fixed;
        bottom: 100px;
      }
    }
  }
  .main-con{
    width: 1200px;
    height: 511px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .left-con{
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 511px;
      position: absolute;
      left: 0;
      >img{
        position: relative;
        left: -40px;
      }
      .text-tips{
        margin: 10px 0 40px;
        >p{
          text-align: left;
          font-size: 18px;
          color: white;
          line-height: 30px;
        }
      }
      .jump-btn{
        width: 160px;
        height: 48px;
        border-radius: 5px;
        border: solid 2px #ffffff;
        background: transparent;
        color: white;
        font-size: 18px;
        &:hover{
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }
    .right-img{
      flex: 0 0 auto;
      position: relative;
      left: 20px;
    }
  }
</style>
