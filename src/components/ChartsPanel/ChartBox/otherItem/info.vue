<template>
  <div class="row" style="height:100%;padding-top:1.2rem">
    <div style="width:50%" v-for="(c, i) in data.children" :key="'chart' + i">
      <Num
        :data="data.children[i]"
        :title="data.title"
        :style="data.titleStyle"
        class="pie-num1"
        style="background-color:transparent;text-align:center;"
      ></Num>
    </div>
  </div>
</template>

<script>
import Num from "../item/num";
export default {
  name: "info",
  components: { Num },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
