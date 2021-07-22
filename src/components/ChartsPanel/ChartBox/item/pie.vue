<template>
  <div class="chart-div">
    <div v-if="data.child" class="chart-title row" :style="data.titleStyle">
      <div class="sub-rect"></div>
      <div class="sub-title">{{ data.title }}</div>
      <div class="unit" v-if="data.unit">{{ data.unit }}</div>
    </div>
    <div style="flex:1">
      <Charts
        v-if="data.data && Object.keys(data.option).length"
        :style="data.chartStyle"
        :title="data.title"
        :id="data.code + new Date().getTime()"
        :options="data.option"
      ></Charts>
    </div>
    <Num
      v-if="
        data.children &&
          data.children.length == 1 &&
          data.children[0].chart.indexOf('num') !== -1
      "
      :data="data.children[0]"
      :title="data.title"
      class="pie-num1"
      style="position:absolute;background-color:transparent;"
    ></Num>
    <Detail
      v-if="
        data.children &&
          data.children.length == 1 &&
          data.children[0].chart.indexOf('detail') !== -1
      "
      :data="data.children[0]"
      :title="data.title"
      class="detail"
      style="position:absolute;background-color:transparent;width:45%;"
    ></Detail>
    <div v-if="data.withBottomLine" class="bottom-line"></div>
  </div>
</template>

<script>
import Charts from "@/components/Charts/index";
import Num from "./num.vue";
import Detail from "../otherItem/detail";
export default {
  name: "pie",
  components: { Charts, Num, Detail },
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
.pie-num1 {
  top: 6rem;
  right: -2rem;
}
.detail {
  top: 5rem;
  right: 0;
}
</style>
