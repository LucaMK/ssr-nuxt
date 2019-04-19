<style scoped lang="scss">
.middle-container {
  width: 100%;
  padding-top: 80px;
  .vip-card-top-banner {
    width: 100%;

    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .qiyi-detail-con {
    width: 100%;
    display: flex;
    flex-direction: column;

    .title-top {
      margin-top: 80px;
    }

    .qiyi-purchase-top{
      margin-top: 80px;
    }

    // 卡片介绍
    .qiyi-detail-title-des {
      width: 100%;
      margin-top: 95px;

      display: flex;
      justify-content: center;

      img {
        width: auto;
        height: 269px;

        margin-right: 90px;
      }

      .qiyi-detail-title-txt {
        height: 269px;
        display: flex;
        align-items: center;
        .qiyi-detail-title-txt-con {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          p {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.67;
            text-align: left;
            color: #333333;

            .warn-txt {
              color: #bf1820;
            }

            &:nth-child(4) {
              margin-top: 37px;
              font-size: 24px;
              font-weight: 500;
              line-height: 1.25;
              text-align: left;
              color: #333333;

              span {
                font-size: 18px;
              }
            }
          }
        }
      }
    }

    // 使用场景
    .qiyi-usage-title-des {
      width: 100%;
      display: flex;
      justify-content: center;

      .qiyi-usage-des-con {
        margin-top: 71px;

        display: flex;
        justify-content: flex-start;

        .qiyi-usage-des-item {
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            width: 260px;
            height: 260px;
          }

          span {
            margin-top: 37px;
            font-size: 30px;
            color: #333333;
          }
        }

        .usage-item-left {
          margin-left: 53px;
        }
      }
    }

    // 卡片优势
    .qiyi-advantage-title-des {
      width: 100%;
      display: flex;
      justify-content: center;

      .qiyi-advantage-des-con {
        width: 1200px;
        height: 470px;
        margin-top: 48px;

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .qiyi-advantage-list {
          width: 400px;
          height: 235px;

          img {
            width: 100%;
            height: 100%;
          }

          .qiyi-advantage-item-txt {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            background-color: #f76d48;

            .qiyi-advantage-item-txt-title {
              width: 100%;
              margin-top: 48px;

              display: flex;
              align-items: center;
              justify-content: center;

              .advantage-txt-title-divide {
                width: 50px;
                height: 2px;
                opacity: 0.6;
                background-color: #ffffff;
              }

              .advantage-txt-des {
                font-size: 30px;
                line-height: 1;
                color: #ffffff;
              }
            }

            .qiyi-advantage-item-des {
              width: 100%;
              margin-top: 33px;

              display: flex;
              flex-direction: column;
              justify-content: center;

              p {
                font-size: 18px;
                line-height: 1.67;
                color: #ffffff;
              }
            }
          }
        }
      }
    }

    // 购卡流程
    .purchase-content {
      width: 100%;

      display: flex;
      justify-content: space-between;

      .qiyi-purchase-form-left {
        margin-top: 55px;
        margin-left: 54px;

        display: flex;
        flex-direction: column;

        h4 {
          margin-left: 26px;
          font-size: 30px;
          font-weight: 500;
          text-align: left;
          color: #333333;
        }

        .qiyi-purchase-form-ele {
          margin-top: 11px;

          input {
            width: 400px;
            height: 44px;
            font-size: 18px;
            color: #333;
            margin-top: 20px;
            padding-left: 25px;
            box-sizing: border-box;

            display: flex;
            align-items: center;

            border: transparent;
            border-radius: 22px;
            background-color: #eef8f8;

            &::placeholder {
              font-size: 18px;
              color: #999999;
            }
          }

          // 单选购买数量radio
          .qiyi-purchase-radio-list {
            margin-top: 29px;
            display: flex;
            flex-direction: column;

            .purchase-radio-list-title {
              font-size: 18px;
              color: #999999;
              text-align: left;
            }
          }

          .purchase-radio-list-con {
            margin-top: 21px;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            .purchase-price-left {
              margin-left: 38px;
            }

            .purchase-radio-list-item {
              cursor: pointer;

              display: flex;
              align-items: center;
              justify-content: flex-start;

              > div,
              > img {
                width: 20px;
                height: 20px;
                margin-right: 13px;
              }
              > div {
                border-radius: 50%;
                background-color: #ffffff;
                border: 1px solid #999999;
              }

              span {
                font-size: 18px;
                color: #333333;
              }
            }
          }
        }

        .qiyi-purchase-warning-txt{
          height: 38px;
          margin-top: 3.5px;
          font-size: 14px;
          color: #F56C6C;
          display: flex;
          align-items: center;
        }

        .qiyi-puchase-submit-btn {
          width: 200px;
          height: 44px;
          margin-top: 3.5px;
          line-height: 44px;
          text-align: center;

          font-size: 18px;
          font-weight: 500;
          color: #ffffff;

          border: transparent;
          border-radius: 22px;

          background-image: linear-gradient(294deg, #f7422a, #fc8a4c);

          cursor: pointer;
        }
      }

      .qiyi-purchase-form-right {
        margin: 54px 71px 0 0;

        display: flex;
        flex-direction: column;

        h4 {
          font-size: 30px;
          font-weight: 500;
          color: #333333;
          text-align: right;
          margin-right: 332px;
        }

        .map-box {
          width: 542px;
          height: 335px;
          margin-top: 32px;
        }
      }
    }
  }

  .card-intro {
    padding-bottom: 77px;
  }

  .card-usage {
    padding-bottom: 37px;
    background-color: #f5f6f7;
  }

  .card-advantage {
    padding-bottom: 75px;
  }

  .card-purchase {
    padding-bottom: 67px;
    background-color: #f5f6f7;
  }
}
</style>
<template>
  <div>
    <div class="middle-container">
      <bannerImg
        :img = "topImg"
        ></bannerImg>
      <!-- 卡片介绍 -->
      <div class="qiyi-detail-con card-intro">
        <itemTilte class="title-top" :titleCH="'卡片介绍'" :titleEN="'Card introduction'"></itemTilte>
        <div class="qiyi-detail-title-des">
          <img src="../../assets/images/qiyicard-des.png" alt="qiyicard-des">
          <div class="qiyi-detail-title-txt">
            <div class="qiyi-detail-title-txt-con">
              <p>
                祺易卡
                <span class="warn-txt">www.qiyigou1213.com</span> 是一张应用于祺易购
              </p>
              <p>指定邀请码店铺的兑付结算的单用途预付储值卡；</p>
              <p>是市场推广、商务&amp;亲友馈赠、企业员工福利的最优选择之一。</p>

              <p>
                <span>面值:</span> 100 / 200 / 500 / 1000
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 使用场景 -->
      <div class="qiyi-detail-con card-usage">
        <itemTilte class="title-top" :titleCH="'使用场景'" :titleEN="'Card usage'"></itemTilte>
        <div class="qiyi-usage-title-des">
          <div class="qiyi-usage-des-con">
            <div
              class="qiyi-usage-des-item"
              :class="index !== 0 ? 'usage-item-left' : 'usage-item-left'"
              v-for="(item,index) in usageList"
              :key="index"
            >
              <img :src="item.url" :alt="item.name">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 卡片优势 -->
      <div class="qiyi-detail-con card-advantage">
        <itemTilte class="title-top" :titleCH="'卡片优势'" :titleEN="'Card advantage'"></itemTilte>
        <div class="qiyi-advantage-title-des">
          <div class="qiyi-advantage-des-con">
            <div
              class="qiyi-advantage-list"
              v-for="(item, index) in advantageList"
              :key="index + item.type"
            >
              <img v-if="item.type === 'image'" :src="item.url" :alt="item.type">
              <div v-else-if="item.type === 'text'" class="qiyi-advantage-item-txt">
                <div class="qiyi-advantage-item-txt-title">
                  <div class="advantage-txt-title-divide"></div>
                  <h4 class="advantage-txt-des">{{item.title}}</h4>
                  <div class="advantage-txt-title-divide"></div>
                </div>
                <div class="qiyi-advantage-item-des">
                  <p v-for="(sitem, sindex) in item.des" :key="sindex">{{sitem}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 购卡流程 -->
      <div class="qiyi-detail-con card-purchase">
        <itemTilte class="title-top" :titleCH="'购卡流程'" :titleEN="'Purchase process'"></itemTilte>
        <purchaseCon class="qiyi-purchase-top"
          :imgUrl = "purchaseUrl"
          >
          <div class="purchase-content" slot="content">
            <!-- qiyi purchase left form item -->
            <div class="qiyi-purchase-form-left">
              <h4>购卡申请单</h4>
              <div class="qiyi-purchase-form-ele">
                <input class="form-name" v-model="applicant.name" type="text" placeholder="请输入申请人名字">
                <input class="form-tel" v-model="applicant.tel" type="tel" placeholder="请输入申请人手机号">
                <input class="form-No" v-model="applicant.num" type="number" placeholder="请输入订购数量">
                <div class="qiyi-purchase-radio-list">
                  <div class="purchase-radio-list-title">请选择卡面值:</div>
                  <div class="purchase-radio-list-con">
                    <div
                      class="purchase-radio-list-item"
                      v-for="(item, pindex) in cardPriceList"
                      :key="pindex"
                      :class="pindex !== 0 ? 'purchase-price-left' : ''"
                      @click="changeCardItemPrice(item)"
                    >
                      <div v-if="selectPriceId !== item.pkId" class="purchase-unsel-icon"></div>
                      <img
                        v-else-if="selectPriceId === item.pkId"
                        class="purchase-unsel-icon"
                        src="../../assets/images/select-icon.png"
                        alt="select-icon"
                      >
                      <span>{{item.ddlistName}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="qiyi-purchase-warning-txt">
                {{warningTxt}}
              </div>
              <button class="qiyi-puchase-submit-btn" @click="debounceFun">提交申请</button>
            </div>
            <!-- qiyi purchase right map address -->
            <div class="qiyi-purchase-form-right">
              <h4>线下购卡地址</h4>
              <div class="map-box">
                <no-ssr>
                  <mapConter></mapConter>
                </no-ssr>
              </div>
            </div>
          </div>
        </purchaseCon>
      </div>
    </div>
    <footerBtm></footerBtm>
  </div>
</template>
<script>
  /* eslint-disable */
import { footerBtm } from "@/components";
import mapConter from "./components/addrMap";
import itemTilte from "./components/itemTitle";
import purchaseCon from "./components/purchase";
import bannerImg from "./components/bannerImg";
import {usageList, advantageList} from './components/introData';

export default {
  data() {
    return {
      applicant: {                                                                //申请人信息
        tel: '',
        name: '',
        num: ''
      },
      warningTxt: '',
      topImg: require('../../assets/images/qiyi-giftcard.png'),
      purchaseUrl: require('../../assets/images/purchase-qiyi.png'),
      usageList: usageList,                                                       // usage content数据
      advantageList: advantageList,                                               // advantage content数据
      cardPriceList: {},                                                          // 卡片信息列表
      selectPirceItem: {},                                                        // 选中的卡片信息
      selectPriceId: 0                                                            // 选中的卡片信息Id
    };
  },
  components: {
    footerBtm,
    mapConter,
    itemTilte,
    purchaseCon,
    bannerImg
  },
  created () {
    this.getCardPriceList();
  },
  mounted () {
    this.submitFormBtn();
  },
  methods: {
    // 获取卡片面值信息
    getCardPriceList () {
      this.$ajax({
        method: 'POST',
        url: 'v3/system/ddlists/00100000260/listAll',
        data: {}
      })
      .then( res => {
        let {data, mate} = res;
        if (mate.code === 200) {
          this.cardPriceList = data.list;
          this.selectPriceId = data.list[0].pkId;
          this.selectPirceItem = data.list[0];
        }
      })
      .catch( err => {
        throw Error(err);
      })
    },

    // reset form data
    resetFormData() {
      this.applicant = {      //申请人信息
        tel: '',
        name: '',
        num: ''
      }
    },

    // 更换 卡片价格信息
    changeCardItemPrice(item) {
      this.selectPriceId = item.pkId;
      this.selectPirceItem = item;
    },

    // 点击button init debounceFun
    submitFormBtn () {
      let that = this;
      this.debounceFun = this.$debounce(that.doApplicatSelectCard, 300, {'maxWait': 1000, 'leading': false, 'trailing': true});
    },

    // debounce function
    debounceFun() {},

    //  发起购卡申请
    doApplicatSelectCard () {
      let {name, tel, num} = this.applicant;
      let {ddlistName} = this.selectPirceItem;
      let data = {
        goodsBuyNum: Math.floor(num),
        goodsSkuValue: ddlistName,
        demandContactName: name,
        demandContactPhone: tel
      };
      // 校验数据格式 并发起请求
      this.checkApplicatData(data)
      .then( res => {
        this.warningTxt = '';
        this.doApplicatSelectCardAjax(data);
      })
      .catch( err => {
        this.warningTxt = err.msg;
      })
    },

    // ajax action function
    doApplicatSelectCardAjax(data){
      this.$ajax({
        method: 'POST',
        url: 'v3/prepay/demands',
        data: data,
      })
      .then( res => {
        let {mate} = res;
        if (mate.code === 200) {
          this.$message({
            showClose: true,
            message: '购卡申请成功!',
            type: 'success'
          })
          this.resetFormData();
        } else {
          this.$message({
            showClose: true,
            message: '购卡申请失败!',
            type: 'error'
          })
        }
      })
      .catch( err => {
        this.$message({
          showClose: true,
          message: '购卡申请失败!',
          type: 'error'
        })
        throw Error(JSON.stringify(err));
      })
    },

    // check applicate data is userful
    checkApplicatData(data) {
      const reg = /^1\d{10}$/;
      let {demandContactPhone, demandContactName, goodsBuyNum, goodsSkuValue} = data;
      return new Promise((resolve, reject) => {
        let nameLen = demandContactName.trim().length;
        if ( !(nameLen > 0 && nameLen <= 15) ){
          reject({msg: '请输入申请人名字, 不得超过15个字符!'})
        } else if (!reg.test(demandContactPhone)) {
          reject({msg: '您输入的手机号有误, 请重新输入!'})
        } else if (! (typeof goodsBuyNum === 'number' && goodsBuyNum > 0 ) ) {
          reject({msg: '请输入订购数量!'})
        } else if ( !(goodsSkuValue.trim().length > 0) ) {
          reject({msg: '请选择卡片面值!'})
        } else {
          resolve({msg: 'isOk'})
        }
      })
    }
    
  }
};
</script>
