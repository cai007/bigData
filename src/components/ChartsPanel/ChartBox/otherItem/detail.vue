<template>
  <div style="width:100%;height:100%;font-size:1.4rem">
    <label for="name">{{ data.data.label }}</label>
    <q-linear-progress size="2.5rem" :value="data.data.value" color="green">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="accent" :label="proLabel" />
      </div>
    </q-linear-progress>
    <div class="row q-my-sm">
      <label for="name">一日游平均逗留时长：</label>
      <span style="color:green">1.25小时</span>
    </div>
    <div class="row">
      <label for="name">过夜平均逗留时长：</label>
      <span style="color:#c3c3c3">17.5小时</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  computed: {
    proLabel() {
      return this.data.data.value * 100 + "%";
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
