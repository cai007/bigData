<template>
  <Seamless :list="list">
    <q-list class="no-shadow" style="background:transparent;">
      <div
        class="row no-wrap list-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <q-icon class="icon" name="location_on"></q-icon>
        <div class="column">
          <span class="title">{{ item.title }} - 公交站</span>
          <div class="row wrap">
            <span class="badge">途径公交车：</span>
            <q-badge
              v-for="(item2, index2) in item.bus"
              :key="index2"
              color="blue"
              class="badge"
            >
              {{ item2 }}
            </q-badge>
          </div>
          <span class="q-mt-xs">可点击车次查看路线详情</span>
        </div>
      </div>
    </q-list>
  </Seamless>
</template>
<script>
import Seamless from "./index.vue";
export default {
  name: "BusPath",
  components: { Seamless },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.list-item {
  font-size: 1.4rem;
  padding: 8px;
  .title {
    color: blue;
  }
  .icon {
    font-size: 24px;
    color: rgb(243, 64, 59);
  }
  .badge {
    margin-right: 4px;
    margin-top: 4px;
    font-size: 1.2rem;
  }
}
</style>
