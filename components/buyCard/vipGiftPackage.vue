<style scoped lang="scss">
.vip-gift-container {
  width: 100%;
  padding-top: 80px;
  .top-banner-con {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .gift-content {
    width: 100%;

    display: flex;
    flex-direction: column;

    .gift-item-top {
      margin-top: 80px;
    }

    .intro-des-detail-content {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .gift-mid-img-bg {
    width: 100%;
    height: 200px;
    background-image: linear-gradient(180deg, #3882FF, #377FFD);

    .gift-mid-img-con{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("../../assets/images/gift-mid-bg.png") center center no-repeat;
      
      .gift-mid-txt {
        position: absolute;
        z-index: 1;
        color: #ffffff;
        p {
          font-size: 30px;
          letter-spacing: 6px;
        }

        h4 {
          margin-top: 10px;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.33;
          letter-spacing: 2.7px;
          text-align: center;
        }
      }
    }
    
  }

  .gift-solution-con {
    width: 100%;
    padding-bottom: 79px;

    display: flex;
    flex-direction: column;

    .gift-solution-top {
      margin-top: 90px;
    }

    .solution-content-box {
      width: 100%;
      display: flex;
      justify-content: center;

      .solution-content {
        width: 1200px;
        margin-top: 34px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .solution-content-item {
          width: 273px;
          height: 302px;
          margin-top: 30px;
          position: relative;
          bottom: 0;

          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
          box-shadow: 0 0 18.7px 2.3px rgba(204, 204, 223, 0.5);
          background-color: #ffffff;
          transition: all 0.1s ease-in;

          display: flex;
          flex-direction: column;

          img {
            width: 273px;
            height: 241.2px;

            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          > div {
            width: 100%;
            height: 60.7px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 18px;
            font-weight: 500;
            text-align: center;
            color: #333333;
          }

          &:hover {
            position: relative;
            bottom: 5px;
            box-shadow: 0 0 18.7px 10px rgba(199, 199, 213, 0.8);
            transition: all 0.1s ease-in;
          }
        }
      }
    }
  }

  // 礼包定制流程
  .vip-gift-purchase {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5f6f7;

    .gift-purchase-top {
      margin-top: 91px;
    }

    .gift-purchase-btm {
      padding-bottom: 80px;

      .gift-map-con {
        width: 100%;
        padding-top: 55px;
        padding-left: 55px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;

        h4 {
          padding-left: 26px;
          font-size: 30px;
          font-weight: 500;
          text-align: left;
          color: #333333;
        }

        .gift-map-box {
          width: 1075px;
          height: 335px;
          margin-top: 31px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="vip-gift-container">
    <bannerImg 
      :img="topBanner"
      :firstClr = "'#1F7FFC'"
      :lastClr = "'#1A51DD'"
      ></bannerImg>
    <div class="gift-content">
      <itemTitle class="gift-item-top" :titleCH="'礼包介绍'" :titleEN="'Gift introduction'"></itemTitle>
      <div
        class="intro-des-detail-content"
        :style="{'background-color':item.bColor}"
        v-for="(item, index) in introData"
        :key="'intro' + index"
      >
        <giftIntro :height="item.height" :color="item.bColor" :introArr="item.itemArr"></giftIntro>
      </div>
    </div>

    <div class="gift-mid-img-bg">
      <div class="gift-mid-img-bg-clr">

      </div>
      <div class="gift-mid-img-con">
        <div class="gift-mid-txt">
          <p>更多专属定制方案请联系</p>
          <h4>TEL: {{phoneNum}}</h4>
        </div>
      </div>
    </div>
    <div class="gift-solution-con">
      <itemTitle class="gift-solution-top" :titleCH="'礼包案例'" :titleEN="'Gift solution'"></itemTitle>
      <div class="solution-content-box">
        <div class="solution-content">
          <div
            class="solution-content-item"
            v-for="(solItem, solIndex) in solutionArr"
            :key="'sol' + solIndex"
          >
            <img :src="solItem.url" :alt="solItem.title">
            <div>{{solItem.title}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="vip-gift-purchase">
      <itemTitle class="gift-purchase-top" :titleCH="'购买流程'" :titleEN="'Purchase process'"></itemTitle>
      <purchaseCon class="gift-purchase-btm" :imgUrl="purchaseUrl">
        <div class="gift-map-con" slot="content">
          <h4>线下合作地址</h4>
          <div class="gift-map-box">
            <mapConter :mapW="1075" :mapH="355"></mapConter>
          </div>
        </div>
      </purchaseCon>
    </div>
    <footerBtm></footerBtm>
  </div>
</template>

<script>
import { footerBtm } from "@/components";
import itemTitle from "./components/itemTitle";
import giftIntro from "./components/giftIntro";
import bannerImg from "./components/bannerImg";
import purchaseCon from "./components/purchase";
import mapConter from "./components/addrMap";
import { introArr as introData, solutionArr } from "./components/introData";

export default {
  data() {
    return {
      introData,
      solutionArr,
      purchaseUrl: require("../../assets/images/purchase-gift.png"),
      topBanner: require("../../assets/images/gift-top-banner.png"),
      midBanner: require("../../assets/images/gift-mid-bg.png")
    };
  },
  components: {
    footerBtm,
    itemTitle,
    giftIntro,
    bannerImg,
    purchaseCon,
    mapConter
  },
  computed: {
    phoneNum() {
      return this.$store.state.phoneNumV;
    }
  }
};
</script>
