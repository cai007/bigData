<template>
  <wordcloud
    class="word-cloud"
    style="height:100%;width:100%;cursor:pointer;"
    :data="defaultWords"
    :rotate="{ from: 0, to: 0 }"
    nameKey="name"
    valueKey="value"
    :color="myColors"
    :showTooltip="false"
    :wordClick="wordClickHandler"
  >
  </wordcloud>
</template>

<script>
// https://github.com/feifang/vue-wordcloud
import wordcloud from "vue-wordcloud";
import { sendMessageToMap } from "@/utils/index.js";

export default {
  name: "WordCloud",
  components: {
    wordcloud
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", { name: name });
      sendMessageToMap("chartData", { name: name });
    }
  },
  props: {
    defaultWords: {
      type: Array,
      required: true
    },
    myColors: {
      type: Array,
      default: () => ["#1f77b4", "#629fc9", "#94bedb", "#c9e0ef"]
    }
  }
};
</script>
