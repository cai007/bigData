<template>
  <q-scroll-area
    :thumb-style="thumbStyle"
    style="width: 100%; height: 100%;margin-top:1.2rem;"
  >
    <Crossing :list="data.data"></Crossing>
  </q-scroll-area>
</template>

<script>
import Crossing from "../../Seamless/crossing.vue";
export default {
  name: "bus",
  components: { Crossing },
  data() {
    return {
      thumbStyle: {
        right: "0.2rem",
        borderRadius: "0.5ren",
        backgroundColor: "#027be3",
        width: "0.5rem",
        opacity: 0.75
      }
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
</style>
