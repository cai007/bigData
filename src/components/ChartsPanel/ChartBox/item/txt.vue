<template>
  <!-- <div style="width:100%;height:100%;" class="row">
    <div
      v-for="(t, i) in data.data"
      :key="'txt' + i"
      class="txt-box"
      :class="active == i ? 'active' : ''"
      @click="txtClick(i)"
    >
      <SvgIcon :icon="t.icon" class="txt-icon"></SvgIcon>
      <div class="txt-name">{{ t.name }}</div>
    </div>
  </div> -->
  <q-card
    class="my-card"
    square
    flat
    style="background-color:transparent;height:100%"
  >
    <q-card-section>
      <div class="text-h4" style="font-size:2.8rem">{{ data.data.title }}</div>
    </q-card-section>
    <q-card-section style="font-size:1.4rem">
      {{ data.data.info }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "txt",
  data() {
    return {
      active: 0
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    txtClick(i) {
      this.active = i;
    }
  }
};
</script>

<style lang="scss" scoped>
.txt-box {
  height: 8.8rem;
  width: 11.5rem;
  text-align: center;
  opacity: 0.4;
  cursor: pointer;
  &.active {
    opacity: 1;
    background: #0054ff;
    box-shadow: 0px 0px 30px 0px rgba(0, 83, 255, 0.9);
  }
}
.txt-icon {
  font-size: 3.2rem;
  margin: 1.2rem;
}
.txt-name {
  font-size: 1.4rem;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  color: #ffffff;
  //   line-height: 24px;
}
</style>
