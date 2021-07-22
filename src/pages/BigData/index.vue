<template>
  <q-layout view="lHr LpR lFf" class="layout">
    <SlHeader :bigData="true"></SlHeader>
    <Menu @menuClick="menuClick"></Menu>
    <Settings v-show="rightShow"></Settings>
    <q-page-container class="container" v-if="containerShow">
      <ChartsPanel :menuName="menuName"></ChartsPanel>
    </q-page-container>
  </q-layout>
</template>

<script>
import SlHeader from "@/components/SlHeader/index.vue";
import Settings from "@/components/Settings/index.vue";
import Menu from "./Menu";
import { debounce } from "@/utils";
import { dom } from "quasar";
const { width } = dom;
import ChartsPanel from "@/components/ChartsPanel/index";
import { sendMessageToMap } from "@/utils/index.js";

export default {
  name: "MainLayout",
  data() {
    return {
      containerShow: true,
      menuShow: false,
      dialog: false,
      menuName: "" //menu名称
    };
  },
  components: {
    SlHeader,
    Settings,
    Menu,
    ChartsPanel
  },
  computed: {
    rightShow() {
      return this.$store.state.bigData.rightShow;
    }
  },
  methods: {
    menuClick(name) {
      // this.containerShow = false;
      console.log("business", name);
      sendMessageToMap("business", name);
      this.menuName = name;
      // setTimeout(() => {
      //   this.containerShow = true;
      // }, 1000);
    },
    listenFromMap() {
      let that = this;
      //接收C#端消息
      if (window.vuplex) {
        addMessageListener();
      } else {
        window.addEventListener("vuplexready", addMessageListener);
      }
      function addMessageListener() {
        window.vuplex.addEventListener("message", function(event) {
          let json = event.data;
          that.$store.commit("SET_MAP_DATA", JSON.parse(json));
        });
      }
    }
  },
  mounted() {
    this.menuShow =
      width(document.getElementsByClassName("layout")[0]) > 2800 ? true : false;
    this.__resizeHandler = debounce(() => {
      this.menuShow =
        width(document.getElementsByClassName("layout")[0]) > 2800
          ? true
          : false;
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);

    document
      .getElementsByClassName("layout")[0]
      .addEventListener("click", event => {
        this.$store.commit("TOGGLE_RIGHT_PANEL", false);
      });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.__resizeHandler);
  },
  created() {
    this.listenFromMap();
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  overflow: hidden;
  // background: url(~@/assets/img/black-bg.jpg);
}
.container {
  padding: 0px;
  height: 100%;
  overflow: hidden;
}
</style>
