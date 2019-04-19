<template>
  <div class="home-con" :style="{'height': clientHeight + 'px'}">
    <div class="swiper-container swiper-container-father">
      <div class="swiper-wrapper">
        <!--第一屏-->
        <div class="swiper-slide">
          <slide-one></slide-one>
        </div>
        <!--第二屏-->
        <div class="swiper-slide" >
          <slide-two :autoPlayCount="autoPlayCount"></slide-two>
        </div>
        <!--第三屏-->
        <div class="swiper-slide" >
          <slide-three></slide-three>
        </div>
        <!--第四屏-->
        <div class="swiper-slide">
          <slide-four></slide-four>
        </div>
        <!--第五屏-->
        <div class="swiper-slide" >
          <slide-five></slide-five>
        </div>
        <!--第六屏-->
        <div class="swiper-slide" >
          <slide-six :showFoot="showFoot"></slide-six>
        </div>
      </div>
      <div class="swiper-pagination colour-Page"></div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import {mapState} from "vuex"
  import {slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix} from "./components"
  export default {
    components:{slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix},
    data(){
      return{
        currentIndex:0,      //当前第几竖屏
        showFoot:false,      //是否显示footBtm组件
        changeCount:0,      //move了几次
        mySwiper:null,      //swiper函数
        autoPlayCount:false,      //自动播放计数累加
        clientHeight: 600
      }
    },

    computed:{
      ...mapState(["whenScreenV"]),
    },

    watch:{
      whenScreenV:{
        immediate:true,
        handler:function(val,oldVal){
          if(this.whenScreenV === "upTop"){
            this.mySwiper.slideTo(0,1000,false);
            this.currentIndex = 0;
            this.$store.commit("setNavColorV",false);
          }
        }
      }
    },

    mounted(){
      let _this = this;
      this.$store.commit("setNavColorV",false);      //假设变白
      console.log('this is server or client :', process.client, process.server)
      this.mySwiper = new Swiper('.swiper-container-father', {
        direction : 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: {
          releaseOnEdges: true,
        },
        pagination: {
          el: '.colour-Page',
          clickable: true,
        },
        on:{
          init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            _this.currentIndex = this.realIndex;      //获取当前滚动到第几屏
            _this.$store.commit("setWhenScreenV", _this.currentIndex);
            if(this.realIndex === 0){
              _this.$store.commit("setNavColorV",false);
            }else{
              _this.$store.commit("setNavColorV",true);
            }
            if(this.realIndex === 1){
              _this.autoPlayCount = true;
            }else{
              _this.autoPlayCount = false;
            }
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
          sliderMove:function(){
            if( _this.currentIndex === 5){
              _this.changeCount++;
              _this.changeCount > 0 ? _this.showFoot = true :  _this.showFoot = false;
            }else{
              _this.showFoot = false;
              _this.changeCount = 0;
            }
          },
        }
      });
      this.windowAddMouseWheel();      //监听鼠标滚动
      this.initClientHeight();
    },

    destroyed(){
      this.mySwiper = null;
      this.$store.commit("setWhenScreenV", 0);
    },

    methods:{
      initClientHeight() {
        this.clientHeight = document.body.clientHeight;
      },
      //监听鼠标滚动
      windowAddMouseWheel() {
        let _this = this;
        let scrollFunc = function (e) {
          e = e || window.event;
          if (e.wheelDelta) {      //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) {      //当滑轮向上滚动时
              _this.showFoot = false;
            }
            if (e.wheelDelta < 0 && _this.currentIndex === 5) {      //当滑轮向下滚动时
              _this.showFoot = true;
            }
          } else if (e.detail) {      //Firefox滑轮事件
            if (e.detail> 0 && _this.currentIndex === 5) {      //当滑轮向下滚动时
              _this.showFoot = true;
            }
            if (e.detail< 0) {      //当滑轮向上滚动时
              _this.showFoot = false;
            }
          }
        };
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) {
          document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //滚动滑轮触发scrollFunc方法
        window.onmousewheel = document.onmousewheel = scrollFunc;
      }

    },
  }
</script>
<style scoped lang="scss" >
  @import "~/static/swiper/animate.css";
  .home-con{
    position: relative;
    height: 100%;
    .swiper-container{
      height: 100%;
      overflow: hidden;
      .swiper-wrapper{
        height: 100%;
        .swiper-slide{
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination{
        position: fixed;
        right: 10px;
        top: 50%;
      }
    }
  }
</style>
