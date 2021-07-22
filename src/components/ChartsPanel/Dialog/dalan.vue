<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'设备详情'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section style="font-size:1.8rem">
      <label for="销售情况">销售情况</label>
      <div class="flex" style="margin:0.8rem;justify-content: space-around;">
        <label for="今日销售数">今日销售数</label>
        <span class="num">321件</span>
        <label for="本月销售数">本月销售数</label
        ><span class="num">9321件</span>
      </div>
      <div
        class="flex"
        style="margin-left:0.8rem;justify-content: space-around;"
      >
        <label for="今日销售额">今日销售额</label
        ><span class="num">1672元</span>
        <label for="本月销售额">本月销售额</label
        ><span class="num">44220元</span>
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">注册用户/消费用户占比</label>
      <q-linear-progress size="2.5rem" :value="0.64" color="green">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="'64%'" />
        </div>
      </q-linear-progress>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">设备状态</label>
      <div style="font-size:1.8rem">
        <q-btn color="green" label="销售中" style="font-size:1.8rem" />
        <q-btn color="gray" label="暂停售卖" style="font-size:1.8rem" />
        <q-btn color="gray" label="维护中" style="font-size:1.8rem" />
      </div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem">
      <label for="name">销售情况</label>
      <div style="height:20rem;" id="sxqk"></div>
    </q-card-section>
    <q-card-section style="font-size:1.8rem;">
      <label for="name">商品在库</label>
      <div
        class="row"
        style="justify-content: space-around;padding-top:1.2rem;"
      >
        <div
          v-for="(d, i) in drinks"
          :key="'s' + i"
          class="row"
          style="height:80px;"
        >
          <q-img :src="d.imgUrl" style="width:30px;height:60px;" />
          <div style="margin:1.6rem">
            <q-linear-progress
              size="1rem"
              :value="d.per"
              color="green"
              style="margin-top:10px;"
            >
            </q-linear-progress>
            <label for="a">剩余{{ d.remain }}件</label>
          </div>
        </div>
      </div>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import * as echarts from "echarts";

export default {
  name: "dalan",
  data() {
    return {
      timer: "",
      drinks: [
        {
          imgUrl: require("@/assets/img/shops/可乐.png"),
          remain: 8,
          per: 0.6
        },
        {
          imgUrl: require("@/assets/img/shops/脉动.png"),
          remain: 5,
          per: 0.3
        },
        {
          imgUrl: require("@/assets/img/shops/红茶.png"),
          remain: 2,
          per: 0.1
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
          icon: "rect",
          textStyle: {
            fontSize: "1.4rem"
          },
          show: false
        },
        grid: {
          left: "60rem",
          top: "15rem",
          right: "30rem",
          bottom: "20rem"
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
