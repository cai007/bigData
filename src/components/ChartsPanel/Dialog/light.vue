<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :width="'100rem'"
    :title="'智慧灯杆详情'"
    :position="'position:absolute;right:0;'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section style="font-size:1.8rem;">
      <label for="name">照明状态</label>
      <div style="font-size:1.8rem;text-align:left;">
        <q-btn color="green" label="已开启" style="font-size:1.8rem" />
        <q-btn color="gray" label="已关闭" style="font-size:1.8rem" />
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="销售情况">环境监测传感器</label>
      <div class="flex" style="margin:0.8rem;justify-content: space-around;">
        <label for="当前风向">当前风向</label>
        <span class="num">东南风</span>
        <label for="当前风速">当前风速</label><span class="num">3m/s</span>
        <label for="当前气压">当前气压</label
        ><span class="num">101.325kPa</span>
        <label for="当前雨量">当前雨量</label><span class="num">5ml</span>
      </div>
    </q-card-section>
    <q-card-section horizontal style="font-size:1.8rem">
      <q-card-section style="width:50%;">
        <label for="name">风向趋势表</label>
        <div style="height:25rem;" id="fxqs"></div>
      </q-card-section>
      <q-card-section style="width:50%;">
        <label for="name">气压雨量变化趋势图</label>
        <div style="height:25rem;" id="qyyl"></div>
      </q-card-section>
    </q-card-section>
    <q-card-section horizontal style="font-size:1.8rem">
      <q-card-section style="width:50%;">
        <label for="name">温湿度变化趋势图</label>
        <div style="height:25rem;" id="wsbh"></div>
      </q-card-section>
      <q-card-section style="width:50%;">
        <label for="name">空气质量变化趋势图</label>
        <div style="height:25rem;" id="kqzl"></div>
      </q-card-section>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import * as echarts from "echarts";
import rawData from "./wind.js";
export default {
  name: "light",
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
          this.drawLine4();
          this.drawLine1();
          this.drawLine2();
          this.drawLine3();
        }, 1000);
      }
    }
  },
  methods: {
    drawLine1() {
      var directionMap = {};
      [
        "W",
        "WSW",
        "SW",
        "SSW",
        "S",
        "SSE",
        "SE",
        "ESE",
        "E",
        "ENE",
        "NE",
        "NNE",
        "N",
        "NNW",
        "NW",
        "WNW"
      ].forEach(function(name, index) {
        directionMap[name] = (Math.PI / 8) * index;
      });

      var data = rawData.data.map(function(entry) {
        return [entry.time, entry.windSpeed, entry.R, entry.waveHeight];
      });
      var dims = {
        time: 0,
        windSpeed: 1,
        R: 2,
        waveHeight: 3,
        weatherIcon: 2,
        minTemp: 3,
        maxTemp: 4
      };
      var arrowSize = 18;

      function renderArrow(param, api) {
        var point = api.coord([
          api.value(dims.time),
          api.value(dims.windSpeed)
        ]);

        return {
          type: "path",
          shape: {
            pathData: "M31 16l-15-15v9h-26v12h26v9z",
            x: -arrowSize / 2,
            y: -arrowSize / 2,
            width: arrowSize,
            height: arrowSize
          },
          rotation: directionMap[api.value(dims.R)],
          position: point,
          style: api.style({
            stroke: "#555",
            lineWidth: 1
          })
        };
      }

      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            return [
              echarts.format.formatTime(
                "yyyy-MM-dd",
                params[0].value[dims.time]
              ) +
                " " +
                echarts.format.formatTime("hh:mm", params[0].value[dims.time]),
              "风速：" + params[0].value[dims.windSpeed],
              "风向：" + params[0].value[dims.R]
            ].join("<br>");
          }
        },
        grid: {
          containLabel: true,
          left: 20,
          top: 30,
          bottom: 30
        },
        xAxis: {
          type: "time",
          maxInterval: 3600 * 1000 * 24,
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#ddd"
            }
          }
        },
        yAxis: [
          {
            name: "风速（节）",
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#ddd"
              }
            }
          },
          {
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false }
          }
        ],
        visualMap: {
          type: "piecewise",
          // show: false,
          orient: "horizontal",
          left: "center",
          bottom: 0,
          textStyle: {
            color: "#FFF"
          },
          pieces: [
            {
              gte: 17,
              color: "#18BF12",
              label: "大风（>=17节）"
            },
            {
              gte: 11,
              lt: 17,
              color: "#f4e9a3",
              label: "中风（11  ~ 17 节）"
            },
            {
              lt: 11,
              color: "#D33C3E",
              label: "微风（小于 11 节）"
            }
          ],
          seriesIndex: 1,
          dimension: 1
        },
        dataZoom: [
          {
            type: "inside",
            xAxisIndex: 0,
            minSpan: 5
          },
          {
            type: "slider",
            xAxisIndex: 0,
            minSpan: 5,
            bottom: 50
          }
        ],
        series: [
          {
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            symbolSize: 10,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(88,160,253,1)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(88,160,253,0.7)"
                  },
                  {
                    offset: 1,
                    color: "rgba(88,160,253,0)"
                  }
                ]
              }
            },
            lineStyle: {
              normal: {
                color: "rgba(88,160,253,1)"
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(88,160,253,1)"
              }
            },
            encode: {
              x: dims.time
            },
            z: 2
          },
          {
            type: "custom",
            renderItem: renderArrow,
            encode: {
              x: dims.time,
              y: dims.windSpeed
            },
            data: data,
            z: 10
          },
          {
            type: "line",
            symbol: "none",
            encode: {
              x: dims.time,
              y: dims.windSpeed
            },
            lineStyle: {
              normal: {
                color: "#aaa",
                type: "dotted"
              }
            },
            data: data,
            z: 1
          }
        ]
      };

      var chartDom = document.getElementById("fxqs");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    drawLine2() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        legend: {
          data: ["雨量", "气压"],
          textStyle: {
            color: "#FFF"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "雨量(ml)",
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "气压(kPa)",
            min: 101.1,
            max: 101.6,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisLabel: {
              formatter: "{value} kPa"
            }
          }
        ],
        series: [
          {
            name: "雨量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "气压",
            type: "line",
            yAxisIndex: 1,
            data: [
              101.125,
              101.225,
              101.325,
              101.225,
              101.125,
              101.625,
              101.3825,
              101.365,
              101.525,
              101.125,
              101.225,
              101.325,
              101.625
            ]
          }
        ]
      };
      var chartDom = document.getElementById("qyyl");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    drawLine3() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },

        legend: {
          data: ["温度", "湿度"],
          textStyle: {
            color: "#FFF"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "温度(℃)",
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "湿度",
            min: 0,
            max: 25,
            axisLine: {
              lineStyle: {
                color: "#FFF"
              }
            },
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "温度",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "湿度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      };
      var chartDom = document.getElementById("wsbh");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    drawLine4() {
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最差", "最优"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          },
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "最差",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };

      var chartDom = document.getElementById("kqzl");
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
