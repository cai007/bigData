<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'设备详情'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section style="font-size:1.8rem;">
      <label for="name">设备状态</label>
      <div style="font-size:1.8rem;text-align:center;">
        <q-btn color="green" label="运行中" style="font-size:1.8rem" />
        <q-btn color="gray" label="已关闭" style="font-size:1.8rem" />
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">使用次数</label>
      <span class="num" style="font-size:1.8rem;margin-left:1.8rem">
        211
      </span>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">注册/未注册占比</label>
      <q-linear-progress size="2.5rem" :value="0.64" color="green">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="'64%'" />
        </div>
      </q-linear-progress>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">用户健康状态占比</label>
      <div class="row" style="height:4rem;width:100%;">
        <div
          style="width:23%;background:yellow;font-size:1.6rem;text-align:center;line-height:4rem;"
        >
          不佳（23%）
        </div>
        <div
          style="width:53%;background:green;font-size:1.6rem;text-align:center;line-height:4rem;"
        >
          良好（63%）
        </div>
        <div
          style="width:24%;background:blue;font-size:1.6rem;text-align:center;line-height:4rem;"
        >
          优秀（24%）
        </div>
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <div class="row" style="float:right;">
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
      <label for="name">使用次数变化趋势</label>
      <div style="height:20rem;" id="sxqk"></div>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import * as echarts from "echarts";

export default {
  name: "mirror",
  data() {
    return {
      timer: "",
      Timeactive: "月",
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
      ]
    };
  },
  components: {
    DialogDraggable
  },
  props: {
    detailDialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  watch: {
    detailDialog(v) {
      if (v) {
        this.timer = setTimeout(() => {
          this.drawLine();
        }, 1000);
      }
    }
  },
  methods: {
    drawLine() {
      let option = {
        backgroundColor: "transparent",
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          left: "2.5rem",
          bottom: "-2.5rem",
          icon: "rect",
          textStyle: {
            fontSize: "1.4rem"
          },
          data: ["2020"],
          formatter: function(name) {
            return name + "jksdjsk";
          }
        },
        grid: {
          left: "60rem",
          top: "15rem",
          right: "30rem",
          bottom: "60rem"
        },
        xAxis: {
          type: "category",
          data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
          boundaryGap: false,
          axisLabel: {
            //坐标轴文字
            show: true,
            fontSize: "1.4rem",
            color: "#FFF"
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            //坐标轴文字
            fontSize: "1.4rem",
            color: "#FFF"
          }
        },
        series: [
          {
            name: "销售额",
            type: "line",
            data: [150, 230, 224, 218, 135, 147, 260],
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(128, 255, 165)"
                },
                {
                  offset: 1,
                  color: "rgba(1, 191, 236)"
                }
              ])
            },
            emphasis: {
              focus: "series"
            }
          }
        ]
      };

      var chartDom = document.getElementById("sxqk");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    close() {
      this.$emit("closeDialog");
    },
    timeClick(name) {
      this.Timeactive = name;
      this.$emit("timeClick", name);
    }
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.num {
  opacity: 1;
  background-image: -webkit-linear-gradient(0deg, #0084ff 0%, #00ccff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  font-family: Montserrat, Montserrat-Regular;
  font-weight: 400;
  text-shadow: 2px 2px 20px #0054ff;
}
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
