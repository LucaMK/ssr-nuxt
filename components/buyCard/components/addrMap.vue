<style lang="scss" >
.addr-model {
  width: 388px;
  height: 98px;
  border-radius: 10px;
  box-shadow: 2.8px 2.8px 16px 0 rgba(37, 173, 169, 0.3);
  background-color: rgba(255, 255, 255, .8);
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 44px;
    height: 44px;

    margin-left: 25px;
    margin-right: 23px;
  }

  .right-msg {
    width: 100%;
    box-sizing: border-box;
    padding-right: 24px;
    display: flex;
    flex-direction: column;

    p {
      &:nth-child(1) {
        font-size: 24px;
        color: #333333;
      }
      &:nth-child(2) {
        font-size: 18px;
        margin-top: 7px;
        color: #333333;
      }
    }
  }
}
</style>

<template>
  <div id="mapContent" :style="{'width': mapW + 'px', 'height': mapH + 'px'}"></div>
</template>

<script>
if (process.client) {
  var ComplexCustomOverlay = require("./drawMap");
  console.log(ComplexCustomOverlay)
}
// 创建map
var MAP = null;
// 创建坐标点
var Point = null;

export default {
  props: {
    mapW: {
      type: Number,
      default: 542,
    },
    mapH: {
      type: Number,
      default: 355
    },
    addrLat: {
      type: Number,
      default: 31.1822413241
    },
    addrLong: {
      type: Number,
      default: 121.3828718256
    },
    addrTel: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {
      this.initMap();
  },
  computed:{
    addressName: function () {
      return this.$store.state.changqingDetail.address
    },
    phoneNumV:function () {
      return this.$store.state.phoneNumV
    }
  },
  methods: {
    initMap() {
      let {addrLong, addrLat, addressName } = this;
      MAP = new BMap.Map("mapContent");
      // 地址经纬度
      Point = new BMap.Point(addrLong, addrLat);
      // 添加滚轮缩放 true
      MAP.enableScrollWheelZoom(true);
      var mark = new BMap.Marker(Point);
      MAP.addOverlay(mark);
      mark.setAnimation(BMAP_ANIMATION_BOUNCE);
      MAP.centerAndZoom(Point, 17);
      var overlayData = {
        url: require("../../../assets/images/company.png"),
        tel: this.phoneNumV,
        addrTxt: addressName
      };
      var myCompOverlay = new ComplexCustomOverlay(
        Point,
        "",
        "",
        overlayData,
        MAP
      );
      // 这只addr modal
      MAP.addOverlay(myCompOverlay);
    }
  }
};
</script>

