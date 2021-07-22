<template>
  <div>
    <div v-if="panel0" class="top-panel row">
      <ChartBox
        v-for="(v, i) in charts0"
        :key="'win' + i"
        :chartData="v"
      ></ChartBox>
    </div>
    <transition-group
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutLeft"
    >
      <div
        v-if="panel1"
        class="charts-panel row content-start panel1"
        key="panel1"
      >
        <ChartBox
          v-for="(v, i) in charts1"
          :key="'win' + i"
          :chartData="v"
        ></ChartBox>
      </div>
      <div
        v-if="isDoubleLine && panel2"
        class="charts-panel row content-start panel2"
        key="panel2"
      >
        <ChartBox
          v-for="(v, i) in charts2"
          :key="'win' + i"
          :chartData="v"
        ></ChartBox>
      </div>
    </transition-group>
    <transition-group
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutRight"
    >
      <div
        v-if="isDoubleLine && panel3"
        class="charts-panel row content-start panel3"
        key="panel3"
      >
        <ChartBox
          v-for="(v, i) in charts3"
          :key="'win' + i"
          :chartData="v"
        ></ChartBox>
      </div>
      <div
        v-if="panel4"
        class="charts-panel row content-start panel4"
        key="panel4"
      >
        <ChartBox
          v-for="(v, i) in charts4"
          :key="'win' + i"
          :chartData="v"
        ></ChartBox>
      </div>
    </transition-group>
    <Scene
      v-if="hasSceneTabs"
      :type="params.businessId"
      @sceneClick="sceneClick"
    ></Scene>

    <!-- <q-btn color="primary" label="大兰货柜" @click="test1" /> -->

    <DetailDialog
      :detailDialog="detailDialog"
      @closeDialog="closeDialog('detailDialog')"
    ></DetailDialog>

    <Dalan
      :detailDialog="dalanDialog"
      @closeDialog="closeDialog('dalanDialog')"
    ></Dalan>
    <WIFI
      :detailDialog="wifiDialog"
      @closeDialog="closeDialog('wifiDialog')"
    ></WIFI>
    <Mirror
      :detailDialog="mirrorDialog"
      @closeDialog="closeDialog('mirrorDialog')"
    ></Mirror>
    <Light
      :detailDialog="lightDialog"
      @closeDialog="closeDialog('lightDialog')"
    ></Light>
    <Owl
      :detailDialog="owlDialog"
      @closeDialog="closeDialog('owlDialog')"
    ></Owl>
    <Patrol
      :detailDialog="patrolDialog"
      @closeDialog="closeDialog('patrolDialog')"
    ></Patrol>

    <AIAlarm
      :detailDialog="alarmDialog"
      :data="AIAlarmData"
      @closeDialog="closeDialog('alarmDialog')"
    ></AIAlarm>
    <FlowCam
      :detailDialog="flowDialog"
      :data="cameraData"
      @closeDialog="closeDialog('flowDialog')"
    ></FlowCam>
    <ImportantUnitDetail
      :detailDialog="importantUnitDialog"
      @closeDialog="closeDialog('importantUnitDialog')"
    ></ImportantUnitDetail>
    <ContingencyPlan
      :detailDialog="planDialog"
      @closeDialog="closeDialog('planDialog')"
    ></ContingencyPlan>
    <PipeDialog
      :detailDialog="pipeDialog"
      @closeDialog="closeDialog('pipeDialog')"
    ></PipeDialog>
  </div>
</template>

<script>
import { mergeCongig } from "./config";
import { chartsTest, chartT2 } from "./chartData";
import ChartBox from "./ChartBox/index";
import chartApi from "@/api/bigData/charts.js";
import Scene from "./Menu/scene";
import ContingencyPlan from "./Dialog/contingencyPlan.vue";
import DetailDialog from "./Dialog/detail.vue";
import Dalan from "./Dialog/dalan.vue";
import WIFI from "./Dialog/wifi.vue";
import Mirror from "./Dialog/mirror.vue";
import Light from "./Dialog/light.vue";
import Owl from "./Dialog/owl.vue";
import Patrol from "./Dialog/patrolRobot.vue";
import AIAlarm from "./Dialog/AIAlarm.vue";
import FlowCam from "./Dialog/flowCam.vue";
import PipeDialog from "./Dialog/pipe.vue";
import ImportantUnitDetail from "./Dialog/importantUnitDetail";
import axios from "axios";

