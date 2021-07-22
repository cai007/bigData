<template>
  <div class="chart-div">
    <div v-if="data.child" class="chart-title row" :style="data.titleStyle">
      <div class="sub-rect"></div>
      <div class="sub-title">{{ data.title }}</div>
      <div class="unit" v-if="data.unit">{{ data.unit }}</div>
      <div
        class="select row"
        v-if="data.selectType !== null && data.selectType == 4"
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
        v-if="data.selectType !== null && data.selectType !== 4"
      >
        <q-select
          class="select select-sm"
          v-model="oprSelect"
          :options="selectData[data.selectType]"
          options-dense
          dense
          filled
        />
      </div>
    </div>
    <div style="flex:1">
      <Charts
        v-if="data.data && Object.keys(data.option).length"
        :style="data.chartStyle"
        :id="data.code"
        :title="data.title"
        :options="data.option"
      ></Charts>
    </div>
    <div v-if="data.withBottomLine" class="bottom-line"></div>
    <Charts
      style="height:12rem;"
      v-if="data.data && Object.keys(data.option).length && data.children"
      :id="data.children[0].code + new Date().getTime()"
      :title="data.children[0].title"
      :options="data.children[0].option"
    ></Charts>
  </div>
</template>

<script>
import Charts from "@/components/Charts/index";
export default {
  name: "linechart",
  components: { Charts },
  data() {
    return {
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
        ]
      ]
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    timeClick(name) {
      this.Timeactive = name;
      this.$emit("timeClick", name);
    }
  },
  watch: {
    data: {
      handler(val) {
        if (this.data.selectType !== null && this.data.selectType !== 4)
          this.oprSelect = this.selectData[this.data.selectType][0].value;
        else if (this.data.title == "特殊节假日消费趋势") {
          this.oprSelect = this.selectData[this.data.selectType][1].value;
        }
      },
      deep: true
    }
  },
  mounted() {
    console.log("特殊节假日消费趋势-----", this.data.selectType);
    if (this.data.selectType !== null && this.data.selectType !== 4)
      this.oprSelect = this.selectData[this.data.selectType][0].value;
    if (this.data.title == "特殊节假日消费趋势") {
      this.oprSelect = this.selectData[this.data.selectType][1].value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
</style>
