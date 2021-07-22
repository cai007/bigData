<template>
  <BorderConer :winStyle="windowStyle" v-show="show">
    <div class="wrapper">
      <div v-if="title" class="wrapper-header">
        <q-toolbar class="row">
          <q-toolbar-title>
            {{ title }}
          </q-toolbar-title>
          <!-- <q-btn
            v-if="expandable"
            color="bg-main"
            class="q-mr-md"
            @click="expand"
          >
            <SvgIcon
              flat
              icon="exit-fullscreen"
              color="bg-main"
              size="12px"
              class="text-main"
            ></SvgIcon>
          </q-btn> -->
          <q-btn
            v-if="closeable"
            color="transparent"
            @click="close"
            class="q-mr-sm"
            unelevated
          >
            <SvgIcon
              flat
              icon="close-small"
              color="bg-main"
              size="12px"
              class="text-main"
            ></SvgIcon>
          </q-btn>
        </q-toolbar>
      </div>
      <slot></slot>
    </div>
  </BorderConer>
</template>
<script>
import BorderConer from "../BorderCorner/index.vue";
export default {
  name: "wrapper",
  data() {
    return {
      show: true
    };
  },
  props: {
    windowStyle: {
      type: Object,
      default: () => {} //eslint规则
    },
    title: {
      type: String,
      required: false
    },
    unit: {
      type: String,
      default: ""
    },
    chart: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    expandable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BorderConer
  },
  methods: {
    close() {
      // this.$emit("close");
      this.show = false;
    },
    expand() {
      this.$emit("expand");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  .wrapper-header {
    width: 100%;
    height: 3.8rem;
    border-radius: 0px 0px 12px 12px;
    display: flex;

    .wrapper-title {
      font-size: 1.4rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Bold;
      font-weight: 700;
      text-align: left;
      color: #ffffff;
      line-height: 2.4rem;
    }
    .unit-class {
      opacity: 0.4;
      font-size: 14px;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 24px;
    }
  }
}
</style>
