<template>
  <div class="top-menu row">
    <BorderConer
      v-for="(n, i) in bottomTabData"
      :key="'nav' + i"
      :winStyle="windowStyle"
      :borderStyle="borderStyle"
    >
      <div
        class="nav-tab column justify-end items-start"
        :class="navActive == n.label ? 'active' : ''"
        @mouseenter="show(n)"
        @click="navClick(n)"
      >
        <div class="nav-label">{{ n.label }}</div>
        <div class="nav-caption">TWINS DIGITAL</div>
        <q-menu
          v-if="n.children && hoverActive == n.label"
          v-model="showChild"
          :offset="[0, 0]"
        >
          <q-list style="min-width: 10rem">
            <q-item
              clickable
              class="child-item"
              v-for="(item, j) in n.children"
              :key="'item' + j"
              :class="childActive == item.label ? 'active' : ''"
              :style="
                item.dev
                  ? 'background-color:rgb(204,204,204);cursor:not-allowed;'
                  : ''
              "
              @click.stop="childNavClick(item, n.label)"
            >
              {{ item.label }}
            </q-item>
          </q-list>
        </q-menu>
      </div>
    </BorderConer>
  </div>
</template>

<script>
import { bottomTabData } from "./config.js";
import BorderConer from "@/components/Common/BorderCorner/index.vue";

export default {
  name: "topMenu",
  data() {
    return {
      showChild: false,
      navActive: "政区数据",
      hoverActive: "政区数据",
      childActive: "消费数据",
      bottomTabData: bottomTabData,
      windowStyle: {
        width: "14rem",
        height: "6.5rem",
        position: "relative",
        margin: "0 0.6rem",

        backgroundColor: "rgba(0,26,58,0.9)"
      },
      borderStyle:
        "border:0.1rem solid #fff;border-left:none;border-right:none;width:0.4rem;height:0.4rem;"
    };
  },
  components: { BorderConer },
  methods: {
    show(n) {
      this.showChild = true;
      this.hoverActive = n.label;
    },
    navClick(n) {
      this.navActive = n.label;
      if (this.navActive == "商业大数据") {
        this.childActive = "消费数据";
        this.$emit("menuClick", "消费数据");
      } else if (this.navActive == "客群大数据") {
        this.childActive = "客流数据";
        this.$emit("menuClick", "客流数据");
      } else if (this.navActive == "运营大数据") {
        this.childActive = "运营数据";
        this.$emit("menuClick", "运营数据");
      } else if (this.navActive == "设备设施") {
        this.childActive = "智能设备";
        this.$emit("menuClick", "智能设备");
      } else this.$emit("menuClick", n.label);
    },
    childNavClick(n, m) {
      if (n.dev) return;
      this.childActive = n.label;
      this.navActive = m;
      this.$emit("menuClick", n.label);
    },
    onItemClick(id) {
      this.$store.commit("SET_MENU_ID", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.top-menu {
  position: absolute;
  top: 3.2rem;
  width: 140rem;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  justify-content: center;
  z-index: 2000;
}
.nav-tab {
  background-color: rgba(0, 26, 58, 0.9);
  width: 14rem;
  height: 6.5rem;
  opacity: 1;

  cursor: pointer;
  color: white;
  padding-left: 2rem;
  padding-bottom: 1.2rem;
  border: 0.1rem solid #ffffff33;
  &:hover {
    background: #729beb;
  }
  &.active {
    background: #0054ff;
    box-shadow: 0px 0px 30px 0px rgba(0, 83, 255, 0.9);
  }
  .nav-label {
    height: 1.4rem;
    font-size: 1.8rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    line-height: 1.4rem;
  }
  .nav-caption {
    margin-top: 0.8rem;
    white-space: nowrap;
    opacity: 0.4;
    zoom: 0.5;
    font-size: 1.6rem;
    font-family: Roboto, Roboto-Regular;
    font-weight: 400;
  }
}

.child-item {
  width: 14rem;
  height: 6rem;
  padding-top: 1.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  padding-left: 3rem;
  &.active {
    background: #0054ff;
    box-shadow: 0px 0px 30px 0px rgba(0, 83, 255, 0.9);
  }
}
</style>
