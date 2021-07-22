<template>
  <div class="row" style="height:100%;font-size:1.4rem">
    <q-img :src="info.img" class="img" contain spinner-color="primary"> </q-img>
    <div class="column card">
      <span>职务：经理</span>
      <span>姓名：{{ info.name }}</span>
      <span>电话：{{ info.tel }}</span>
    </div>
  </div>
</template>
<script>
import { isExternal } from "@/utils/validate.js";
export default {
  name: "Duty",
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    }
  },
  data() {
    return {
      info: {
        name: "张兵",
        tel: "13512347890",
        img: require("@/assets/img/shops/值班经理.png")
      }
    };
  },
  methods: {
    isExternal(url) {
      return isExternal(url);
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 15rem;
  margin-right: 0.8rem;
}
.card {
  flex: 1;
  justify-content: space-around;
  font-size: 1.8rem;
  padding: 0.8rem;
  height: 70%;
  margin-top: 10%;
}
</style>
