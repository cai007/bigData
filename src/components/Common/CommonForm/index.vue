<template>
  <div class="common-box scroll">
    <q-form @submit="submit" class="q-col-gutter-lg row form-container ">
      <div
        v-for="(f, i) in formProp"
        :key="'prop' + i"
        :class="!f.lineWidth ? 'col-6' : `col-${f.lineWidth}`"
      >
        <div v-if="f.type !== 'p'" class="porp-label">{{ f.label }}</div>
        <p class="prop-p" v-if="f.type == 'p'">{{ f.label }}：{{ f.value }}</p>
        <q-select
          v-else-if="f.type == 'select'"
          v-model="f.value"
          class="input-main"
          :options="f.data"
          emit-value
          map-options
          @input="selectChange(f.value, f.label)"
          v-select-placeholder="f.label || ''"
          square
          dense
          outlined
          :rules="f.warning ? [val => !!val || '请选择' + f.label] : null"
        />
        <q-select
          v-else-if="f.type == 'select-cascader'"
          v-select-placeholder="f.label || ''"
          outlined
          ref="cascader"
          multiple
          :value="f.value"
          square
          dense
          class="input-main"
          :rules="f.warning ? [val => !!val || '请选择' + f.label] : null"
        >
          <Cascader
            :data="f.data"
            :options="casOptions"
            @change="onChange($event, f)"
          />
        </q-select>
        <q-toggle
          v-else-if="f.type == 'toggle'"
          style="margin-top:10px;"
          v-model="f.value"
          :false-value="0"
          :true-value="1"
          color="positive"
          dense
          outlined
        />
        <div v-else-if="f.type == 'radio'" class="q-gutter-sm">
          <q-radio
            v-for="(r, i) in f.data"
            v-model="f.value"
            :val="r.value"
            :label="r.label"
            :key="'radio' + i"
          />
        </div>
        <div v-else-if="f.type == 'checkbox'" class="q-gutter-sm">
          <q-checkbox
            v-for="(c, i) in f.data"
            v-model="c.value"
            :label="c.label"
            :key="'checkbox' + i"
          />
        </div>
        <Uploader v-else-if="f.type == 'file'" :list.sync="f.data"></Uploader>
        <DatePicker
          v-else-if="f.type == 'dateRange'"
          :label="f.label"
          :date.sync="f.data"
          :range="f.range"
        ></DatePicker>
        <q-input
          v-else-if="f.type == 'date'"
          v-model="f.value"
          square
          outlined
          dense
          :placeholder="f.label"
          clearable
          class="input-main"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="f.value">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="设置" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <slot v-else-if="f.type == 'slot'" :name="f.prop"></slot>
        <q-input
          v-else-if="f.type == 'textarea'"
          class="template-textarea"
          v-model="f.value"
          :placeholder="f.placeholder || '请输入' + f.label"
          type="textarea"
          square
          :disable="f.disable || false"
          outlined
          :rules="f.warning ? [val => !!val || f.label + '不能为空'] : null"
          style="width:100%;height:500px; "
        />
        <q-input
          v-else
          v-model="f.value"
          :placeholder="f.placeholder || '请输入' + f.label"
          :type="f.t"
          square
          :disable="f.disable || false"
          dense
          outlined
          :rules="f.warning ? [val => !!val || f.label + '不能为空'] : null"
          class="input-main"
        />
        <q-separator v-if="f.underlined" />
      </div>

      <div class="row items-center col-12 fixed" style="bottom:50px">
        <q-btn
          unelevated
          size="md"
          class="q-mr-md no-border-radius"
          type="submit"
          color="primary"
          label="提交信息"
        ></q-btn>
        <q-btn
          size="md"
          unelevated
          color="bg-sub"
          text-color="sub"
          class="bd-sub5 no-border-radius"
          label="返回"
          @click="cancel"
        ></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import "cesium-deepblue/cascader";
import Uploader from "components/Uploader/index.vue";
import DatePicker from "@/components/DatePicker";
import dayjs from "dayjs";
export default {
  data() {
    return {
      params: { businessId: "", sceneId: "" },
      inputValue: "",
      options: [
        { id: 0, name: "普通用户" },
        { id: 1, name: "管理员" },
        { id: 2, name: "超级管理员" }
      ],
      casOptions: {
        autoClose: false,
        check: true,
        leaf: false
      }
    };
  },
  props: {
    formProp: {
      typeof: Object,
      require: true
    }
  },
  components: { Uploader, DatePicker },
  methods: {
    submit() {
      console.log("formProp", this.formProp);
      let form = {};
      this.formProp.forEach(e => {
        if (e.type == "checkbox") {
          form[e.prop] = e.data;
        } else if (e.type == "file") {
          if (e.data.length == 0) return;
          if (e.data.length > 1) form[e.prop] = e.data;
          else form[e.prop] = e.data[0].url;
        } else if (e.type == "date") {
          form[e.prop] = dayjs(e.value).valueOf();
        } else {
          form[e.prop] = e.value;
        }
      });
      console.log("form提交", form);
      this.$emit("submit", form);
    },
    cancel() {
      this.$emit("cancel");
    },
    onChange(e, f) {
      f.value = e;
    },
    selectChange(v, l) {
      // console.log("v-----", l);
      if (l == "业务名称") {
        this.params.businessId = v;
        this.$emit("selectChange", this.params);
      } else if (l == "场景") {
        this.params.sceneId = v;
        this.$emit("selectChange", this.params);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.common-box {
  padding: 32px;
  height: calc(100% - 96px);
  width: 100%;
}
.porp-label {
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  line-height: 28px;
}
.prop-p {
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  margin-top: 40px;
}

.q-textarea .q-field__contro {
  height: 500px !important;
}
</style>
