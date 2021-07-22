<template>
  <div class="row business-type">
    <div
      v-for="(t, i) in scenes"
      :key="'txt' + i"
      class="txt-box"
      :class="active == t.name ? 'active' : ''"
      @click="txtClick(t.name)"
    >
      <BorderConer
        v-if="active == t.name"
        :winStyle="windowStyle"
        :borderStyle="borderStyle"
      >
        <div class="txt-name">{{ t.name }}</div>
      </BorderConer>
      <div class="txt-name" v-else>{{ t.name }}</div>
    </div>
  </div>
</template>

<script>
import { sendMessageToMap } from "@/utils/index.js";
import BorderConer from "@/components/Common/BorderCorner/index.vue";

export default {
  name: "scene",
  data() {
    return {
      windowStyle: {
        width: "11.6rem",
        height: "6.5rem",
        backgroundColor: "transparent",
        position: "relative"
      },
      borderStyle: "border:0.1rem solid #fff;width:0.4rem;height:0.4rem;",
      active: "街区整体",
      scenes: [],
      scenes0: [
        {
          id: 1,
          icon: "account",
          name: "街区整体"
        },
        {
          id: 2,
          icon: "account",
          name: "分区分析"
        }
        // {
        //   id: 3,
        //   icon: "account",
        //   name: "重点单位"
        // }
      ],
      scenes1: [
        {
          id: 1,
          icon: "account",
          name: "水"
        },
        {
          id: 2,
          icon: "account",
          name: "电"
        },
        {
          id: 3,
          icon: "account",
          name: "气"
        }
      ],
      scenes2: [
        {
          id: 1,
          icon: "account",
          name: "防疫"
        }
        // {
        //   id: 2,
        //   icon: "account",
        //   name: "人流疏散"
        // }
      ],
      scenes3: [
        {
          id: 1,
          icon: "account",
          name: "季度"
        },
        {
          id: 2,
          icon: "account",
          name: "年度"
        }
      ],
      scenes4: [
        {
          id: 1,
          icon: "account",
          name: "街区整体"
        },
        {
          id: 2,
          icon: "account",
          name: "分段分析"
        }
      ]
    };
  },
  components: { BorderConer },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    txtClick(name) {
      this.active = name;
      sendMessageToMap("scene", name);
      this.$emit("sceneClick", name);
    }
  },
  watch: {
    type(t) {
      if (t == "消费数据") {
        this.scenes = this.scenes0;
        this.active = "街区整体";
      } else if (t == "能耗数据") {
        this.scenes = this.scenes1;
        this.active = "水";
      } else if (t == "应急预案") {
        this.scenes = this.scenes2;
        this.active = "防疫";
      } else if (t == "政区数据") {
        this.scenes = this.scenes3;
        this.active = "季度";
      } else if (t == "客群画像") {
        this.scenes = this.scenes4;
        this.active = "街区整体";
      }
    }
  },
  mounted() {
    if (this.type == "消费数据") {
      this.scenes = this.scenes0;
      this.active = "街区整体";
    } else if (this.type == "能耗数据") {
      this.scenes = this.scenes1;
      this.active = "水";
    } else if (this.type == "应急预案") {
      this.scenes = this.scenes2;
      this.active = "防疫";
    } else if (this.type == "政区数据") {
      this.scenes = this.scenes3;
      this.active = "季度";
    } else if (this.type == "客群画像") {
      this.scenes = this.scenes4;
      this.active = "街区整体";
    }
  }
};
</script>

<style lang="scss" scoped>
.business-type {
  position: absolute;
  width: 36rem;
  left: 50%;
  justify-content: center;
  bottom: 12rem;
  transform: translate(-50%);
}
.txt-box {
  height: 6.4rem;
  line-height: 6.4rem;
  width: 11.5rem;
  text-align: center;
  opacity: 0.8;
  cursor: pointer;
  background: rgba(0, 26, 58);
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
