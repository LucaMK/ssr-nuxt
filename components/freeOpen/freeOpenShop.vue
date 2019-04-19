<template>
  <section class="free-open">
    <div class="main-body">
      <div class="free-banner">
        <img src="../../assets/images/freeOpenBanner.png"/>
        <div class="open-shop">
          <el-button class="open-btn" @click="openShopBtn">PC开店<em class="iconfont">&#xe602;</em></el-button>
          <div class="app-down">
            <img src="../../assets/images/downApp.png" width="120" height="120"/>
            <span>手机扫码下载</span>
          </div>
        </div>
      </div>
      <div class="app-open common-layout">
        <div class="item-con">
          <item-title :titleCH="'APP开店'" :titleEN="'Start from APP'"></item-title>
          <div class="app-com">
            <img src="../../assets/images/freeApp.png"/>
            <div class="right-text">
              <p>店铺开通成功后，</p>
              <p>在“店铺”-“自动化设置”</p>
              <p>中设置自动上架</p>
              <p>和自动改价操作。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pc-open common-layout">
        <div class="item-con">
          <item-title :titleCH="'PC开店流程'" :titleEN="'Start from PC'"></item-title>
          <pc-step></pc-step>
        </div>
      </div>
      <div class="advantage-con common-layout">
        <div class="item-con">
          <item-title :titleCH="'我们的优势'" :titleEN="'Advantage'"></item-title>
          <ul class="advantage-ul">
            <li v-for="item in advantageList" :key="item.title">
              <div class="img-con">
                <em class="iconfont" v-html="item.iconfont"></em>
              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.tips1}}</p>
              <p>{{item.tips2}}</p>
              <p>{{item.tips3}}</p>
            </li>
          </ul>
        </div>
      </div>
      <footer-btm></footer-btm>
    </div>
  </section>
</template>
<script>
  import {footerBtm} from "../../components"
  import itemTitle from "../buyCard/components/itemTitle"
  import pcStep from "./components/pcStep"
  export default {
    components:{footerBtm, itemTitle, pcStep},
    data(){
      return{
        advantageList:[
          {iconfont:"&#xe635;",title:"0成本创业",tips1:"无需垫资",tips2:"极速到账",tips3:"低投入就能创业起步"},
          {iconfont:"&#xe69d;",title:"自动化运营",tips1:"自动上架",tips2:"自动改价",tips3:"傻瓜式管理省心省力"},
          {iconfont:"&#xe65a;",title:"智能仓配",tips1:"云仓存储",tips2:"知名快递",tips3:"全国范围内快递送达"},
          {iconfont:"&#xe601;",title:"一件代发",tips1:"预售信息",tips2:"无痕代发",tips3:"做您自己的大仓库"},
        ],
      }
    },

    methods:{
      //PC开店
      openShopBtn(){
        window.open("http://web.changqingmall.com/#/reg","_blank");
      },
    },
  }
</script>
<style scoped lang="scss">
  .free-open{
    position: relative;
    padding: 80px 0 0 0;
    .main-body{
      width: 100%;
      .free-banner{
        width: 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        background-image: linear-gradient(180deg, #DFB6FF, #5849FF);
        .open-shop{
          display: flex;
          align-items: flex-end;
          position: absolute;
          left: 50%;
          margin-left: -600px;
          bottom: 50px;
          width: 1200px;
          .open-btn{
            width: 200px;
            height: 68px;
            background: rgb(254,253,178);
            border-radius: 50px;
            font-size: 30px;
            margin: 0 146px 0 0;
            color: #333;
            em{
              margin: 0 0 0 12px;
              font-size: 30px;
            }
          }
          .app-down{
            display: flex;
            flex-direction: column;
            align-items: center;
            >img{
              border-radius: 4px;
            }
            >span{
              font-size: 30px;
              color: white;
              margin: 20px 0 0 0;
            }
          }
        }
        >img{
          position: relative;
          left: 50%;
          margin-left: -960px;
        }
      }
      .app-open{
        width: 100%;
        background: white;
        padding: 72px 0 20px 0;
        .app-com{
          margin: 36px 0 0 0;
          display: flex;
          align-items: center;
          >img{
            margin: 0 178px 0 127px;
          }
          .right-text{
            >p{
              text-align: left;
              font-size: 18px;
              line-height: 30px;
            }
          }
        }
      }
      .pc-open{
        width: 100%;
        background: #f5f6f7;
        padding: 60px 0 30px 0;
      }
      .advantage-con{
        width: 100%;
        background: white;
        padding: 89px 0 82px 0;
        .advantage-ul{
          display: flex;
          justify-content: space-between;
          margin: 90px 0 0 0;
          li{
            display: flex;
            flex-direction: column;
            align-items: center;
            .img-con{
              width: 177px;
              height: 177px;
              background: url("../../assets/images/freeRound.png");
              background-size: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              em{
                color: white;
                font-size: 82px;
              }
            }
            >h3{
              margin: 52px 0  27px 0;
              font-size: 30px;
              color: #333;
              font-weight: 500;
            }
            >p{
              font-size: 18px;
              line-height: 28px;
              color: #333;
              font-weight: 500;
            }
          }
        }
      }
      .common-layout{
        display: flex;
        justify-content: center;
        .item-con{
          width: 1200px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
