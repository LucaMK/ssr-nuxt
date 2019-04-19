<template>
  <div class="head-nav" :class="[navColorV ? 'greenStyle' : 'whiteStyle', {'backWhite':backgroundWV}]">
    <div class="nav-con">
      <router-link :to="{path:'/'}" class="nav-logo">
        <img src="../assets/images/white-logo.png" width="167" height="48" v-if="!navColorV"/>
        <img src="../assets/images/colour-logo.png" width="167" height="48" v-else/>
      </router-link>
      <ul class="nav-mid">
        <li v-for="(item,index) in navList" ref="navLiDom" :key="item.title">
          <div class="item-con">
            <router-link :to="{path:item.pathUrl}" v-if="index !== 1">{{item.title}}<b class="bottom-border"></b></router-link>
            <span v-else>{{item.title}} <em class="iconfont">&#xe605;</em></span>
            <div class="child-con" v-if="index === 1">
              <em class="iconfont">&#xe605;</em>
              <div class="dialog-con" v-if="index === 1">
                <router-link :to="{path:itemA.pathUrl}" v-for="itemA in item.childList" :key="itemA.title">{{itemA.title}}</router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="nav-right">
        <div class="scan-phone">
          <em class="iconfont">&#xe607;</em>
          <span>手机端</span>
          <div class="scan-img-con">
            <img src="../assets/images/downApp.png" width="100" height="100"/>
            <span>下载长青管家APP</span>
          </div>
        </div>
        <b>&nbsp;</b>
        <a class="free-btn common-btn" @click="jumpRouteBtn('free')">免费开店</a>
        <a class="platform-btn common-btn" @click="jumpRouteBtn('CQ')">采购平台</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex"

  export default {
    data(){
      return{
        navList:[
          {title:"首页",pathUrl:"/"},
          {title:"企业采购",childList:[{title:"祺易卡",pathUrl:"/qiYiCard"},{title:"VIP礼包",pathUrl:"/vipGiftPackage"}]},
          {title:"店主招募",pathUrl:"/shopmanEnlist"},
          {title:"关于长青",pathUrl:"/aboutCQ"},
        ],
      }
    },

    computed:{
      ...mapState(["navColorV","backgroundWV"]),
    },

    watch:{
      navColorV(newV, oldV) {
        console.log('this is color nv ov data:', newV, oldV);
      }
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
        }
      },
    },
  }
</script>
<style scoped lang="scss">
@import '~/static/variable.scss';
@import '~/static/mixins.scss';
  .dialog-con{
    >.router-link-active{
      color: #787dda!important;
    }
  }
  .head-nav{
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    .nav-con{
      width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nav-logo{
        flex: 0 0 auto;
      }
    }
  }
  .whiteStyle{
    @include navColor(white);
    .nav-right{
      .free-btn{
        color: white;
        border:2px solid white;
        background: transparent;
      }
      .platform-btn{
        color: #4b63be;
        opacity: 0.7;
        background: white;
        border: 2px white solid;
      }
    }
  }
  .greenStyle{
    @include navColor($primary-color);
    .nav-right{
      .free-btn{
        color: #25adaa;
        border:2px solid #25adaa;
        &:hover{
          color: #00807e;
        }
      }
      .platform-btn{
        color: white;
        opacity: 0.8;
        background-image: linear-gradient(45deg, #25adaa, #23d0cc);
        border:2px transparent solid;
        &:hover{
          background: #00807e;
        }
      }
    }
  }
  .backWhite{
    background: white;
    box-shadow: 0 0 2px 1px #f4f3fd;
  }
  .scan-phone{
    position: relative;
    .scan-img-con{
      width: 142px;
      height: 170px;
      position: absolute;
      top: 100%;
      left: 50%;
      margin: 0 0 0 -71px;
      background: url("../assets/images/head-nav-dialog.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      visibility: hidden;
      >img{
        margin: 10px 0 0 0;
      }
      span{
        color: #333;
        font-size: 14px;
        margin: 10px 0 0 0;
      }
    }
    &:hover{
      cursor: pointer;
      .scan-img-con{
        visibility: visible;
      }
    }
  }
</style>
