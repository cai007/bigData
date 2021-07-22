<template>
  <WindowPanel
    :windowStyle="chartData.windowStyle"
    class="chart-box"
    :style="chartData.chart == 'space' ? 'visibility:hidden' : ''"
  >
    <div
      v-if="chartData.chart !== 'num5'"
      class="chart-title row"
      :style="chartData.titleStyle"
      @click="windowClick(chartData)"
    >
      <div class="title">{{ chartData.title }}</div>
      <div class="unit" v-if="chartData.unit">{{ chartData.unit }}</div>
      <div
        class="select row"
        v-if="chartData.selectType !== null && chartData.selectType == 4"
      >
        <div
          v-for="(t, i) in times"
          :key="'txt' + i"
          class="txt-box"
          :class="Timeactive == t.name ? 'active' : ''"
          @click.stop="timeClick(t.name)"
        >
          <div class="txt-name">{{ t.name }}</div>
        </div>
      </div>
      <div
        class="select"
        @click.stop
        v-if="chartData.selectType !== null && chartData.selectType !== 4"
      >
        <q-select
          class="select select-sm"
          v-model="oprSelect"
          :options="selectData[chartData.selectType]"
          options-dense
          dense
          filled
        />
      </div>
    </div>
    <div class="chart-content">
      <component
        :is="
          chartData.chart.slice(0, 1).toUpperCase() +
            chartData.chart.slice(1, 3)
        "
        :data="chartData"
      />
    </div>
  </WindowPanel>
</template>

<script>
import WindowPanel from "@/components/Common/WindowPanel";
import Dty from "../Table/duty.vue";
import Pip from "../Table/pipe.vue";

import Num from "./item/num";
import Bar from "./item/bar";
import Pie from "./item/pie";
import Mix from "./item/mix";
import Rnk from "./item/rank";
import Lin from "./item/lin";
import Txt from "./item/txt";
import Fun from "./item/fun";
import Wrd from "./item/word";
import Tre from "./item/tree";
import Map from "./item/cmap";
import Tab from "./item/table";
import Spa from "./item/space";
import Rat from "./item/ratio.vue";
import Det from "./otherItem/detail.vue";
import Vid from "./otherItem/cvideo";
import Inf from "./otherItem/info";
import Bus from "./item/bus";
import Cro from "./item/cross";

import { sendMessageToMap } from "@/utils/index.js";

export default {
  name: "chartBox",
  data() {
    return {
      detailDialog: false,
      oprSelect: "",
      active: 1,
      times: [
        {
          id: 1,
          icon: "account",
          name: "月"
        },
        {
          id: 2,
          icon: "account",
          name: "周"
        },
        {
          id: 3,
          icon: "account",
          name: "日"
        },
        {
          id: 4,
          icon: "account",
          name: "时"
        }
      ],
      Timeactive: "月",
      selectData: [
        [
          { value: 2021, label: 2021 },
          { value: 2020, label: 2020 },
          { value: 2019, label: 2019 }
        ],
        [
          {
            label: "2021-06",
            value: "2021-06"
          },
          {
            label: "2021-05",
            value: "2021-05"
          },
          {
            label: "2021-04",
            value: "2021-04"
          },
          {
            label: "2021-03",
            value: "2021-03"
          },
          {
            label: "2021-02",
            value: "2021-02"
          },
          {
            label: "2021-01",
            value: "2021-01"
          },
          {
            label: "2020-12",
            value: "2020-12"
          },
          {
            label: "2020-11",
            value: "2020-11"
          },
          {
            label: "2020-10",
            value: "2020-10"
          },
          {
            label: "2020-09",
            value: "2020-09"
          },
          {
            label: "2020-08",
            value: "2020-08"
          },
          {
            label: "2020-07",
            value: "2020-07"
          }
        ],
        [
          { value: "十一黄金周", label: "十一黄金周" },
          { value: "五一黄金周", label: "五一黄金周" },
          { value: "端午节", label: "端午节" },
          { value: "清明节", label: "清明节" },
          { value: "中秋节", label: "中秋节" },
          { value: "元旦", label: "元旦" },
          { value: "过年", label: "过年" }
        ],
        [
          { value: "奥特莱斯", label: "奥特莱斯" },
          { value: "月新广场", label: "月新广场" },
          { value: "中商百货", label: "中商百货" },
          { value: "东方白货", label: "东方白货" },
          { value: "中天大楼", label: "中天大楼" }
        ],
        [],
        [
          { value: "第一季度", label: "第一季度" },
          { value: "第二季度", label: "第二季度" },
          { value: "第三季度", label: "第三季度" },
          { value: "第四季度", label: "第四季度" }
        ]
      ]
    };
  },
  props: {
    chartData: {
      type: Object,
      required: true
    }
  },
  components: {
    WindowPanel,
    Num,
    Bar,
    Pie,
    Mix,
    Rnk,
    Lin,
    Txt,
    Fun,
    Wrd,
    Tre,
    Map,
    Tab,
    Spa,
    Rat,
    Det,
    Bus,
    Cro,
    Dty,
    Pip,
    Vid,
    Inf
  },
  methods: {
    tabClick(i) {
      this.active = i;
      this.$emit("selectClick", i);
    },
    windowClick(data) {
      console.log("chartTitle", data);
      sendMessageToMap("chartTitle", data);
    },
    timeClick(name) {
      this.Timeactive = name;
      this.$emit("timeClick", name);
    }
  },
  watch: {
    oprSelect(val) {
      //根据id和筛选条件查询对应图的数据
    },
    oprRadio(val) {
      console.log("oprRadio", val);
    },
    chartData: {
      handler(val) {
        if (
          this.chartData.selectType !== null &&
          this.chartData.selectType !== 4
        ) {
          if (this.chartData.selectType == 5 || this.chartData.selectType == 1)
            this.oprSelect = this.selectData[
              this.chartData.selectType
            ][0].value;
          else if (
            this.chartData.title == "消费报告" ||
            this.chartData.title == "区域消费报告"
          )
            this.oprSelect = this.selectData[
              this.chartData.selectType
            ][0].value;
          else
            this.oprSelect = this.selectData[
              this.chartData.selectType
            ][1].value;
        }
      },
      deep: true
    }
  },
  mounted() {
    if (this.chartData.selectType !== null && this.chartData.selectType !== 4) {
      if (this.chartData.selectType == 5 || this.chartData.selectType == 1)
        this.oprSelect = this.selectData[this.chartData.selectType][0].value;
      else if (
        this.chartData.title == "消费报告" ||
        this.chartData.title == "区域消费报告"
      )
        this.oprSelect = this.selectData[this.chartData.selectType][0].value;
      else this.oprSelect = this.selectData[this.chartData.selectType][1].value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./item/chart.scss";

.txt-box {
  height: 2.4rem;
  line-height: 2.4rem;
  width: 4rem;
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
.txt-name {
  font-size: 1.4rem;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  color: #ffffff;
  //   line-height: 24px;
}
</style>
