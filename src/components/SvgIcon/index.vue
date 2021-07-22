<template>
  <q-icon
    v-if="isExternal"
    :class="customClass"
    :name="`img:${icon}`"
    :color="color"
    :size="size"
  >
  </q-icon>
  <q-icon v-else :color="color" :size="size">
    <svg :class="icon" aria-hidden="true">
      <use :href="iconName" />
    </svg>
  </q-icon>
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    isExternal() {
      return isExternal(this.icon);
    },
    iconName() {
      return `#${this.icon}`;
    }
  }
};
</script>
