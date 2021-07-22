<template>
  <div style="width:100%;height:100%;">
    <WordCloud :defaultWords="data.data"></WordCloud>
  </div>
</template>

<script>
import WordCloud from "@/components/WordCloud";
export default {
  name: "word",
  components: { WordCloud },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./chart.scss";
</style>
