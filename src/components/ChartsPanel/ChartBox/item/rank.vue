<template>
  <q-list dense style="width:100%;height:95%;overflow:hidden;">
    <q-item
      clickable
      dense
      v-for="(r, i) in data.data"
      :key="'rank' + i"
      class="rank-item"
      @click="rankClick(r)"
    >
      <div style="height:3.6rem;line-height:3.6rem">{{ i + 1 }}.</div>
      <!-- <q-item-section avatar>
        <q-icon color="primary" name="bluetooth" />
      </q-item-section> -->
      <q-item-section class="rank-name"
        ><q-item-label lines="1">{{ r.name }} </q-item-label></q-item-section
      >
      <q-item-section side>
        <q-item-label caption
          ><span class="good">{{ r.rankName }}：</span>
          <span class="per">{{ r.rank }}</span></q-item-label
        >
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { sendMessageToMap } from "@/utils/index.js";
export default {
  name: "rank",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    rankClick(item) {
      item.title = this.data.title;
      item.value = item.rank;
      // console.log(item);
      sendMessageToMap("floorInfo", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.rank-item:first-child {
  margin-top: 1.2rem;
}
.rank-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.rank-name {
  font-size: 1.2rem;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  .q-item__label {
    line-height: 1.5rem !important;
  }
}
.good {
  opacity: 0.4;
  font-size: 1.2rem;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  // line-height: 24px;
}
.per {
  opacity: 1;
  font-size: 1.1rem;
  font-family: Montserrat, Montserrat-Regular;
  font-weight: 400;
  text-align: right;
  color: #ffffff;
  // line-height: 24px;
}
.q-item__section--avatar {
  min-width: 0;
}
.q-list--dense > .q-item,
.q-item--dense {
  min-height: 3.6rem;
  height: 3.6rem;
  padding: 0;
}
.q-list--dense > .q-item,
.q-item--dense {
  min-height: 3.6rem;
  height: 3.6rem;
  padding: 0;
}
</style>
