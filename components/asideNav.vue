<template>
  <div ref="asideDom" class="right-nav fixedStyle">
    <ul class="nve-ul">
      <li>
        <div class="item-con">
          <em class="iconfont">&#xe633;</em>
          <span>App下载</span>
        </div>
        <div class="show-scan down-app">
          <p>扫码下载APP</p>
          <img src="../assets/images/downApp.png" width="100" height="100"/>
        </div>
      </li>
      <li>
        <div class="item-con">
          <em class="iconfont">&#xe644;</em>
          <span>联系客服</span>
        </div>
        <div class="show-scan custom-serve">
          <p>客服电话：<b>{{phoneNumV}}</b>（周一至周五9:00~17:30）</p>
          <div class="img-scan">
            <div class="img-item">
              <div class="img-body">
                <img src="../assets/images/qr-serve.jpg" width="100" height="100"/>
              </div>
              <span>·微信服务号·</span>
            </div>
            <div class="img-item">
              <div class="img-body">
                <img src="../assets/images/qr-public.jpg" width="100" height="100"/>
              </div>
              <span>·微信订阅号·</span>
            </div>
            <div class="img-item">
              <div class="img-body">
                <img src="../assets/images/custom-serve.jpg" width="100" height="100"/>
              </div>
              <span>·客服微信号·</span>
            </div>
          </div>
        </div>
      </li>
      <li @click="freeOpenBtn">
        <div class="item-con">
          <em class="iconfont">&#xe634;</em>
          <span>免费开店</span>
        </div>
      </li>
      <li v-show="whenScreenV > 0 || toTop > scrollDis" @click="toTopBtn">
        <div class="item-upTop">
          <em class="iconfont">&#xe64c;</em>
          <span>回顶部</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
    data(){
      return{
        winScrollY: 0,      //滚动了多少
        positionType:null,      //侧边定位类型
        toTop:0,      //距离顶部的距离
        scrollDis:600,      //滚动距离
      }
    },

    computed:{
      ...mapState(["whenScreenV","phoneNumV"]),
    },

    watch:{
      toTop: {
        immediate:true,
        handler:function(val){
          if(val > this.scrollDis){
            this.positionType = "fixed"
          }else{
            this.positionType = "absolute"
          }
        }
      }
    },

    mounted(){
      let _this = this;
      window.addEventListener("scroll",_this.handleScroll);
    },

    methods:{
      //免费开店
      freeOpenBtn(){
        this.$router.push({path:'/freeOpenShop'});
      },

      //监听滚动
      handleScroll(){
        this.toTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      },

      //回到顶部
      toTopBtn(){
        if(this.whenScreenV > 0){
          this.$store.commit("setWhenScreenV", "upTop");
        }else{
          let timeFn = setInterval(function () {
            let top = document.body.scrollTop || document.documentElement.scrollTop;
            let speed = top / 4;
            if ( document.body.scrollTop !== 0) {
              document.body.scrollTop -= speed;
            }else {
              document.documentElement.scrollTop -= speed;
            }
            if (top === 0) {
              clearInterval(timeFn);
            }
          }, 30);
        }
      },

    },
  }
</script>
<style scoped lang="scss">
  .right-nav{
    width: 70px;
    border-radius: 6px;
    .nve-ul{
      width: 100%;
      box-shadow: 0 3px 20px 0 rgba(121, 129, 218, 0.3);
      background: #ffffff;
      border-radius: 5px;
      li{
        display: flex;
        padding: 15px 10px 0 10px;
        position: relative;
        .show-scan{
          position: absolute;
          padding:16px;
          bottom: 0;
          right: 100%;
          background: white;
          z-index: 999999999999;
          box-shadow: 0 3px 20px 0 rgba(121, 129, 218, 0.3);
          border-radius: 5px;
        }
        .down-app{
          display: flex;
          flex-direction: column;
          align-items: center;
          visibility: hidden;
          >p{
            white-space: nowrap;
            font-size: 14px;
            line-height: 24px;
            margin-bottom:6px;
          }
        }
        .custom-serve{
          display: flex;
          flex-direction: column;
          visibility: hidden;
          >p{
            white-space: nowrap;
            font-size: 14px;
            line-height: 24px;
            >b{
              font-size: 16px;
            }
          }
          .img-scan{
            margin: 12px 0 0;
            display: flex;
            justify-content: space-between;
            .img-item{
              display: flex;
              flex-direction: column;
              align-items: center;
              >span{
                padding-left: 4px;
              }
            }
          }
        }
        .item-con{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 10px;
          border-bottom: 1px #ccc dashed;
          color: #7981da;
          em{
            font-size: 22px;
          }
          span{
            margin: 8px 0 0;
            font-size: 12px;
          }
        }
        .item-upTop{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 0 10px 0;
          border-top: 1px #ccc dashed;
          em{
            font-size: 22px;
          }
          span{
            margin: 8px 0 0;
            font-size: 12px;
          }
        }
        &:hover{
          background: #7981da;
          cursor: pointer;
          .item-con{
            color: white;
          }
        }
        &:hover{
          .custom-serve{
            visibility:visible;
          }
          .down-app{
            visibility:visible;
          }
        }
      }
      li:nth-child(3){
        .item-con{
          border: 0;
        }
      }
      li:last-child{
        padding-top: 0;
        background: #f4f3fd;
        color: #666;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        &:hover{
          background: #f4f3fd;
          color: #666;
          cursor: pointer;
        }
      }
    }
  }
  .fixedStyle{
    position: fixed;
    right: 40px;
    top: 50%;
    margin-top: -114px;
    z-index: 2000;
  }
</style>
