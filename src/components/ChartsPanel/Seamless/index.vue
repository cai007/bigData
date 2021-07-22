<template>
  <vue-seamless-scroll
    :data="data"
    :style="`background:transparent;overflow: hidden;height: ${height};`"
  >
    <slot />
  </vue-seamless-scroll>
</template>
<script>
export default {
  name: "Seamless",
  props: {
    data: {
      type: Array
    },
    height: {
      type: String,
      default: "100%"
    }
  }
};
</script>
