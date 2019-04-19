<style scoped lang="scss">
.about-us-container{
  width: 100%;
  padding-top: 80px;
  .about-changqing-con{
    width: 100%;
    padding-bottom: 67px;

    display: flex;
    flex-direction: column;

    .about-changqing-top{
      margin-top: 72px;
    }

    .about-changqing-box-con{
      margin-top: 160px;
    }

    .about-changqing-box-body{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: relative;

      >img{
        width: 638.6px;
        height: 440px;

        position: absolute;
        top: -67px;
        left: 0;
      }

      .about-changqing-des-item{
        width: 639px;
        height: 441px;
        border-radius: 10px;
        background-image: linear-gradient(45deg, #1f2d3f, #384b61);

        display: flex;
        align-items: center;
        justify-content: flex-end;

        p{
          width: 390px;
          margin-right: 94px;

          font-size: 16px;
          line-height: 1.88;
          text-align: left;
          color: #ffffff;
        }
      }

    }

  }

  // history 历程
  .changqing-history-con{
    width: 100%;
    height: 1266px;
    display: flex;
    flex-direction: column;
    background-color: #fafbfc;
    background: url('../../assets/images/aboutchangqing-history.png') center center no-repeat;


    .changqing-history-title-top{
      margin-top: 63px;
    }

    .changqing-history-body{
      width: 100%;
      margin-top: 90px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .changqing-history-plant-con{
        width: 68px;
        display: flex;
        align-items: center;
        flex-direction: column;

        position: relative;

        >img{
          width: 68px;
          height: 63px;
        }
        
        .changqing-history-divide{
          width: 4px;
          height: 48px;
          margin-top: 26px;
          margin-bottom: 26px;
          border-radius: 2px;
          background-color: #2e8aea;
        }

        // model 消息框
        .changqing-history-txt-con{
          width: 290px;
          height: 100px;
          border-radius: 5px;
          background-color: #2e8aea;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          >img{
            width: 44px;
            // height: 44px;
            margin-left: 26px;
          }

          >div{
            margin-left: 20px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span, p{
              font-size: 18px;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
            }

            p{
              margin-top: 15px;
            }

          }

        }
        
        .history-txt-left::after, .history-txt-right::after{
          content: '';
          display: block;
          width: 28px;
          height: 20px;
          transform: rotate(45deg);
          background-color: #2e8aea;

        }

        .history-txt-left{
          position: absolute;
          top: -19px;
          left: -319px;

          &::after {
            position: absolute;
            top: 36px;
            right: -11px;
          }
        }

        .history-txt-right{
          position: absolute;
          top: -19px;
          right: -319px;

          &::after {
            position: absolute;
            top: 36px;
            left: -11px;
          }
        }

      }

    }
  }

  // 公司团队 team
  .changqing-team-con{
    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: column;
    background: url('../../assets/images/aboutteam.png') center center no-repeat;

    .about-team-top{
      margin-top: 95px;
    }
    
    .about-team-box-con{
      margin-top: 129px;

      .about-team-box{
        width: 100%;
        display: flex;
        justify-content: space-between;

        .about-team-item{
          width: 96px;
          height: 161px;

          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;

          img{
            width: 88px;
            height: auto;
          }

          span{
            font-size: 23.5px;
            text-align: center;
            color: #ffffff;
          }
        }
      }
    }

  }

  // 授权品牌
  .about-partners-con{
    width: 100%;
    height: 1061px;

    display: flex;
    flex-direction: column;
    background-color: #EFEFEF;
    .about-partners-title-top{
      margin-top: 127px;
    }

    .about-partners-des-con{
      margin-top: 113px;

      .about-partners-des-box{
        width: 100%;
        height: 100%;
        
        img{
          width: 100%;
          height: auto;
        }
      }

    }

  }
}
</style>

