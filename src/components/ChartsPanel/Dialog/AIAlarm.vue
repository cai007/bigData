<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :width="'100rem'"
    :title="'报警监控'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section horizontal>
      <q-card-section style="width:40rem;padding:2.4rem;">
        <div class="row box">
          <label for="今日销售数">设备名称</label>
          <span class="num">{{ data.location }}</span>
        </div>
        <div class="row box">
          <label for="本月销售数">报警级别</label><span class="num">较重</span>
        </div>
        <div class="row box">
          <label for="本月销售数">报警类型</label
          ><span class="num">{{ data.typeName }}</span>
        </div>
        <div class="row box">
          <label for="本月销售数">报警时间</label
          ><span class="num">2021-06-15 09：43</span>
        </div>
        <div class="row box">
          <label for="本月销售数">状态</label><span class="num">未处理</span>
        </div>
        <q-img
          :src="data.imageUrl"
          :ratio="16 / 9"
          style="width:35rem"
          spinner-color="primary"
        >
          <Previewer :index="0" :list="[{ url: data.imageUrl }]" />
        </q-img>
      </q-card-section>
      <q-separator inset vertical />
      <Video
        :data="{ data }"
        :controls="true"
        style="padding:0.8rem;width:60rem;padding-top:3.2rem;"
      ></Video>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import Video from "../ChartBox/otherItem/cvideo.vue";
import Previewer from "@/components/Previewer/index.vue";
export default {
  name: "detail",
  // data() {
  //   return {
  //     vd: {
  //       data: {
  //         url: "https://wuhan.deepblueai.com/dt/md/video0.mp4",
  //         location: "中天街1号摄像头"
  //       }
  //     }
  //   };
  // },
  components: {
    DialogDraggable,
    Video,
    Previewer
  },
  props: {
    detailDialog: {
      type: Boolean,
      required: true,
      default: false
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  label {
    font-size: 1.6rem;
  }
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.num {
  opacity: 1;
  background-image: -webkit-linear-gradient(0deg, #0084ff 0%, #00ccff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  font-family: Montserrat, Montserrat-Regular;
  font-weight: 400;
  text-shadow: 2px 2px 20px #0054ff;
}
</style>
