<template>
  <div
    style="width:100%;height:100%;"
    :style="data.child ? data.windowStyle : ''"
  >
    <div v-if="data.child" class="chart-title row" :style="data.titleStyle">
      <div class="sub-title">{{ data.title }}</div>
      <div class="unit" v-if="data.unit">{{ data.unit }}</div>
    </div>
    <div class="num" :style="data.dataStyle">
      {{
        isInteger(new Number(data.data))
          ? new Number(data.data)
          : new Number(data.data).toFixed(1)
      }}
    </div>
    <div
      v-if="data.chart == 'num5'"
      class="chart-title row"
      :style="data.titleStyle"
    >
      <div class="title">{{ data.title }}</div>
      <div class="unit" v-if="data.unit">{{ data.unit }}</div>
    </div>
    <SvgIcon
      v-if="data.icon"
      :icon="data.icon"
      :style="data.iconStyle"
    ></SvgIcon>
    <Charts
      v-if="data.option && Object.keys(data.option).length"
      :style="data.chartStyle"
      :id="data.code"
      :title="data.title"
      :options="data.option"
    ></Charts>
    <div v-if="data.caption">
      <span class="caption-title">{{ data.caption }}</span> :<span
        class="caption-data"
        >{{ data.captionData }}</span
      >
    </div>
  </div>
</template>

<script>
import Charts from "@/components/Charts/index";
export default {
  name: "num",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: { Charts },
  methods: {
    isInteger(obj) {
      return obj % 1 === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
</style>
