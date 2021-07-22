<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";
import resize from "./mixins/resize";
import { sendMessageToMap } from "@/utils/index.js";

export default {
  mixins: [resize],
  props: {
    title: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler(val) {
        this.formatSizeByResize(val);
      }
    },
    bottomDis(val) {
      this.chart.resize();
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart.off("click");
    this.chart = null;
  },
  computed: {
    bottomDis() {
      return this.$store.state.bigData.bottomDis;
    }
  },
  methods: {
    initChart() {
      //- 不要重复初始化
      let Chart = echarts.getInstanceByDom(this.id);
      if (!Chart) {
        this.chart = echarts.init(document.getElementById(this.id), "dark");
      }

      this.chart.on("click", params => {
        params.title = this.title;
        console.log("paraAll", params);
        let { title, name, percent, value, dataIndex, seriesIndex } = params;
        if (name.indexOf(" ") !== -1)
          name = name.substring(0, name.indexOf(" "));
        if (percent == undefined) percent = "";
        if (dataIndex == undefined) dataIndex = "";
        if (seriesIndex == undefined) seriesIndex = "";

        console.log("paraAll----", {
          title,
          name,
          percent,
          value,
          dataIndex,
          seriesIndex
        });
        sendMessageToMap("chartData", {
          title,
          name,
          percent,
          value,
          dataIndex,
          seriesIndex
        });
      });
      // this.setOptions();
      this.formatSizeByResize();
    },
    setOptions() {
      //-dom 不存在时不画
      if (!this.chart) {
        return;
      }
      this.chart.setOption(this.options);
    }
  }
};
</script>
