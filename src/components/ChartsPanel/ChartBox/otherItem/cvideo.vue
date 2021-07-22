<template>
  <div style="width:100%;height:95%;font-size:1.4rem;padding-bottom:2.4rem">
    <VideoPlayer
      :src="vdUrl"
      :controls="controls"
      style="height:100%;width:100%"
    ></VideoPlayer>
    <div v-if="vdLocation">
      <q-avatar
        v-if="data.order"
        color="primary"
        size="sm"
        text-color="white"
        >{{ data.order }}</q-avatar
      >&nbsp;&nbsp;{{ vdLocation }}
    </div>
  </div>
</template>
<script>
import "cesium-deepblue/video-player";
export default {
  name: "cvideo",
  props: {
    data: {
      type: Object,
      required: true
    },
    controls: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      vdUrl: "",
      vdLocation: "",
      timer: "",
      index: 0
    };
  },
  methods: {
    changeVideos() {
      if (this.index == this.data.data.length) this.index = 0;
      this.vdUrl = this.data.data[this.index].url;
      this.vdLocation = this.data.data[this.index].location;
      this.index++;
    }
  },
  watch: {
    "data.data": {
      handler(d) {
        console.log("qiehuan", d);
        if (Array.isArray(d)) {
          this.changeVideos();
          this.timer = setInterval(this.changeVideos, 10000);
        } else {
          this.vdUrl = d.url;
        }
      },
      deep: true
    }
  },
  mounted() {
    var video = document.getElementById("video");
    video.controls = false;

    if (Array.isArray(this.data.data)) {
      this.changeVideos();
      this.timer = setInterval(this.changeVideos, 10000);
    } else {
      this.vdUrl = this.data.data.url;
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped></style>
