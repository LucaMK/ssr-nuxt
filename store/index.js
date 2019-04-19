
export const state = () => {return {
  navColorV: false,             //头部导航栏是true:绿色,false:白色
  backgroundWV:false,           //头部背景色 false:透明  true:白色
  whenScreenV:0,                //当前位于第几屏
  phoneNumV:"400-6988228",      //电话号码
  changqingDetail: {
    address: '上海市闵行区先锋街25号宝纳大厦1A长青采购中心',        // 宝纳大厦地址名称
    email: 'kefu@changqingmall.com'
  }
}}

export const mutations = {
  setNavColorV(state,navColorV){
    console.log('this is 设置 state navColor :', state, navColorV)
    state.navColorV = navColorV;
  },
  setWhenScreenV(state,whenScreenV){
    state.whenScreenV = whenScreenV;
  },
  setBackgroundWV(state,backgroundWV){
    state.backgroundWV = backgroundWV;
  }
}
