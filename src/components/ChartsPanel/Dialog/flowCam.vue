<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'客流监控'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section>
      <Video :data="{ data }" style="padding-top:2rem"></Video>
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import Video from "../ChartBox/otherItem/cvideo.vue";
export default {
  name: "flowCam",
  // data() {
  // return {
  //   vd: {
  //     data: {
  //       url: "1",
  //       location: "中天街1号摄像头"
  //     }
  //   }
  // };
  // },
  components: {
    DialogDraggable,
    Video
  },
  props: {
    detailDialog: {
      type: Boolean,
      required: true,
      default: false
    },
    data: {
      type: Object,
      required: true
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
  display: flex;
  justify-content: space-between;
}
.num {
  opacity: 1;
  background-image: -webkit-linear-gradient(0deg, #0084ff 0%, #00ccff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  font-family: Montserrat, Montserrat-Regular;
  font-weight: 400;
  text-shadow: 2px 2px 20px #0054ff;
}
</style>
