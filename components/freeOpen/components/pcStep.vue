<template>
  <section class="pc-step">
    <ul class="step-nav">
      <li v-for="(item,index) in stepNav" :key="item.id" :class="{nowColor:index === currentIndex, noColor:index > currentIndex, alreadyColor:index < currentIndex}">
        <em class="iconfont" v-if="index !== 0" :class="{alreadyArrow:index < currentIndex, noArrow:index > currentIndex && index !== currentIndex}">&#xe611;</em>
        <div class="text-con" @mouseenter="changeStepBtn(index)">
          <div class="stop-icon">
            <em class="iconfont" v-html="item.stepImg"></em>
          </div>
          <span>{{item.stepText}}</span>
        </div>
      </li>
    </ul>
    <ul class="step-ul">
      <li v-for="(item,index) in stepList" :key="item.title" :class="{leftStyle:leftOrRight === 'left' && index === currentIndex,rightStyle:leftOrRight === 'right' && index === currentIndex}">
        <template v-if="index === currentIndex">
          <img :src="item.imgUrl"/>
          <div class="right-con">
            <h3>{{item.title}}</h3>
            <p>{{item.tips1}}</p>
            <p>{{item.tips2}}</p>
            <p>{{item.tips3}}</p>
          </div>
        </template>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    data(){
      return{
        stepList:[
          {imgUrl:require("../../../assets/images/pc-step1.png"), title:"注册账号", tips1:"0元免费开店，", tips2:"0成本投入，", tips3:"长青与您携手同行。"},
          {imgUrl:require("../../../assets/images/pc-step2.png"), title:"实名认证", tips1:"根据《电商法》要求，", tips2:"店主需上传身份信息，", tips3:"完成实名认证。"},
          {imgUrl:require("../../../assets/images/pc-step4.png"), title:"店铺开通成功", tips1:"恭喜您成功开通店铺！", tips2:"您的创业之旅，", tips3:"在长青开启！"},
          {imgUrl:require("../../../assets/images/pc-step3.png"), title:"自动化设置", tips1:"开启自动化运营，", tips2:"上架改价无需动手；", tips3:"终端下单自动发货。"},
        ],
        stepNav:[
          {id:1, stepImg:"&#xe600;", stepText:"注册账户"},
          {id:2, stepImg:"&#xe68c;", stepText:"实名认证"},
          {id:3, stepImg:"&#xe615;", stepText:"开通成功"},
          {id:4, stepImg:"&#xe69c;", stepText:"自动化设置"},
        ],
        currentIndex:0,      //当前显示的步骤
        leftOrRight:'null',      //0:left；1:right
      }
    },

    methods:{
      //改变当前步骤
      changeStepBtn(index){
        if(this.currentIndex > index){
          this.leftOrRight = 'right';
        }else{
          this.leftOrRight = 'left';
        }
        this.currentIndex = index;
      },

    }
  }
</script>
<style scoped lang="scss">
  .nowColor{
    color: #009491;
  }
  .alreadyColor{
    color: #66c5c3;
    opacity: 0.7;
  }
  .noColor{
    color: #ccc;
  }
  .alreadyArrow{
    background-image:-webkit-linear-gradient(left,#66c5c3,#66c5c3) !important;
    -webkit-background-clip:text !important;
    -webkit-text-fill-color:transparent !important;
  }
  .noArrow{
    background-image:-webkit-linear-gradient(left,#ccc,#ccc) !important;
    -webkit-background-clip:text !important;
    -webkit-text-fill-color:transparent !important;
  }
  .pc-step{
    width: 1200px;
    margin: 56px 0 0 0;
    .step-nav{
      width: 950px;
      height: 80px;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      li{
        display: flex;
        justify-content: center;
        .text-con{
          display: flex;
          flex-direction: column;
          align-items: center;
          .stop-icon{
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 10px 0;
            em{
              font-size: 40px;
            }
          }
          &:hover{
            cursor: pointer;
          }
        }
        >em{
          height: 44px;
          line-height: 44px;
          font-size: 28px;
          margin: 0 100px 0 0;
          background-image:-webkit-linear-gradient(left,#a1e3de,#25c8b9);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }
    }
    .step-ul{
      display: flex;
      height: 380px;
      .rightStyle{
        animation: animation-enter .4s ease-in;
      }
      @keyframes animation-enter {
        0%{
          transform: translateX(10%);
          opacity: 0;
        }
        100%{
          transform: translateX(0);
          opacity: 1;
        }
      }
      .leftStyle{
        animation: animation-left .4s ease-in;
      }
      @keyframes animation-left {
        0%{
          transform: translateX(-10%);
          opacity: 0;
        }
        100%{
          transform: translateX(0);
          opacity: 1;
        }
      }
      li{
        display: flex;
        align-items: center;
        transition: all 0.5s;
        >img{
          margin: 0 150px 0 0;
        }
        .right-con{
          >h3{
            font-size: 30px;
            font-weight: 500;
            margin: 0 0 26px 0;
          }
          >p{
            font-size: 18px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>