export default {
  name: "chartsPanel",
  components: {
    ChartBox,
    DetailDialog,
    Dalan,
    WIFI,
    Mirror,
    Light,
    Owl,
    Patrol,
    AIAlarm,
    FlowCam,
    PipeDialog,
    Scene,
    ContingencyPlan,
    ImportantUnitDetail
  },
  props: {
    menuName: {
      type: String,
      required: true,
      default: "消费数据"
    }
  },
  data() {
    return {
      panel0: false,
      panel1: false,
      panel2: false,
      panel3: false,
      panel4: false,
      detailDialog: false, //兴趣点详情
      dalanDialog: false, //大兰货柜
      wifiDialog: false, //wifi
      mirrorDialog: false, //魔镜
      lightDialog: false, //灯杆
      owlDialog: false, //猫头鹰
      patrolDialog: false, //巡检机器人
      alarmDialog: false, //警报
      importantUnitDialog: false, //重点单位
      planDialog: false, //应急预案
      pipeDialog: false, //官网
      flowDialog: false, //客流相机
      hasSceneTabs: true,
      charts0: [],
      charts1: [],
      charts2: [],
      charts3: [],
      charts4: [],
      params: {
        businessId: "政区数据",
        sceneId: ""
      }
    };
  },
  methods: {
    closeAllDialog() {
      this.detailDialog = false; //兴趣点详情
      this.dalanDialog = false; //大兰货柜
      this.alarmDialog = false; //警报
      this.importantUnitDialog = false; //重点单位
      this.planDialog = false; //应急预案
      this.pipeDialog = false;
      this.flowDialog = false;
      this.wifiDialog = false;
      this.mirrorDialog = false;
      this.owlDialog = false;
      this.lightDialog = false;
      this.patrolDialog = false;
    },
    closeDialog(d) {
      this[d] = false;
    },
    test1() {
      // this.charts3 = chartT2;
      // mergeCongig(this.charts3);
      // this.panel3 = true;
      this.patrolDialog = true;
      // this.$store.commit("SET_MAP_DATA", {
      //   Type: "select_equipment",
      //   Message: {
      //     name: "魔镜",
      //     chartOnly: false
      //   }
      // });
      // this.importantUnitDialog = true;
    },
    sceneClick(name) {
      //点击场景
      if (
        this.params.businessId == "客群画像" ||
        this.params.businessId == "政区数据"
      )
        this.params.sceneId = "";
      else this.params.sceneId = name;
      this.getChartsData();
    },
    getChartsData() {
      console.log("切换参数：", this.params);
      if (this.$store.state.bigData.requests.length > 0) {
        console.log("接口参数：", this.$store.state.bigData.requests);
        //终止所有的请求实例
        this.$store.state.bigData.requests.forEach(_source =>
          _source.cancel("接口终止！")
        );
        //执行完清空，等待下一次的页面的请求装载
        this.$store.state.bigData.requests = [];
      }

      for (let index = 0; index < 5; index++) {
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        this["panel" + index] = false;
        chartApi
          .getChart(
            { ...this.params, line: index },
            { cancelToken: source.token }
          )
          .then(res => {
            this["charts" + index] = res.data.filter(c => !c.child);
            mergeCongig(this["charts" + index]);
            this["panel" + index] = true;
          });

        this.$store.state.bigData.requests.push(source);
      }
    },
    getEquipmentData(n) {
      this.params.sceneId = n;
      if (this.$store.state.bigData.requests.length > 0) {
        console.log("-----", this.$store.state.bigData.requests.length);
        //终止所有的请求实例
        this.$store.state.bigData.requests.forEach(_source =>
          _source.cancel("接口终止！")
        );
        //执行完清空，等待下一次的页面的请求装载
        this.$store.state.bigData.requests = [];
      }
      var CancelToken = axios.CancelToken;
      var source1 = CancelToken.source();
      this.panel3 = false;
      this.panel4 = false;
      chartApi
        .getChart({ ...this.params, line: 3 }, { cancelToken: source1.token })
        .then(res => {
          this.charts3 = res.data.filter(c => !c.child);
          mergeCongig(this.charts3);
          this.panel3 = true;
        });
      this.$store.state.bigData.requests.push(source1);
      var source2 = CancelToken.source();
      chartApi
        .getChart({ ...this.params, line: 4 }, { cancelToken: source2.token })
        .then(res => {
          this.charts4 = res.data.filter(c => !c.child);
          mergeCongig(this.charts4);
          this.panel4 = true;
        });
      this.$store.state.bigData.requests.push(source2);
    }
  },
  computed: {
    isDoubleLine() {
      return this.$store.state.bigData.isDoubleLine;
    },
    interactionName() {
      return this.$store.state.bigData.interactionName;
    },
    regionData() {
      return this.$store.state.bigData.regionData;
    },
    unitData() {
      return this.$store.state.bigData.unitData;
    },
    interestData() {
      return this.$store.state.bigData.interestData;
    },
    AIAlarmData() {
      return this.$store.state.bigData.AIAlarmData;
    },
    cameraData() {
      return this.$store.state.bigData.cameraData;
    },
    dalanData() {
      return this.$store.state.bigData.dalanData;
    },
    equipmentData() {
      return this.$store.state.bigData.equipmentData;
    },
    pipeData() {
      return this.$store.state.bigData.pipeData;
    }
  },
  watch: {
    menuName(n) {
      console.log(n);
      this.closeAllDialog();
      this.$store.state.bigData.interactionName = ""; //副标题清空
      this.params.businessId = n;

      if (n == "消费数据") {
        this.hasSceneTabs = true;
        this.params.sceneId = "街区整体";
      } else if (n == "政区数据") {
        this.hasSceneTabs = true;
        this.params.sceneId = "";
        // this.params.sceneId = "季度";
      } else if (n == "客群画像") {
        this.hasSceneTabs = true;
        this.params.sceneId = "";
        // this.params.sceneId = "季度";
      }
      // else if (n == "能耗数据") {
      //   this.hasSceneTabs = true;
      //   this.params.sceneId = "";
      //   // this.params.sceneId = "水";
      // }
      else if (n == "应急预案") {
        this.hasSceneTabs = true;
        this.params.sceneId = "防疫";
        this.planDialog = true;
      } else if (n == "智能设备") {
        this.hasSceneTabs = false;
        this.params.sceneId = "主页";
      } else {
        this.params.sceneId = "";
        this.hasSceneTabs = false;
      }
      this.getChartsData();
    },
    interactionName(n) {
      if (n && this.params.businessId == "智能设备") this.getEquipmentData(n);
      else this.getChartsData();
    },
    regionData(d) {
      if (d !== null && d !== undefined) this.getChartsData();
    },
    unitData(d) {
      if (d !== null && d !== undefined) {
        this.params.sceneId = "单栋分析";
        this.importantUnitDialog = true;
        this.getChartsData();
      } else {
        this.params.sceneId = "";
      }
    },
    interestData(d) {
      if (d !== null && d !== undefined) this.detailDialog = true;
    },
    AIAlarmData(d) {
      console.log("监控报警", d);
      if (d !== null && d !== undefined) this.alarmDialog = true;
    },
    dalanData(d) {
      if (d !== null && d !== undefined) {
        this.params.businessId = "大兰货柜";
        this.dalanDialog = true;
        chartApi.getChart({ ...this.params, line: 3 }).then(res => {
          this.charts3 = res.data.filter(c => !c.child);
          mergeCongig(this.charts3);
          this.panel3 = true;
        });
        chartApi.getChart({ ...this.params, line: 4 }).then(res => {
          this.charts4 = res.data.filter(c => !c.child);
          mergeCongig(this.charts4);
          this.panel4 = true;
        });
      }
    },
    equipmentData(d) {
      if (d !== null && d !== undefined && d.name !== "" && !d.chartOnly) {
        this.closeAllDialog();
        if (d.name == "智慧wifi") {
          this.wifiDialog = true;
        } else if (d.name == "魔镜") {
          this.mirrorDialog = true;
        } else if (d.name == "智慧灯杆") {
          this.lightDialog = true;
        } else if (d.name == "户外一体化巡检清洁机器人") {
          this.patrolDialog = true;
        } else if (d.name == "AI智能测温设备-猫头鹰") {
          this.owlDialog = true;
        } else if (d.name == "AI智能零售货柜") {
          this.dalanDialog = true;
        }
      }
    },
    cameraData(d) {
      if (d !== null && d !== undefined) this.flowDialog = true;
    },
    pipeData(d) {
      if (d !== null && d !== undefined) this.pipeDialog = true;
    }
  },
  mounted() {
    this.getChartsData();
  }
};
</script>

<style lang="scss" scoped>
.top-panel {
  position: absolute;
  top: 11.2rem;
  height: 11.2rem;
  width: 96.2rem;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  justify-content: center;
}
.charts-panel {
  position: absolute;
  top: 11.2rem;
  height: 90rem;
  width: 41.2rem;
}
.panel1 {
  left: 32px;
}
.panel2 {
  left: calc(40rem + 32px);
}
.panel3 {
  right: calc(40rem + 32px);
}
.panel4 {
  right: 32px;
}
.win {
  // margin-left: 1.6rem;
  // margin-top: 1.6rem;
  margin: 0.8rem;
}
.scence {
  position: absolute;
  bottom: calc(100px + 8rem);
  width: 300px;
  height: 50px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  color: black;
  justify-content: space-around;
}
</style>
