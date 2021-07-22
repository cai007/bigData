<template>
  <transition
    appear
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <div class="q-pa-md rightPanel fixed-right">
      <q-toolbar
        class="text-main flex flex-center"
        style="padding: 1.5rem 2rem"
      >
        <q-toolbar-title style="font-size:2rem;font-weight: 700;">
          系统设置
        </q-toolbar-title>
        <q-btn flat round color="sub" icon="close" @click="close" />
      </q-toolbar>
      <q-separator />
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          贴图材质质量
        </div>
        <div class="row btn-box MeterialQuality">
          <div class="set-btn">低</div>
          <div class="set-btn">中</div>
          <div class="set-btn">高</div>
        </div>
      </div>
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          特效质量
        </div>
        <div class="row btn-box EffectQuality">
          <div class="set-btn">低</div>
          <div class="set-btn">中</div>
          <div class="set-btn">高</div>
        </div>
      </div>
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          抗锯齿质量
        </div>
        <div class="row btn-box ToothQuality">
          <div class="set-btn">低</div>
          <div class="set-btn">中</div>
          <div class="set-btn">高</div>
        </div>
      </div>
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          选择显示器
        </div>
        <div class="row screen-box ScreenSelect">
          <div class="set-btn">1</div>
          <div class="set-btn">2</div>
        </div>
      </div>
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          显示分辨率
        </div>
        <q-select
          v-model="CurrentResolution"
          :options="options"
          filled
          outlined
          square
          dense
          class="input-main-bd"
          popup-content-style="font-size:1.6rem;"
        />
      </div>
      <div class="row q-ma-md">
        <q-checkbox
          size="3rem"
          right-label
          v-model="IsWindow"
          style="font-size:1.6rem;margin:0.8rem;"
          label="窗口化"
        />
        <q-input
          v-if="IsWindow"
          v-model="InputResolution"
          type="text"
          label="请输入分辨率"
          input-style="font-size:1.6rem !important;"
          class="input-main-bd q-ml-md"
          style="width:18rem"
          mask="####×####"
          square
          outlined
          dense
          clearable
        />
      </div>
      <div class="q-ma-md">
        <div class="box-label q-my-sm">
          数据离底部高度/px
        </div>
        <q-input
          v-model="bottomDis"
          type="text"
          input-style="font-size:1.6rem"
          class="input-main-bd"
          square
          outlined
          dense
          clearable
        />
      </div>
      <div class="q-ma-md">
        <q-radio
          size="3rem"
          v-model="isDoubleLine"
          style="font-size:1.6rem"
          :val="false"
          label="单列数据"
        />
        <q-radio
          size="3rem"
          v-model="isDoubleLine"
          :val="true"
          style="font-size:1.6rem"
          label="双列数据"
        />
        <div class="items-center fixed" style="bottom:5rem;text-align:center;">
          <q-btn
            unelevated
            style="font-size:1.6rem;width:20rem;margin-bottom:2rem"
            class="no-border-radius"
            color="primary"
            label="保存设置"
            @click="submit"
          ></q-btn>
          <q-btn
            style="font-size:1.6rem;width:20rem;"
            unelevated
            color="bg-sub"
            text-color="sub"
            class="bd-sub5 no-border-radius"
            label="退出系统"
            @click="exit"
          ></q-btn>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { setRem, sendMessageToMap } from "@/utils/index.js";