<template>
  <div class="about-us-container">
    <bannerImg
      :img = "aboutTopBanner"
      :firstClr = "'#19A6E6'"
      :lastClr = "'#505CF2'"
      ></bannerImg>

    <!-- 关于我们 -->
    <div class="about-changqing-con">
      <itemTitle
        class="about-changqing-top"
        :titleCH = "'关于我们'"
        :titleEN = "'About Changqing'"
        ></itemTitle>

      <itemBodyCon
        :height = "'441px'"
        class = "about-changqing-box-con"
        >
        <div class="about-changqing-box-body" slot="container">
          <img src="../../assets/images/aboutchangqing-img.png" alt="changqing">
          <div class="about-changqing-des-item">
            <p>长青采购中心，打通了产地直采、海外仓储、进口报关、国际物流、国内仓储、国内物流、国内分销等各个环节，降低国内分销商的采购门槛及风险，通过国内现货、海外仓等多样化方式为国内消费者提供100%正品。目前业务已覆盖中国大陆、中国香港以及东南亚等国家和地区，可供产品品牌达500多种，SKU数量超过10000项，品类涵盖母婴产品、电子产品、美妆护肤、美容仪器、成人用品、烟草外围设备等十多个流行领域。</p>
          </div>
        </div>  
      </itemBodyCon>
    </div>

    <!-- 长青历程 -->
    <div class="changqing-history-con">
      <itemTitle
        class="changqing-history-title-top"
        :titleCH = "'长青历程'"
        :titleEN = "'History'"
        ></itemTitle>
      
      <itemBodyCon
        >
        <div class="changqing-history-body" slot="container">
          <div class="changqing-history-plant-con" v-for="(item, index) in aboutHistoryList" :key="index">
            <img :style="{'opacity': item.air.opacity}" src="../../assets/images/aboutchangqing-plant.png" alt="histortAirPlan">
            <div v-if="item.divide.isShow" :style="{'opacity': item.divide.opacity}" class="changqing-history-divide"></div>
            <!-- 左侧txt box -->
            <div :style="{'opacity': item.txtBox.opacity}"
              class="changqing-history-txt-con"
              :class="item.txtBox.position === 'left' ? ' history-txt-left' : ' history-txt-right'"
              >
              <img :src="item.txtBox.icon" :style="{'width': item.txtBox.width != null ? item.txtBox.width: ''}" alt="icon">
              <div>
                <span>{{item.txtBox.date}}</span>
                <p>{{item.txtBox.des}}</p>
              </div>
            </div>

          </div>
        </div>
      </itemBodyCon>
    </div>

    <!-- 公司团队 -->
    <div class="changqing-team-con">
      <itemTitle
        class="about-team-top"
        :titleCH = "'公司团队'"
        :titleEN = "'Our team'"
        :titleCHColor = "'#FFFFFF'"
        ></itemTitle>

      <itemBodyCon
        class="about-team-box-con"
        >
        <div class = "about-team-box" slot = "container">
          <div class="about-team-item" v-for="(item, index) in aboutTeamList" :key="index">
            <img :src="item.img" alt="teamUrl">
            <span>{{item.txt}}</span>
          </div>
        </div>
      </itemBodyCon>
    </div>

    <bannerImg
      :img = "aboutMidBanner"
      :firstClr = "'#2E8AEA'"
      :lastClr = "'#2E8AEA'"
      ></bannerImg>
    
    <!-- 授权品牌 -->
    <div class="about-partners-con">
      <itemTitle
        class="about-partners-title-top"
        :titleCH = "'授权品牌'"
        :titleEN = "'Partners'"
        ></itemTitle>
        <itemBodyCon
          class="about-partners-des-con"
          :width = "'1229px'"
          :height = "'656px'"
          >
          <div class="about-partners-des-box" slot="container">
            <img src="../../assets/images/about-brand-wall.png" alt="brandWall">
          </div>
        </itemBodyCon>
    </div>

    <footerBtm></footerBtm>
  </div>
</template>
<script>
import footerBtm from '@/components/footer';
import bannerImg from "../buyCard/components/bannerImg";
import itemTitle from '../buyCard/components/itemTitle';
import itemBodyCon from './components/itemBodyCon';
import {aboutHistoryList, aboutTeamList} from './data';

export default {
  data() {
    return {
      aboutTeamList,        // 团队信息列表
      aboutHistoryList,     // 关于长青历史信息列表
      aboutTopBanner: require('../../assets/images/win-win.png'),
      aboutMidBanner: require('../../assets/images/about-mid-banner.png')
    };
  },
  components: {
    bannerImg,
    itemTitle,
    footerBtm,
    itemBodyCon
  }

};
</script>

