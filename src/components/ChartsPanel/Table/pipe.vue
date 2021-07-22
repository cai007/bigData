<template>
  <div>
    <q-card-section style="font-size:1.8rem">
      <label for="销售情况">属性信息</label>
      <div class="row box">
        <div>
          <label for="今日销售数">名称</label>
          <span class="num">{{ info.name }}</span>
        </div>
        <div>
          <label for="本月销售数">材质</label
          ><span class="num">{{ info.material }}</span>
        </div>
      </div>
      <div class="row box">
        <div>
          <label for="今日销售额">类型</label
          ><span class="num">{{ info.typeName }}</span>
        </div>
        <div>
          <label for="本月销售额">安装人</label
          ><span class="num">{{ info.installer }}</span>
        </div>
      </div>
      <div class="row box">
        <div>
          <label for="今日销售额">联系电话</label
          ><span class="num">{{ info.tel }}</span>
        </div>
        <div>
          <label for="本月销售额">直径</label
          ><span class="num">{{ info.diameter }}</span>
        </div>
      </div>
      <div class="row box">
        <div>
          <label for="今日销售额">纬度</label
          ><span class="num">{{ info.lat }}</span>
        </div>
        <div>
          <label for="本月销售额">经度</label
          ><span class="num">{{ info.lng }}</span>
        </div>
      </div>
      <div class="row box">
        <div>
          <label for="今日销售额">纬度</label
          ><span class="num">{{ info.lat }}</span>
        </div>
        <div>
          <label for="本月销售额">埋深</label
          ><span class="num">{{ info.depth }}</span>
        </div>
      </div>
      <div class="row box">
        <div>
          <label for="今日销售额">断面尺寸</label
          ><span class="num">{{ info.size }}</span>
        </div>
        <div>
          <label for="本月销售额">备注</label
          ><span class="num">{{ info.remark }}</span>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-img :src="info.img" class="img" spinner-color="primary">
        <!-- <Previewer :index="0" :list="[{ url: info.img }]" /> -->
      </q-img>
    </q-card-section>
  </div>
</template>
<script>
import { isExternal } from "@/utils/validate.js";
// import Previewer from "@/components/Previewer/index.vue";
export default {
  name: "Pipe",
  // components: { Previewer },
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    }
  },
  data() {
    return {
      info: {
        name: "强电装置",
        material: "铜质电缆",
        typeName: "强电",
        installer: "陈军",
        tel: "13512347890",
        lat: "30.58453253",
        lng: "114.28152345",
        diameter: "2(m)",
        depth: "3(m)",
        size: "1500(mm)",
        remark: "",
        img: require("@/assets/img/logos/pipe.png")
      }
    };
  },
  methods: {
    isExternal(url) {
      return isExternal(url);
    }
  },
  mounted() {
    console.log("---------", this.info.img);
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
}
.box {
  padding: 0 10%;
  div {
    width: 50%;
  }
}
.num {
  margin-left: 1.2rem;
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
