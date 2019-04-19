<style scoped lang="scss">
.ship-container{
  width: 100%;
  padding-top: 80px;

  .shop-top-banner{
    cursor: pointer;
  }

  .ship-advantage-con{
    width: 100%;
    
    display: flex;
    flex-direction: column;

    .ship-adv-top{
      margin-top: 83px;
    }

    .ship-advantage-list-con{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .ship-examples-con{
    width: 100%;
    display: flex;
    flex-direction: column;

    .ship-example-top{
      margin-top: 80px
    }

    .ship-examples-des-con{
      width: 100%;
      display: flex;
      justify-content: center;

      .ship-examples-des-box{
        width: 1200px;
        height: 406px;
        margin-top: 70px;
        margin-bottom: 322px;

        display: flex;
        justify-content: space-between;
        position: relative;
        >img{
          width: 287px;
          height: 406px;
          border-radius: 10px;
        }

        .ship-examples-right-list{
          display: flex;
          flex-direction: column;
          align-content: space-between;

          .ship-examples-right-item{
            width: 234px;
            height: 118px;
            border-radius: 10px;
            box-shadow: 2.9px 2.7px 24px 0 rgba(16, 48, 92, 0.2);
            background-color: #ffffff;

            cursor: pointer;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &:hover{
              box-shadow: 0 0 20px 0 rgba(245, 184, 52, 0.2);
              background-color: #e33241;
              .ship-examples-name-con{
                p{
                  color:#ffffff !important;
                }
              }
            }

            &:nth-child(2){
              margin-top: 24px;
            }
            
            &:nth-child(3){
              margin-top: 28px;
            }

            img{
              width: 60px;
              height: 60px;

              border-radius: 50%;
              margin-left: 29px;
              margin-right: 32px;
            }

            .ship-examples-name-con{
              display: flex;
              flex-direction: column;

              p{
                &:nth-child(1){
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 1.94;
                  text-align: left;
                   color: #000000;
                }
                &:nth-child(2){
                  font-size: 16px;
                  font-weight: 500;
                  // line-height: 2.19;
                  text-align: left;
                  color: #999999;
                }
              }
            }
          }
          
          .right-item-active{
            box-shadow: 0 0 20px 0 rgba(245, 184, 52, 0.2);
            background-color: #e33241;
            .ship-examples-name-con{
              p{
                color:#ffffff !important;
              }
            }
          }

        }
        
        .shop-examples-model{
          width: 707px;
          height: 320px;
          border-radius: 10px;
          background-color: rgba(232, 232, 232, .8);

          position: absolute;
          top: 41px;
          left: 210px;
          z-index: 3;
          
          display: flex;
          align-items: center;
          justify-content: center;

          .examples-model-con{
            width: 512px;
            // margin-top: 43px;
            
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            h4{
              font-size: 18px;
              font-weight: bold;
              text-align: left;
              color: #333333;
            }

            span{
              margin-top: 16px;
              font-size: 16px;
              font-weight: 500;
              text-align: left;
              color: #999999;
            }

            p{
              margin-top: 23px;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.88;
              text-align: left;
              color: #333333;
            }

          }

          // arrow style
          .left-arrow, .right-arrow{
            width: 28px;
            height: 35px;

            cursor: pointer;

            position: absolute;
            top: 143px;
            background-color: rgba(0, 0, 0, .2);
            display: flex;
            align-items: center;
            justify-content: center;

            i{
              font-size: 18px;
              color: #FFFFFF;
            }
          }

          .left-arrow{
            left: 0;
          }

          .right-arrow{
            right: 0;
          }

        }

      }
    }

    .shop-pro-con{
      width: 100%;
      height: 582px;
      display: flex;
      justify-content: center;
      background-color: #f2f7fa;
      .shop-star-box{
        width: 1200px;
        height: 582px;
        position: relative;

        .shop-star-phone{
          width: 687px;
          height: 762px;

          position: absolute;
          right: 0;
          top: -226px;
        }

        .shop-star-topic{
          width: 229px;
          height: 226px;

          position: absolute;
          top: 124px;
          right: 720px;
        }

        .shop-star-des-box{
          min-width: 332px;
          display: flex;
          flex-direction: column;

          position: absolute;
          top: 327px;
          right: 687px;

          h4{
            font-size: 40px;
            font-weight: 500;
            text-align: left;
            color: #333333;
            margin-bottom: 21px;
          }

          span{
            font-size: 30px;
            font-weight: 500;
            text-align: left;
            color: #66c5c3;
          }
        }
      }

    }
  }

  // 店主评价 User words
  .shop-user-words-con{
    width: 100%;
    padding-bottom: 83px;

    display: flex;
    flex-direction: column;

    .shop-user-words-top{
      margin-top: 104px;
    }

    .shop-user-words-des{
      width: 100%;
      display: flex;
      justify-content: center;

      margin-top: 57px;

      .shop-user-words-box{
        width: 1200px;
        display: flex;
        justify-content: space-between;

        .shop-user-words-item{
          width: 380px;
          height: 500px;

          border-radius: 12.4px;
          box-shadow: 2.9px 0.8px 18px 0 rgba(0, 0, 0, 0.15);
          background-color: #ffffff;

          display: flex;
          flex-direction: column;

          position: relative;
          bottom: 0;
          transition: all 0.1s ease-in-out;

          &:hover{
            bottom: 10px;
            box-shadow: 2.9px 5px 18px 6px rgba(0, 0, 0, 0.15);
            transition: all 0.1s ease-in-out;
          }

          .words-marks-before, .words-marks-after{
            width: 58px;
            height: 48px;
            color: #eef1f3;

            position: absolute;
          }
          .words-marks-before{
            top: 58px;
            left: 35px;
          }
          .words-marks-after{
            top: 310px;
            right: 32px;
          }
          
          .user-words-txt{
            width: 264px;
            height: 204px;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-top: 106px;
            margin-left: 58px;

            p{
              font-size: 16px;
              line-height: 1.88;
              text-align: left;
              color: #545454;
            }
          }

          .user-words-userDetail{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-top: 68.5px;

            img{
              width: 68px;
              height: 68px;
              border-radius: 50%;

              margin-left: 35.3px;
              margin-right: 15.6px;
            }

            .userDetail-des{
              display: flex;
              flex-direction: column;
              justify-content: flex-start;

              p{
                font-size: 17.5px;
                font-weight: 500;
                color: #333333;

                margin-bottom: 6px;
              }

              span{
                font-size: 13.5px;
                font-weight: 500;
                color: #999999;
              }
            }

          }

        }

      }
    }
  }

  // 合作伙伴
  .shop-clients-con{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f2f7fa;

    padding-bottom: 99px;

    .shop-clients-top{
      margin-top: 65px;
    }

    .shop-clients-des-box{
      width: 100%;
      margin-top: 55px;
      display: flex;
      justify-content: center;

      >div{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        img{
          width: 280px;
          height: 120px;
          margin-top: 31px;

          border-radius: 5px;
          background-color: #ffffff;
        }
      }
    }

  }
}
</style>
<template>
  <div class="ship-container">
    <div
      @click="clickTopBannerBtn"      
      >
      <bannerImg
        class="shop-top-banner"
        :img = "topBanner"
        :firstClr = "'#F35E46'"
        :lastClr = "'#F11A3F'"
        ></bannerImg>
    </div>
    <div class="ship-advantage-con">
      <itemTitle
        class="ship-adv-top"
        :titleCH = "'店铺优势'"
        :titleEN = "'Advantages'"
        ></itemTitle>
      
      <div :style="{'background-color': item.bColor}" class="ship-advantage-list-con" v-for="(item, index) in advantagesArr" :key = "index">
        <advIntro
          :height = "item.height"
          :color = "item.bColor"
          :introArr = "item.itemArr"
          ></advIntro>
      </div>
    </div>
    <bannerImg
      :img = "midBanner"
      :firstClr = "'#E42E3F'"
      :lastClr = "'#E42E3F'"
      ></bannerImg>
    
    <!-- 店主故事 -->
    <div class="ship-examples-con">
      <itemTitle
        class="ship-example-top"
        :titleCH = "'店主故事'"
        :titleEN = "'Examples'"
        ></itemTitle>
      
      <div class="ship-examples-des-con">
        <div class="ship-examples-des-box">
          <img :src="examplesItem.leftImg" alt="examplesCaoChang">
          <div class="ship-examples-right-list">
            <div class="ship-examples-right-item"
              v-for="(exItem, exIndex) in shipExamplesList" :key="'ex' + exIndex"
              :class="activeExampleIndex === exIndex ? 'right-item-active' : ''"
              @mouseenter="changeExamplesItem(exIndex)"
              >
              <img :src="exItem.imgUrl" :alt="exItem.name">
              <div class="ship-examples-name-con">
                <p>{{exItem.name}}</p>
                <p>{{exItem.type}}</p>
              </div>
            </div>
          </div>

          <!-- 蒙版展示详细信息 -->
          <div class="shop-examples-model">
            <!-- 左侧arrow -->
            <div class="left-arrow" @click="changeIndex('reduce')">
              <i class="iconfont">&#xe637;</i>
            </div>
            <!-- 右侧arrow -->
            <div class="right-arrow" @click="changeIndex('plus')">
              <i class="iconfont">&#xe636;</i>
            </div>
            <!-- 详细内容 -->
            <div class="examples-model-con">
              <h4>{{examplesItem.name}}</h4>
              <span>{{examplesItem.type}}</span>
              <p>{{examplesItem.txt}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 明星店主 -->
      <div class="shop-pro-con">
        <div class="shop-star-box">
          <img class="shop-star-phone" src="../../assets/images/shop-pro-phone.png" alt="shopStarPhone">
          <img class="shop-star-topic" src="../../assets/images/shop-pro-topic.png" alt="shopStarTopic">
          <div class="shop-star-des-box">
            <h4>明星店主</h4>
            <span>You're the next star!</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 店主评价 -->
    <div class="shop-user-words-con">
      <itemTitle
        class="shop-user-words-top"
        :titleCH = "'店主评价'"
        :titleEN = "'User words'"
        ></itemTitle>
      
      <div class="shop-user-words-des">
        <div class="shop-user-words-box">

          <div class="shop-user-words-item" v-for="(item, index) in userWordsList" :key="index">
            <img class="words-marks-before" src="../../assets/images/marks-before.png" alt="marksBefore">
            <img class="words-marks-after" src="../../assets/images/marks-after.png" alt="marksAfter">
            <div class="user-words-txt">
              <p>{{item.txt}}</p>
            </div>

            <div class="user-words-userDetail">
              <img :src="item.avatar" alt="avatar">
              <div class="userDetail-des">
                <p>{{item.name}}</p>
                <span>{{item.type}}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- 合作伙伴 -->
    <div class="shop-clients-con">
       <itemTitle
        class="shop-clients-top"
        :titleCH = "'合作伙伴'"
        :titleEN = "'Clients'"
        ></itemTitle>

        <div class="shop-clients-des-box">
          <div>
            <img :src="cItem.url" alt="clientsImg" v-for="(cItem, cIndex) in clientsImgList" :key="'c' + cIndex">
          </div>
        </div>
    </div>
    <footerBtm></footerBtm>
  </div>
</template>
<script>
import footerBtm from '@/components/footer';
import bannerImg from '../buyCard/components/bannerImg';
import itemTitle from '../buyCard/components/itemTitle';
import advIntro from '../buyCard/components/giftIntro';
import {advantagesArr, shipExamplesList, userWordsList, clientsImgList} from './data'

export default {
  data() {
    return {
      activeExampleIndex: 0,
      advantagesArr,
      userWordsList,
      clientsImgList,
      shipExamplesList,
      examplesItem: shipExamplesList[0],
      topBanner: require('../../assets/images/ship-top-banner.png'),
      midBanner: require('../../assets/images/ship-mid-banner.png')
    };
  },
  watch:{
    activeExampleIndex(newV){
      this.examplesItem = this.shipExamplesList[newV];
    }
  },
  components: {
    footerBtm,
    bannerImg,
    itemTitle,
    advIntro
  },
  mounted() {
  },
  methods: {
    // 跳转招募店主页面
    clickTopBannerBtn() {
      window.open("http://web.changqingmall.com/#/reg","_blank");
    },

    // change examples content item index
    // 改变 examples 部分数据id
    changeExamplesItem(index) {
      this.activeExampleIndex = index;
    },

    // 改变examples index
    changeIndex(type){
      let index = this.activeExampleIndex;
      let len = this.shipExamplesList.length;
      switch(true) {
        case type === 'plus':
          index ++ 
          break;
        case type === 'reduce':
          index --
          break;
      }
      index = index >= len ? 0 : ( index <= -1 ? len - 1 : index );
      this.activeExampleIndex = index;
    }
    
  }
};
</script>
