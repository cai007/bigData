<template>
  <div class="chart-div">
    <div v-if="data.child" class="chart-title row" :style="data.titleStyle">
      <div class="sub-rect"></div>
      <div class="sub-title">{{ data.title }}</div>
      <div class="unit" v-if="data.unit">{{ data.unit }}</div>
    </div>
    <div style="flex:1">
      <Charts
        v-if="Object.keys(data.option).length"
        :style="data.chartStyle"
        :id="data.code + new Date().getTime()"
        :title="data.title"
        :options="data.option"
      ></Charts>
    </div>
    <div v-if="data.withBottomLine" class="bottom-line"></div>
  </div>
</template>

<script>
import Charts from "@/components/Charts/index";
export default {
  name: "bar",
  components: { Charts },
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
</style>
