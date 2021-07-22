<template>
  <DialogDraggable
    :modelDialog="detailDialog"
    seamless
    :width="'100rem'"
    :title="'详情'"
    style="background-color:transparent;"
    @onHide="close"
  >
    <q-card-section horizontal>
      <q-card-section class="flex flex-center">
        <q-img style="height:12rem;width:12rem" :src="imgUrl" />
      </q-card-section>
      <q-card-section class="q-pt-md" style="width:60rem">
        <div class="q-px-md" style="font-size:2.4rem">小米授权体验店</div>
        <q-list dense class="q-pt-md">
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="place" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption style="font-size:1.8rem"
                >中天街43号东方家电大厦一层</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption style="font-size:1.8rem"
                >(0724)2220866</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="local_movies" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption style="font-size:1.8rem"
                >数码、电器</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section class="column flex-center">
        <q-btn
          unelevated
          size="sm"
          style="width:8rem;font-size:1.8rem"
          class="q-ma-sm no-border-radius"
          color="primary"
          label="VR"
        ></q-btn>
        <q-btn
          unelevated
          size="sm"
          style="width:8rem;font-size:1.8rem"
          class="q-ma-sm no-border-radius"
          color="primary"
          label="360"
        ></q-btn>
      </q-card-section>
    </q-card-section>
    <q-tabs v-model="tab" dense class="bg-grey-2 text-teal">
      <q-tab name="mails" style="font-size:2rem" label="基本信息" />
      <q-tab name="alarms" style="font-size:2rem" label="工商信息" />
      <q-tab name="movies" style="font-size:2rem" label="其他" />
    </q-tabs>
    <q-card-section horizontal class="q-ma-md">
      <q-card-section style="font-size:2rem">
        小米是一家以手机、智能硬件和IoT平台为核心的互联网公司，以智能手机、智能电视、笔记本等丰富的产品与服务。致力于让全球每个人都能享受科技带来的美好生活</q-card-section
      >
      <q-img class="col-5" :src="imgInfoUrl" />
    </q-card-section>
  </DialogDraggable>
</template>

<script>
import DialogDraggable from "@/components/Common/DialogDraggable";

export default {
  name: "detail",
  data() {
    return {
      tab: "mails",
      imgUrl: require("@/assets/img/shops/xiaomi.png"),
      imgInfoUrl: require("@/assets/img/shops/xiaomi1.png")
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
