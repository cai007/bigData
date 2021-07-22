<template>
  <div class="chart-div">
    <Charts
      style="hight:100%;width:100%"
      v-if="Object.keys(data.option).length"
      :style="data.chartStyle"
      :id="data.code + new Date().getTime()"
      :title="data.title"
      :options="data.option"
    ></Charts>
  </div>
</template>

<script>
import Charts from "@/components/Charts/index";
export default {
  name: "cmap",
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
