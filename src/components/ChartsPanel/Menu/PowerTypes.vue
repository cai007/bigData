<template>
  <div class="row business-type">
    <div
      v-for="(t, i) in scenes"
      :key="'txt' + i"
      class="txt-box"
      :class="active == t.name ? 'active' : ''"
      @click="txtClick(t.name)"
    >
      <SvgIcon :icon="t.icon" class="txt-icon"></SvgIcon>
      <div class="txt-name">{{ t.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "businessTypes",
  data() {
    return {
      active: "水",
      scenes: [],
      scenes1: [
        {
          id: 1,
          icon: "account",
          name: "水"
        },
        {
          id: 2,
          icon: "account",
          name: "电"
        },
        {
          id: 3,
          icon: "account",
          name: "气"
        }
      ],
      scenes2: [
        {
          id: 1,
          icon: "account",
          name: "防疫"
        },
        {
          id: 2,
          icon: "account",
          name: "人流疏散"
        }
      ]
    };
  },
  methods: {
    txtClick(name) {
      this.active = name;
      this.$emit("tabClick", name);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.business-type {
  position: absolute;
  width: 36rem;
  left: 50%;
  bottom: 10rem;
  transform: translate(-50%);
}
.txt-box {
  height: 8.8rem;
  width: 11.5rem;
  text-align: center;
  opacity: 0.4;
  cursor: pointer;
  background: rgba(0, 26, 58, 0.8);
  &.active {
    opacity: 1;
    background: #0054ff;
    box-shadow: 0px 0px 30px 0px rgba(0, 83, 255, 0.9);
  }
}
.txt-icon {
  font-size: 3.2rem;
  margin: 1.2rem;
}
.txt-name {
  font-size: 1.4rem;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  color: #ffffff;
  //   line-height: 24px;
}
</style>
