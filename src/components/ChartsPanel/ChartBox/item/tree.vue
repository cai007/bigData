<template>
  <q-scroll-area
    :thumb-style="thumbStyle"
    style="width: 100%; height: 100%; padding-top: 1.2rem;padding-bottom: 2rem;"
  >
    <q-card style="background:transparent;" class="no-shadow">
      <q-tree
        class="c-tree"
        style="font-size:1.4rem"
        :nodes="menus"
        ref="tree"
        default-expand-all
        tick-strategy="leaf"
        :selected.sync="selected"
        :ticked.sync="tickedMenu"
        label-key="label"
        node-key="value"
      /> </q-card
  ></q-scroll-area>
</template>

<script>
import { sendMessageToMap } from "@/utils/index.js";
let vd_index = 0;
export default {
  name: "tree",
  data() {
    return {
      timer: null,
      selected: "",
      thumbStyle: {
        right: "0.2rem",
        borderRadius: "0.5ren",
        backgroundColor: "#027be3",
        width: "0.5rem",
        opacity: 0.75
      },
      oprRadio: ""
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    menus: {
      get() {
        return this.data.data.menus || [];
      },
      set(v) {
        this.data.data.menus = v;
      }
    },
    tickedMenu: {
      get() {
        return this.data.data.tickedMenu || [];
      },
      set(v) {
        this.data.data.tickedMenu = v;
      }
    }
  },
  watch: {
    tickedMenu(t) {
      console.log("勾选", { tickedMenu: t });
      sendMessageToMap(this.data.data.type, { tickedMenu: t });
    },
    selected(s) {
      console.log("选中", s);
      // [{label:"鹰眼设备",value:"398"},{label:"智慧wifi",value:"235"},{label:"客流设备",value:"180"},{label:"魔镜",value:"181"},{label:"智慧广告牌",value:"81"},{label:"户外一体化巡检清洁机器人",value:"381"},{label:"智慧灯杆",value:"182"},{label:"灯杆广告机",value:"82"},{label:"AI智能测温设备-猫头鹰",value:"382"},{label:"AI智能零售货柜",value:"284"},{label:"文创柜-IP小说",value:"83"},{label:"智慧公厕",value:"383"},{label:"AR试衣镜",value:"84"},{label:"垃圾满溢传感器",value:"384"},{label:"智慧升降桩",value:"184"}
      let n = "";
      if (this.data.businessId == "智能设备") {
        if (s == 235) {
          n = "智慧wifi";
        } else if (s == 181) {
          n = "魔镜";
        } else if (s == 381) {
          n = "户外一体化巡检清洁机器人";
        } else if (s == 382) {
          n = "AI智能测温设备-猫头鹰";
        } else if (s == 284) {
          n = "AI智能零售货柜";
        } else if (s == 182) {
          n = "智慧灯杆";
        }
        if (n)
          this.$store.commit("SET_MAP_DATA", {
            Type: "select_equipment",
            Message: {
              name: n,
              chartOnly: true
            }
          });
      }
    }
  },
  methods: {
    changeVideos() {
      if (vd_index > this.menus.length - 3) vd_index = 0;
      let vds_select = this.menus.filter((v, i) => {
        return i < vd_index + 3 && i >= vd_index;
      });
      vd_index += 3;
      console.log("监控轮询：", vds_select);
      sendMessageToMap("AIPatrol", { tickedMenu: vds_select });
    }
  },
  mounted() {
    if (this.data.title == "Ai设备分布") {
      this.changeVideos();
      this.timer = setInterval(this.changeVideos, 10000);
    }
    //默认发送
    sendMessageToMap(this.data.data.type, { tickedMenu: this.tickedMenu });
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
</style>
