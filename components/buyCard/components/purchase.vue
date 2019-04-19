<style scoped lang="scss">
// 购卡流程
.qiyi-purchase-title-des {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .qiyi-purchase-title-banner{
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .qiyi-purchase-des-con {
    width: 100%;
    height: 572px;
    background-color: #f5f6f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;

    .qiyi-purchase-form-box {
      position: relative;
      z-index: 0;
      background-color: #ffffff;
      margin-top: 47px;
      width: 1200px;
      height: 525px;

      border-radius: 15px;
      box-shadow: 0 0 18.7px 2.3px rgba(204, 204, 223, 0.5);

    }

    .qiyi-purchase-arrow-con{
      width: 1200px;
      position: relative;
      // 提交申请 form top arrow
      .qiyi-purchase-form-arrow-model {
        position: absolute;
        left: 168px;
        top: 30px;
        z-index: 1;
        width: 50px;
        height: 50px;
        background-color: #ffffff;
        border-top-left-radius: 15px;
        transform: rotate(45deg);
      }
      .qiyi-purchase-form-arrow {
        box-shadow: 0 0 18.7px 2.3px rgba(204, 204, 223, 0.5);
        z-index: 0;
      }
    }
  }
}
</style>

<template>
  <div class="qiyi-purchase-title-des">
    <div class="qiyi-purchase-title-banner">
      <img :src="imgUrl" alt="purchase">
    </div>
    <div class="qiyi-purchase-des-con">
      <div class="qiyi-purchase-arrow-con">
        <div class="qiyi-purchase-form-arrow-model"></div>
        <div class="qiyi-purchase-form-arrow-model qiyi-purchase-form-arrow"></div>
      </div>
      <div class="qiyi-purchase-form-box">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['imgUrl']
};
</script>
