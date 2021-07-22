<template>
  <div class="img-action">
    <q-btn
      v-if="list.length > 1 && move"
      :disabled="index <= 0"
      class="img-btn"
      flat
      round
      size="sm"
      icon="arrow_back"
      @click="handleBack(index)"
    ></q-btn>
    <q-btn
      v-if="list.length > 1 && move"
      :disabled="index >= list.length - 1"
      class="img-btn"
      flat
      round
      size="sm"
      icon="arrow_forward"
      @click="handleForward(index)"
    ></q-btn>
    <q-btn
      class="img-btn"
      flat
      round
      size="sm"
      icon="search"
      @click="handleView(index)"
    ></q-btn>
    <q-btn
      v-if="del"
      class="img-btn"
      flat
      round
      size="sm"
      icon="delete"
      @click="handleDel(index)"
    ></q-btn>
    <q-dialog v-model="preview">
      <q-carousel
        :dark="false"
        swipeable
        arrows
        control-color="primary"
        control-type="push"
        animated
        v-model="current"
        infinite
        style="width: 600px; height: 600px"
      >
        <template v-for="(item, i) in list">
          <q-carousel-slide
            v-if="item.url"
            :key="'slide-' + i"
            :name="i"
            class="flex flex-center"
          >
            <q-img
              :src="isExternal(item.url) ? item.url : baseUrl + item.url"
              width="100%"
              height="100%"
              contain
              spinner-color="primary"
            >
            </q-img>
          </q-carousel-slide>
        </template>
      </q-carousel>
    </q-dialog>
  </div>
</template>
<script>
import { isExternal } from "@/utils/validate.js";
export default {
  name: "Previewer",
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    index: {
      type: Number,
      require
    },
    move: {
      type: Boolean,
      default: false
    },
    del: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    }
  },
  watch: {
    list: {
      handler: function(val) {
        this.$emit("update:list", val);
      },
      deep: true
    }
  },
  data() {
    return {
      preview: false,
      current: 0,
      loading: false
    };
  },
  methods: {
    isExternal(url) {
      return isExternal(url);
    },
    handleForward(index) {
      const temp = this.list[index];
      this.$set(this.list, index, this.list[index + 1]);
      this.$set(this.list, index + 1, temp);
    },
    handleBack(index) {
      const temp = this.list[index];
      this.$set(this.list, index, this.list[index - 1]);
      this.$set(this.list, index - 1, temp);
    },
    handleDel(index) {
      this.list.splice(index, 1);
    },
    handleView(index) {
      this.current = index;
      this.preview = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.img-action {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 500ms opacity;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-wrap: wrap;
  //   flex: 1 1 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  //   font-size: 16px;
  &:hover {
    opacity: 1;
  }
  .img-btn {
    cursor: pointer;
    margin: 4px;
  }
}
</style>
