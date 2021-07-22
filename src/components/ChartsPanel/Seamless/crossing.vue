<template>
  <Seamless :list="list" style="padding:1.2rem;overflow:hidden;">
    <q-list class="no-shadow">
      <div
        class="row no-wrap items-center justify-around list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <q-img
          :src="isExternal(item.img) ? item.img : baseUrl + item.img"
          class="img"
          contain
          spinner-color="primary"
        >
        </q-img>
        <div>
          {{ item.title }}
        </div>
      </div>
    </q-list>
  </Seamless>
</template>
<script>
import Seamless from "./index.vue";
import { isExternal } from "@/utils/validate.js";
export default {
  name: "Crossing",
  components: { Seamless },
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    isExternal(url) {
      return isExternal(url);
    }
  }
};
</script>
<style lang="scss" scoped>
.list-item {
  padding: 0.2rem;
  font-size: 1.4rem;
  .img {
    width: 5rem;
  }
}
</style>
