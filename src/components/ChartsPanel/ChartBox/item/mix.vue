<template>
  <div
    v-if="data.chart == 'mix4'"
    class="row"
    style="height:100%;padding-top:1.2rem"
  >
    <div style="width:50%" v-for="(c, i) in data.children" :key="'chart' + i">
      <component
        :is="c.chart.slice(0, 1).toUpperCase() + c.chart.slice(1, 3)"
        :data="c"
      />
    </div>
  </div>
  <div v-else class="column" style="height:100%;padding-top:1.2rem">
    <div
      class="mix-panel"
      :style="
        !data.split
          ? 'height:' + 100 / data.children.length + '%'
          : 'height:' + data.split[i] + '%'
      "
      v-for="(c, i) in data.children"
      :key="'chart' + i"
    >
      <component
        :is="c.chart.slice(0, 1).toUpperCase() + c.chart.slice(1, 3)"
        :data="c"
      />
      <div v-if="i !== data.children.length - 1" class="bottom-line"></div>
    </div>
  </div>
</template>

<script>
import Num from "./num";
import Bar from "./bar";
import Pie from "./pie";
import Lin from "./lin";
import Vid from "../otherItem/cvideo";
import Inf from "../otherItem/info";

export default {
  name: "mix",
  components: { Num, Bar, Pie, Lin, Vid, Inf },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-line {
  width: 36rem;
  height: 0.1rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  bottom: 4rem;
}
.mix-panel {
  padding-bottom: 2.4rem;
}
</style>
