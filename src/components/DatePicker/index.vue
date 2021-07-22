<template>
  <q-input
    v-model="dateStr"
    square
    outlined
    dense
    :placeholder="label"
    clearable
    class="input-main"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          @before-show="beforeShow"
          @before-hide="beforeHide"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="proxyDate" range>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="设置" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
import dayjs from "dayjs";
export default {
  props: {
    date: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dateStr: "",
      proxyDate: ""
    };
  },
  created() {
    this.init(this.date);
  },
  watch: {
    date: {
      handler(newValue) {
        this.init(newValue);
      },
      deep: true
    },
    dateStr(value) {
      if (!value) {
        this.$emit("update:date", []);
      }
    }
  },
  methods: {
    init(date) {
      if (date && date.length > 1) {
        let startStr = dayjs(date[0]).format("YYYY/MM/DD");
        let endStr = dayjs(date[1]).format("YYYY/MM/DD");
        this.dateStr = startStr + "至" + endStr;
        this.proxyDate = { from: startStr, to: endStr };
      } else {
        this.dateStr = "";
        this.proxyDate = {};
      }
    },
    beforeShow() {},
    beforeHide() {
      let { from, to } = this.proxyDate;
      if (from && to) {
        this.dateStr = from + "至" + to;
        this.$emit("update:date", [
          dayjs(from + " 00:00:00").valueOf(),
          dayjs(to + " 23:59:59").valueOf()
        ]);
      } else this.dateStr = "";
    }
  }
};
</script>

<style scoped></style>