export default {
  name: "settings",
  data() {
    return {
      MeterialQuality: 0,
      EffectQuality: 2,
      ToothQuality: 1,
      ScreenSelect: 0,
      IsWindow: false,
      InputResolution: "",
      bottomDis: 0, //距离底部高度
      CurrentResolution: {}, //设置分辨率
      options: []
    };
  },
  methods: {
    initSettings() {
      let that = this;
      document
        .getElementsByClassName("screen-box")[0]
        .childNodes.forEach((e, i) => {
          e.classList.remove("active");
        });

      document
        .getElementsByClassName("MeterialQuality")[0]
        .childNodes[this.MeterialQuality].classList.add("active");
      document
        .getElementsByClassName("EffectQuality")[0]
        .childNodes[this.EffectQuality].classList.add("active");
      document
        .getElementsByClassName("ToothQuality")[0]
        .childNodes[this.ToothQuality].classList.add("active");
      document
        .getElementsByClassName("ScreenSelect")[0]
        .childNodes[parseInt(this.ScreenSelect)].classList.add("active");
      document.getElementsByClassName("set-btn").forEach(btn => {
        btn.addEventListener("click", function() {
          this.parentNode.children.forEach((e, i) => {
            if (e == this) {
              that.$data[this.parentNode.classList[2]] = i;
              console.log(
                this.parentNode.classList[2],
                that.$data[this.parentNode.classList[2]]
              );
            }
            e.classList.remove("active");
          });
          this.classList.add("active");
        });
      });
    },
    submit() {
      setRem(this.bottomDis);
      this.$store.state.bigData.bottomDis = this.bottomDis;
      let settings = {
        MeterialQuality: this.MeterialQuality,
        EffectQuality: this.EffectQuality,
        ToothQuality: this.ToothQuality,
        IsWindow: this.IsWindow,
        ScreenSelect: this.ScreenSelect,
        InputResolution: this.InputResolution,
        CurrentResolution: this.CurrentResolution
      };
      console.log("--------", settings);
      this.$q.cookies.set("settings", settings, { expires: 30 });
      sendMessageToMap("settings", settings);
    },
    exit() {
      sendMessageToMap("logout", "退出系统");
    },
    close() {
      this.$store.commit("TOGGLE_RIGHT_PANEL", false);
    }
  },
  computed: {
    mapSetting() {
      return this.$store.state.bigData.mapSetting;
    },
    isDoubleLine: {
      get() {
        return this.$store.state.bigData.isDoubleLine;
      },
      set(v) {
        this.$store.state.bigData.isDoubleLine = v;
      }
    }
  },
  watch: {
    CurrentResolution(val) {
      // this.CurrentResolution = { Width: 1920.0, Height: 1080.0 };
      // console.log("this.CurrentResolution ", val);
    },
    IsWindow(val) {
      console.log("窗口化", val);
    },
    bottomDis(val) {
      console.log(val);
    },
    mapSetting: {
      handler(val) {
        if (Object.keys(val).length !== 0) {
          console.log("mapSetting", this.mapSetting);
          //从map获取初始化参数 mapSetting
          this.IsWindow = val.Windowed;
          this.CurrentResolution = val.CurrentResolution;
          this.ScreenSelect = val.ScreenSelect;
          this.CurrentResolution.label =
            parseInt(val.CurrentResolution.Width) +
            "×" +
            parseInt(val.CurrentResolution.Height);

          this.options = val.AllResolutions.map(r => {
            return {
              Height: r.Height,
              Width: r.Width,
              label: parseInt(r.Width) + "×" + parseInt(r.Height)
            };
          });
          this.initSettings();
          // console.log("this.options", this.options);
        }
      },
      deep: true
    }
  },
  mounted() {
    document
      .getElementsByClassName("rightPanel")[0]
      .addEventListener("click", event => {
        event.stopPropagation(); // chromium内核
      });

    this.initSettings();
    //从cookie中获取参数
    if (this.$q.cookies.has("settings")) {
      let settings = this.$q.cookies.get("settings");
      // console.log("cookie-settings", settings);
      this.MeterialQuality = settings.MeterialQuality;
      this.EffectQuality = settings.EffectQuality;
      this.ToothQuality = settings.ToothQuality;
      this.IsWindow = settings.IsWindow;
      this.CurrentResolution = settings.CurrentResolution;
    }

    console.log("mapSetting mounted", this.mapSetting);

    if (Object.keys(this.mapSetting).length !== 0) {
      console.log("mapSetting", this.mapSetting);
      //从map获取初始化参数 mapSetting
      this.IsWindow = this.mapSetting.Windowed;
      this.ScreenSelect = this.mapSetting.ScreenSelect;
      this.CurrentResolution = this.mapSetting.CurrentResolution;
      this.CurrentResolution.label =
        parseInt(this.mapSetting.CurrentResolution.Width) +
        "×" +
        parseInt(this.mapSetting.CurrentResolution.Height);

      this.options = this.mapSetting.AllResolutions.map(r => {
        return {
          Height: r.Height,
          Width: r.Width,
          label: parseInt(r.Width) + "×" + parseInt(r.Height)
        };
      });
      // console.log("this.options", this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
.rightPanel {
  height: 100%;
  width: 36rem;
  background-color: #24282e;
  z-index: 2001;
}
.box-label {
  font-size: 1.6rem;
}
.btn-label {
  font-size: 1.6rem !important;
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  line-height: 2.8rem;
}
.btn-box {
  width: 29.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  .set-btn {
    font-size: 1.6rem !important;
    height: 4rem;
    width: 9.8rem;
    text-align: center;
    line-height: 4rem;
    cursor: pointer;
    &.active {
      background: #0054ff;
      box-shadow: 0px 0px 20px 0px rgba(0, 83, 255, 0.4);
    }
  }
}

.screen-box {
  width: 29.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  .set-btn {
    font-size: 1.6rem !important;
    height: 10rem;
    width: 14.7rem;
    text-align: center;
    line-height: 10rem;
    cursor: pointer;
    &.active {
      background: #0054ff;
      box-shadow: 0px 0px 20px 0px rgba(0, 83, 255, 0.4);
    }
  }
}
</style>
