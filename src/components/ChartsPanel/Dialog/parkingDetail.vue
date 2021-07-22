<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :title="'停车场详情'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section horizontal>
      <q-card-section class="flex flex-center">
        <q-img style="height:8rem;width:8rem" :src="imgUrl" />
      </q-card-section>
      <q-card-section class="q-pt-md" style="width:40rem">
        <div class="text-h4 q-px-md">中天街1号停车场</div>
        <q-list dense class="q-pt-md">
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="place" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>荆门市东宝区中天街43号</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>168656335453</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="local_movies" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>5元/小时</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section class="column flex-center">
        <q-btn
          unelevated
          size="sm"
          style="width:8rem"
          class="q-ma-sm no-border-radius"
          color="primary"
          label="VR"
        ></q-btn>
        <q-btn
          unelevated
          size="sm"
          style="width:8rem"
          class="q-ma-sm no-border-radius"
          color="primary"
          label="360"
        ></q-btn>
      </q-card-section>
    </q-card-section>
    <q-separator inset dark />
    <q-card-section class="q-ma-md">
      <label for="name">相册</label>
      <q-card-section>
        <q-img
          v-for="i in 3"
          :key="'img' + i"
          src="https://placeimg.com/500/300/nature"
          :ratio="1"
          style="height: 7.6rem; width: 7.6rem;margin-right:2rem;"
          spinner-color="primary"
        >
          <Previewer
            :index="i"
            :list="[
              { url: 'https://placeimg.com/500/300/nature' },
              { url: 'https://placeimg.com/500/300/nature' },
              { url: 'https://placeimg.com/500/300/nature' }
            ]"
          />
        </q-img>
      </q-card-section>
      <!-- <label for="name">简介</label>
      <q-card-section>
        荆门市东方百货大厦，位于荆门市东宝区长宁大道、解放路和北门路交汇处。是荆门市经营规模最大、服务功能最全、社会形象最优、经济效益最好、市场竞争力最强的大型商贸流通企业之一。由荆门市东方百货大厦、东方家电大厦、东方连锁超市、东方家具广场、东方百货物流配送中心、东方百货钟祥购物广场、东方百货京山购物广场、荆门市东方百货苏畈桥有限责任公司、华业广告公司等一流骨干卖场组成的东方商业联合舰队，活跃在荆门城乡，牢牢占据荆门商业制高点。企业理念是：汇九洲精品，展东方神韵。
      </q-card-section> -->
      <!-- <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" /> -->
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";
import Previewer from "@/components/Previewer";
export default {
  name: "parking",
  data() {
    return {
      tab: "mails",
      imgUrl: require("@/assets/img/logos/东方百货.png")
    };
  },
  components: {
    DialogDraggable,
    Previewer
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
