<template>
  <q-dialog
    v-model="swDialog"
    square
    :seamless="seamless"
    persistent
    ref="myDialog"
    @show="onShow"
    @hide="onHide"
  >
    <q-card class="qcard" :style="position + 'width:' + width">
      <q-bar
        style="height:3.2rem;"
        class="bg-primary text-white"
        :class="draggable ? 'cursor-move' : ''"
      >
        <div style="font-size:1.8rem">{{ title }}</div>
        <q-space />
        <!-- <q-btn dense flat icon="expand" @click="expand" /> -->
        <q-btn dense flat icon="close" v-close-popup />
      </q-bar>
      <slot></slot>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "dialogDraggable",
  props: {
    seamless: { type: Boolean, default: false },
    draggable: { type: Boolean, default: true },
    modelDialog: { type: Boolean, default: false },
    title: { type: String, default: "Titulo" },
    width: {
      type: String,
      default: "60rem"
    },
    position: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      swDialog: false,
      target: null,
      nodeDragg: null
    };
  },
  watch: {
    modelDialog(val) {
      this.swDialog = val;
    }
  },

  methods: {
    expand() {
      this.target.style.width = 2000 + "px";
      this.target.style.height = 800 + "px";
    },
    onShow() {
      let dialogElements = document.getElementsByClassName("q-dialog");
      this.target = dialogElements[0].querySelector(".q-card");
      this.nodeDragg = this.target.querySelector(".q-bar");
      if (this.draggable) {
        this.nodeDragg.addEventListener("mousedown", this.onGrab);
      }

      this.$emit("onShow");
    },
    onHide() {
      if (this.draggable) {
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.onLetGo);
        this.nodeDragg.removeEventListener("mousedown", this.onGrab);
      }
      this.$emit("onHide");
    },
    onDrag(e) {
      let originalStyles = window.getComputedStyle(this.target);
      this.target.style.left =
        parseInt(originalStyles.left) + e.movementX + "px";
      this.target.style.top = parseInt(originalStyles.top) + e.movementY + "px";
    },

    onLetGo() {
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.onLetGo);
    },

    onGrab() {
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.onLetGo);
    }
  }
};
</script>

<style scoped>
.cursor-move {
  cursor: move;
}
.qcard {
  background-color: rgba(0, 26, 58, 0.8);
}
.q-dialog__inner--minimized > div {
  max-width: 5000px !important;
}
</style>
