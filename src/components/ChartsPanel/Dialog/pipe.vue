<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'详情'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <Pipe></Pipe>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import Pipe from "../Table/pipe";
export default {
  name: "pipe",
  data() {
    return {
      tab: "mails",
      imgUrl: require("@/assets/img/logos/jdf.png")
    };
  },
  components: {
    DialogDraggable,
    Pipe
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
