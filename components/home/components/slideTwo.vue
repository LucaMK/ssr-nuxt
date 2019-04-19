<template>
  <div class="slide-two">
    <div class="center-body">
      <h3>为什么选择我们？</h3>
      <p>我们为个体店主与经销商，提供最优质的定制化供应链解决方案。</p>
      <ul class="select-reason">
        <li v-for="item in dataList" :key="item.title">
          <img :src="item.imgUrl" width="222" height="198"/>
          <strong v-if="autoPlayCount"><countTo :startVal='item.startVal' :endVal='item.endVal' :duration='3000'></countTo>+</strong>
          <strong v-else>0+</strong>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import countTo from 'vue-count-to';
  export default {
    data(){
      return{
        dataList:[
          {startVal:0,endVal:100000, title:"累计店铺", imgUrl:require('../../../assets/images/index2-1-2.png')},
          {startVal:0,endVal:20000, title:"商品种类", imgUrl:require('../../../assets/images/index2-1-3.png')},
          {startVal:0,endVal:500000, title:"日销售额", imgUrl:require('../../../assets/images/index2-1-4.png')},
        ]
      }
    },

    props:{
      autoPlayCount:{
        type:Boolean
      }
    },

    watch:{
      autoPlayCount:function (val) {
        if(!val) {
          countTo.destroyed();
        }
      },
    },

    components:{countTo},
  }
</script>
<style scoped lang="scss">
@import '@/static/variable.scss';
@import '@/static/mixins.scss';
  .slide-two{
    width: 100%;
    height: 100%;
    @include homeCommon("../../../assets/images/index2-1-1.jpg");
    .center-body{
      >p{
        margin: 26px 0 40px;
      }
      .select-reason{
        display: flex;
        justify-content: space-between;
        li{
          width: 360px;
          height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 15px;
          box-shadow: 0 0 35.6px 4.4px #ccccdf;
          margin: 0 60px 0 0;
          transition: all 0.5s;
          >strong{
            font-size: 40px;
            color: $purple-color;
            margin: 36px 0 10px;
          }
          >span{
            font-size: 22px;
            color:$purple-color;
          }
          &:hover{
            cursor: pointer;
            position: relative;
            transform: translateY(-15px);
            box-shadow: 0 10px 35px 5px rgba(0, 0, 0, 0.2);
            >strong{
              color: $hoverYellow;
            }
            >span{
              color: $hoverYellow;
            }
          }
        }
        li:last-child{
          margin: 0;
        }
      }
    }
  }
</style>
