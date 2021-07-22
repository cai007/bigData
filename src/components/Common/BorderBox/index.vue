<template>
  <div
    class="img-box row justify-between content-between"
    :style="boxStyle"
    @click="tabClick"
  >
    <q-img
      v-for="(img, i) in imgData"
      :key="'img' + i"
      :src="
        $theme.isDark()
          ? require('@/assets/img/darkCorner.png')
          : require('@/assets/img/lightCorner.png')
      "
      spinner-color="white"
      :class="img.class"
      :style="imgStyle"
    />
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "borderBox",
  data() {
    return {
      imgData: [
        {
          class: "lt"
        },
        {
          class: "rt"
        },
        {
          class: "lb"
        },
        {
          class: "rb"
        }
      ]
    };
  },
  props: {
    boxStyle: {
      type: String,
      require: true
    },
    imgStyle: {
      type: String,
      require: true
    }
  },
  methods: {
    tabClick() {
      this.$emit("tabClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  position: relative;
  height: 24px;
  width: 24px;

  .lt {
    height: 12px;
    width: 12px;
    object-fit: fill;
    /* x=0代表移回原位置 */
    transform: translate(0, 0);
    /* 移回也需要0.4s时间过渡 */
    transition: transform 0.4s;
  }
  .rt {
    height: 12px;
    width: 12px;
    transform: rotate(90deg) translate(0, 0);
    object-fit: fill;
    transition: transform 0.4s;
  }
  .lb {
    height: 12px;
    width: 12px;
    transform: rotate(270deg) translate(0, 0);
    transition: transform 0.4s;
    object-fit: fill;
  }
  .rb {
    height: 12px;
    width: 12px;
    transform: rotate(180deg) translate(0, 0);
    transition: transform 0.4s;
    object-fit: fill;
  }
  .inner {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}
</style>
