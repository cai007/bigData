<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :width="'85%'"
    :title="'防疫预案'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <VideoPlayer :src="url" style="height:100%;width:100%"></VideoPlayer>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import "cesium-deepblue/video-player";
export default {
  name: "detail",
  data() {
    return {
      url: "https://wuhan.deepblueai.com/dt/md/feverPlan.mp4"
    };
  },
  components: {
    DialogDraggable
  },
  props: {
    detailDialog: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    }
  }
};
</script>

<style lang="scss" scoped></style>
