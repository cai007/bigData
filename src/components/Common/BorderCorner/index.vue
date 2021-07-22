<template>
  <div class="win bg-main" :style="winStyle">
    <div
      :style="borderStyle + 'border-right: none;border-bottom: none;'"
      class="border_corner border_corner_left_top"
    ></div>
    <div
      :style="borderStyle + 'border-left: none;border-bottom: none;'"
      class="border_corner border_corner_right_top"
    ></div>
    <div
      :style="borderStyle + 'border-right: none;border-top: none;'"
      class="border_corner border_corner_left_bottom"
    ></div>
    <div
      :style="borderStyle + 'border-left: none;border-top: none;'"
      class="border_corner border_corner_right_bottom"
    ></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "borderCorner",
  props: {
    winStyle: {
      type: Object,
      default: () => {}
    },
    borderStyle: {
      type: String,
      default: "border:0.2rem solid #fff;"
    }
  }
};
</script>

<style lang="scss" scoped>
.win {
  position: absolute;
  width: 960px;
  height: 560px;
  // &::after {
  //   content: "";
  //   color: #fff;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   // z-index: -1;
  //   // background-color: rgba(255, 255, 255, 0.7);
  //   background-image: url(~@/assets/img/login-bg.jpg);
  //   // background-image: url('~@/assets/images/b1.jpg');
  //   background-position: center top;
  //   background-size: cover;
  //   background-repeat: no-repeat;
  //   background-attachment: fixed;
  //   filter: blur(15px);
  //   // margin: -30px;
  // }
  .border_corner {
    z-index: 100;
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0);
    border: 0.1rem solid #2f7f9d;
  }
  .border_corner_left_top {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }
  .border_corner_right_top {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }
  .border_corner_left_bottom {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }
  .border_corner_right_bottom {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    // border-bottom-right-radius: 4px;
  }
}
</style>
