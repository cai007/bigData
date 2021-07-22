<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'设备详情'"
    :position="'position:absolute;right:45rem;'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section style="font-size:1.8rem">
      <label for="销售情况">概况</label>
      <div class="flex" style="margin:0.8rem;justify-content: space-around;">
        <label for="今日销售数">已工作时间</label>
        <span class="num">32小时</span>
        <label for="本月销售数">覆盖面积</label><span class="num">932㎡</span>
      </div>
      <div
        class="flex"
        style="margin-left:0.8rem;justify-content: space-around;"
      >
        <label for="今日销售额">总巡检面积</label
        ><span class="num">3312㎡</span>
        <label for="本月销售额">已行驶路程</label><span class="num">4422m</span>
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">电水余量</label>
      <SvgIcon
        icon="case-management"
        style="position: absolute;top: 10rem;font-size: 4rem;"
      ></SvgIcon>
      <SvgIcon
        icon="equipment-water"
        style="position: absolute;top: 10rem;left:30rem;font-size: 4rem;"
      ></SvgIcon>
      <div id="dsyl" style="height:20rem;"></div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">产品参数</label>
      <div
        class="row"
        style="font-size:1.6rem;width: 75%;margin-left: 15%;border:0.1rem solid #666"
      >
        <div
          style="width:25%;height:10rem;text-align:center;padding-top:2rem;opacity:0.8;"
          v-for="(item, i) in proData"
          :key="'pro' + i"
        >
          <!-- <SvgIcon :icon="item.icon" style="font-size: 4rem;"></SvgIcon> -->
          <q-img style="height:4rem;width:4rem" :src="item.icon" />
          <div style="font-size:1.4rem;margin-top:0.8rem">{{ item.name }}</div>
        </div>
      </div>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import * as echarts from "echarts";
import "echarts-liquidfill";
export default {
  name: "patrolRobot",
  data() {
    return {
      timer: "",
      proData: [
        {
          name: "消毒",
          icon: require("@/assets/img/patrol/1.png")
        },
        {
          name: "全天候定时作业",
          icon: require("@/assets/img/patrol/2.png")
        },
        {
          name: "全覆盖路径规划",
          icon: require("@/assets/img/patrol/3.png")
        },
        {
          name: "作业报告",
          icon: require("@/assets/img/patrol/4.png")
        },
        {
          name: "超强续航",
          icon: require("@/assets/img/patrol/5.png")
        },
        {
          name: "高精SLAM地图",
          icon: require("@/assets/img/patrol/6.png")
        },
        {
          name: "短信通知",
          icon: require("@/assets/img/patrol/7.png")
        },
        {
          name: "自动充电",
          icon: require("@/assets/img/patrol/8.png")
        },
        {
          name: "自主避障",
          icon: require("@/assets/img/patrol/9.png")
        },
        {
          name: "故障报警",
          icon: require("@/assets/img/patrol/10.png")
        },
        {
          name: "OTA及云服务",
          icon: require("@/assets/img/patrol/11.png")
        },
        {
          name: "污渍识别",
          icon: require("@/assets/img/patrol/12.png")
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
        title: [
          {
            x: "0",
            top: "10%",
            textStyle: {
              color: "#fff",
              fontSize: "1.4rem",
              fontWeight: "100"
            }
          },
          {
            x: "50%",
            top: "10%",
            textStyle: {
              color: "#fff",
              fontSize: "1.4rem",
              fontWeight: "100"
            }
          }
        ],
        series: [
          {
            type: "liquidFill",
            radius: "45%",
            center: ["35%", "50%"],
            data: [0.6, 0.6], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)"
            },
            label: {
              normal: {
                // formatter: (0.6 * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: "1.4rem",
                  color: "#FFF"
                }
              }
            },
            outline: {
              show: false
            }
          },
          {
            type: "liquidFill",
            radius: "45%",
            center: ["75%", "50%"],
            data: [0.4, 0.4], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)"
            },
            label: {
              normal: {
                // formatter: (0.6 * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: "1.4rem",
                  color: "#FFF"
                }
              }
            },
            outline: {
              show: false
            }
          },
          {
            type: "pie",
            center: ["75%", "50%"],
            radius: ["50%", "52%"],
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#5886f0"
                  }
                }
              },
              {
                // 解决圆点过大后续部分显示明显的问题
                name: "",
                value: 4.5,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#5886f0"
                  }
                }
              },
              {
                //画剩余的刻度圆环
                name: "",
                value: 88,
                itemStyle: {
                  color: "#050038"
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#050038"
                  }
                }
              }
            ]
          },
          {
            type: "pie",
            center: ["35%", "50%"],
            radius: ["50%", "52%"],
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#5886f0"
                  }
                }
              },
              {
                // 解决圆点过大后续部分显示明显的问题
                name: "",
                value: 4.5,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#5886f0"
                  }
                }
              },
              {
                //画剩余的刻度圆环
                name: "",
                value: 88,
                itemStyle: {
                  color: "#050038"
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#050038"
                  }
                }
              }
            ]
          }
        ]
      };

      var chartDom = document.getElementById("dsyl");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    },
    close() {
      this.$emit("closeDialog");
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
</style>
