<template>
  <div class="slide-three">
    <div class="center-body">
      <h3>新模式，新机遇</h3>
      <p>充实生活，提高品质，我们在长青等你~</p>
      <div class="show-advantage">
        <img src="../../../assets/images/index3-1-2.png" width="587" height="419"/>
        <div class="advantage-con">
          <div class="top-con">
            <p>您需要做的，</p>
            <p>仅在朋友圈、微信群、社交群体营销，获取客户。</p>
            <p>其余我们都已完成：</p>
          </div>
          <ul class="item-con">
            <li v-for="item in dataList" :key="item.title">
              <img :src="item.imgUrl" width="44" height="44"/>
              <div class="right-con">
                <p>{{item.title}}</p>
                <p>{{item.tips}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        dataList:[
          {title:"市场调研", tips:"精选热销产品", imgUrl:require('../../../assets/images/index3-1-3.png')},
          {title:"产地直采", tips:"全程源头可溯", imgUrl:require('../../../assets/images/index3-1-4.png')},
          {title:"仓储物流", tips:"知名企业合作", imgUrl:require('../../../assets/images/index3-1-5.png')},
          {title:"一件代发", tips:"低门槛创业起步", imgUrl:require('../../../assets/images/index3-1-6.png')},
          {title:"营销素材", tips:"专业团队更新", imgUrl:require('../../../assets/images/index3-1-7.png')},
          {title:"贴心服务", tips:"个性化销售方案", imgUrl:require('../../../assets/images/index3-1-8.png')},
        ]
      }
    }
  }
</script>
<style scoped lang="scss">

@import '@/static/index.scss';

  .slide-three{
    width: 100%;
    height: 100%;
    @include homeCommon("../../../assets/images/index3-1-1.png");
    .center-body{
      width: 1200px;
      @media screen and (max-height:700px){
        >p{
          transition: all 0.5s;
          margin: 26px 0 40px;
        }
      }
      @media screen and (min-height:700px){
        >p{
          transition: all 0.5s;
          margin: 26px 0 82px;
        }
      }
      .show-advantage{
        display: flex;
        >img{
          flex: 0 0 auto;
        }
        .advantage-con{
          flex: 1 1 auto;
          margin: 0 0 0 76px;
          .top-con{
            margin: 0 0 20px 0;
            >p{
              text-align: left;
              font-size: 16px;
              line-height: 24px;
              color: #333;
            }
          }
          .item-con{
            width: 537px;
            display: flex;
            flex-wrap: wrap;
            li{
              width: 222px;
              height: 90px;
              border-radius: 15px;
              background-color: #ffffff;
              box-shadow: 0 0 35.6px 4.4px #ccccdf;
              margin: 0 20px 10px 0;
              display: flex;
              align-items: center;
              transition: all 1s;
              >img{
                margin: 0 22px;
              }
              .right-con{
                text-align: left;
                p{
                  font-size: 16px;
                  line-height: 24px;
                }
              }
              &:hover{
                cursor: pointer;
                position: relative;
                transform: scale(1.1);
                box-shadow: 0 0 10px 2px #bbb;
              }
            }
            li:nth-child(even){
              margin-right: 0;
            }
            li:nth-child(5){
              margin-bottom: 0;
            }
            li:nth-child(6){
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
</style>
