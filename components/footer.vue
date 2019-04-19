<style lang="scss" scoped>
.footer-content{
    width: 100%;
    height: 180px;
    background-color: #333;

    display: flex;
    justify-content: center;

    .footer-box{
        width: 1200px;
        height: 180px;

        display: flex;
        align-items: stretch;
        justify-content: space-between;


        .footer-left-logo{
            img{
                margin-top: 49px;
            }
        }

        .footer-mid-telAdd{
            flex: 1;

            display: flex;
            flex-direction: column;
            // justify-content: column;

            // 电话 邮箱 地址
            .footer-mid-telAdd-top{
                width: 100%;
                margin-top: 47px;

                display: flex;
                align-items: stretch;
                justify-content: flex-start;

                .footer-mid-top-tel{

                  margin-left: 101px;

                  display: flex;
                  flex-direction: column;

                  // justify-content: column;

                  span{
                    text-align: center;
                    color: #ffffff;
                    &:nth-child(1){
                        font-size: 24px;
                    }
                    &:nth-child(2){
                      margin-top: 12px;
                      font-size: 14px;
                    }
                  }
                }
                //分割线
                .footer-mid-top-divide{
                  width: 1px;
                  height: 60px;
                  margin-left: 80px;
                  margin-right: 76px;
                  background-color: #FFFFFF;
                }

                // 邮箱 地址
                .footer-mid-top-address{
                  display: flex;
                  flex-direction: column;

                  // justify-content: column;

                  .footer-top-addr-line{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    i{
                      color: #FFFFFF;
                      font-size: 21px;
                    }
                    span{
                      margin-left: 18px;
                      font-size: 14px;
                      text-align: left;
                      color: #ffffff;
                    }

                    &:nth-child(2){
                      margin-top: 12px;
                    }
                  }
                }
            }

            // 底部备案号
            .footer-mid-btm-NO{
              width: 100%;
              margin-top: 30px;

              display: flex;
              align-items: center;
              justify-content: center;

              img{
                width: 18px;
                height: 20px;
                margin-right: 11px;
              }

              span{
                font-size: 14px;
                text-align: left;
                color: #cccccc;
              }
            }

        }

        .footer-right-qr{
          display: flex;
          justify-content: right;

          .footer-right-qr-item{
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            &:nth-child(2){
              margin-left: 50px;
            }
            // justify-content: column;
            img{
              margin: 0 auto;
              height: 90px;
              width: 90px;
            }

            span{
              margin-top: 14px;
              font-size: 14px;
              line-height: 1.14;
              color: #ffffff;
            }
          }
        }

    }
}
</style>

<template>
  <!-- footer component -->
  <div class="footer-content">
    <div class="footer-box">
      <!-- 左侧logo -->
      <div class="footer-left-logo">
        <img src="../assets/images/white-logo.png" alt="log">
      </div>
      <!-- 中间tel number& email address -->
      <div class="footer-mid-telAdd">
        <div class="footer-mid-telAdd-top">
          <div class="footer-mid-top-tel">
            <span>{{phoneNumV}}</span>
            <span>(周一至周五 9:00-17:30)</span>
          </div>
          <div class="footer-mid-top-divide"></div>
          <div class="footer-mid-top-address">
            <div class="footer-top-addr-line">
              <i class="iconfont ">&#xe69f;</i>
              <span>{{email}}</span>
            </div>
            <div class="footer-top-addr-line">
              <i class="iconfont">&#xe606;</i>
              <span>{{addressName}}</span>
            </div>
          </div>
        </div>
        <!-- 备案号 -->
        <div class="footer-mid-btm-NO">
          <img src="../assets/images/aboutIcon.png" alt="about">
          <span>沪ICP备17039943号-1 长青公司版权所有©2018-2020</span>
        </div>
      </div>
      <!-- 右侧 二维码 -->
      <div class="footer-right-qr">
        <div class="footer-right-qr-item">
          <img src="../assets/images/qr-public.jpg" alt="public">
          <span>长青平台公众号</span>
        </div>
        <div class="footer-right-qr-item">
          <img src="../assets/images/qr-serve.jpg" alt="serve">
          <span>长青平台服务号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBottom',
  computed:{
    phoneNumV:function () {
      return this.$store.state.phoneNumV
    },
    addressName: function () {
      return this.$store.state.changqingDetail.address
    },
    email: function () {
      return this.$store.state.changqingDetail.email
    }
  }
}
</script>

