<template>
  <div class="slide-four">
    <div class="center-body">
      <h3>全方位支持您的创业梦想</h3>
      <p>0元开店，无需囤货，解放资金压力</p>
      <div class="show-con">
        <ul class="list-ul">
          <li v-for="(item,index) in dataList" :key="item.title" @mouseenter="enterBtn(index)" :class="{hoverActive:index === currenIndex}">
            <em class="iconfont" v-html="item.iconfont"></em>
            <div class="item-right">
              <h3>{{item.title}}</h3>
              <p>{{item.tips}}</p>
            </div>
          </li>
        </ul>
        <div class="radio-con">
          <div class="video-con">
            <video class="video-body" autoplay muted="" controls="controls" type="video/mp4" width="100%" loop src="https://www.qiyigou1213.com/share/video/main.mp4">
            <embed src="https://www.qiyigou1213.com/share/video/main.mp4?dl=1" type="video/mp4" autoplay>
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        currenIndex:0,      //当前index
        dataList:[
          {iconfont:"&#xeb2f;", title:"全线品牌采购", tips:"一线爆款，实用好货；尝鲜新品，为您一网打尽。"},
          {iconfont:"&#xe61d;", title:"智能仓储物流", tips:"多地分仓极速发货；知名快递稳定合作，全国范围有货必达。"},
          {iconfont:"&#xe6bb;", title:"定制专属服务", tips:"代理发货拓宽销售渠道，自动化店铺运营省心省力，灵活赊账解放资金压力。"},
          {iconfont:"&#xe631;", title:"金融财税护航", tips:"智能记账软件管理资金，代办退税降低成本，工商注册合规经营。"},
        ]
      }
    },

    methods:{
      //鼠标移入
      enterBtn(index){
        this.currenIndex = index;
      },
    },
  }
</script>
<style scoped lang="scss">
@import '@/static/index.scss';
  .slide-four{
    width: 100%;
    height: 100%;
    @include homeCommon("../../../assets/images/index4-1-1.png");
    .center-body {
      width: 1200px;
      >p{
        margin: 20px 0 60px 0;
      }
      .show-con{
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        .list-ul{
          margin: 0 0 0 30px;
          li{
            width: 260px;
            height: 60px;
            padding: 20px 45px;
            display: flex;
            align-items: center;
            border-radius: 15px;
            >em{
              font-size: 42px;
              margin: 0 28px 0 0;
            }
            .item-right{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              >h3{
                font-size: 16px;
              }
              >p{
                display: none;
              }
            }
          }
          .hoverActive{
            cursor: pointer;
            box-shadow: 0 0 18.7px 2.3px rgba(204, 204, 223, 0.5);
            background-color: #ffffff;
            >em{
              color: #6670c7;
            }
            .item-right{
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              >h3{
                color: #6670c7;
                margin: 0 0 14px 0;
              }
              >p{
                color: #6670c7;
                display: block;
                text-align: left;
              }
            }
          }
        }
        .radio-con{
          flex: 0 0 auto;
          position: relative;
          left: -30px;
          top: -20px;
          width: 747px;
          height: 440px;
          background:url("../../../assets/images/index4-1-2.png") center center no-repeat;
          background-size: 100% 100%;
          .video-con{
            position: absolute;
            width: 570px;
            height: 358px;
            left: 90px;
            top: 24px;
            .video-body{
              width: 100%;
              height: 100%;
              border: 0;
            }
          }
        }
      }
    }
  }

</style>
