<template>
  <div class="row ratio" style="width:100%;height:100%;">
    <div v-for="(c, i) in data.data" :key="'ratio' + i">
      <div class="chart-title row">
        <div class="sub-title">{{ c.name }}</div>
      </div>
      <div class="num">
        {{ c.per }}
      </div>
      <SvgIcon v-if="c.icon" :icon="c.icon" :style="data.iconStyle"></SvgIcon>
    </div>
  </div>
</template>

<script>
export default {
  name: "ratio",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
.ratio {
  justify-content: space-around;
  padding: 1.8rem;
  .num {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
}
</style>
