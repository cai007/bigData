<template>
  <transition
    appear
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutUp"
  >
    <q-header class="header flex items-center dark-back">
      <q-toolbar>
        <q-toolbar-title class="header-tool row items-center no-wrap">
          <div class="header-title-bg d"></div>
          <q-separator
            spaced="3rem"
            style="margin-top:2rem;margin-bottom:2rem;"
            inset
            vertical
          />
          <div class="row no-wrap">
            <div>
              <div class="caption-smart text-main">{{ interactionName }}</div>
            </div>
          </div>
        </q-toolbar-title>
        <div class="q-ml-lg">
          <div class="hd-text text-sub3">{{ date }}</div>
          <div class="hd-num text-main">{{ time }}</div>
        </div>
        <q-separator
          spaced="3rem"
          style="margin-top:2rem;margin-bottom:2rem;"
          inset
          vertical
        />
        <div class="row items-center">
          <!-- <SvgIcon :icon="weatherIcon" size="35px" class="q-ma-sm"></SvgIcon> -->
          <div class="weather-icon"></div>
          <div>
            <div class="hd-text text-sub3">WEATHER</div>
            <div class="hd-num text-main">
              {{ weather.temp || "" }} <span class="unit text-main">℃</span>
            </div>
          </div>
        </div>
        <q-separator
          spaced="3rem"
          style="margin-top:2rem;margin-bottom:2rem;"
          inset
          vertical
        />
        <div class="row q-mr-lg items-end">
          <div>
            <div class="hd-text text-sub3">AQI</div>
            <div class="hd-num text-main">{{ weather.aqi }}</div>
          </div>
          <div class="hd-rank flex flex-center q-ml-sm text-main">
            {{ quality }}
          </div>
        </div>
        <BorderConer :winStyle="windowStyle" :borderStyle="borderStyle">
          <div class="expand-btn" @click="setting">
            <SvgIcon
              icon="settings"
              size="2.4rem"
              class="text-main"
              style="margin:0.7rem"
            ></SvgIcon>
          </div>
        </BorderConer>
      </q-toolbar>
    </q-header>
  </transition>
</template>

<script>
import { isFullScreen } from "@/utils/validate";
import BorderConer from "@/components/Common/BorderCorner/index.vue";
import dayjs from "dayjs";
import axois from "axios";
export default {
  name: "slHeader",
  data() {
    return {
      weatherIcon: "sunny-day",
      weather: {
        temp: "",
        aqi: ""
      },
      quality: "",
      date: "",
      time: "",
      timer: null,
      windowStyle: {
        width: "4rem",
        height: "4rem",
        backgroundColor: "transparent",
        position: "relative",
        marginRight: "3.2rem"
      },
      borderStyle: "border:0.1rem solid #fff;width:0.2rem;height:0.2rem;"
    };
  },
  props: {
    bigData: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    interactionName() {
      return this.$store.state.bigData.interactionName;
    }
  },
  components: { BorderConer },
  methods: {
    setting(e) {
      this.$store.commit("TOGGLE_RIGHT_PANEL", true);
      e.stopPropagation(); // chromium内核
    },
    expand() {
      let that = this;
      if (!isFullScreen())
        this.$q.fullscreen
          .request()
          .then(() => {
            that.$store.commit("TOGGLE_EXPAND_PANELS", false);
          })
          .catch(err => {});
      else
        this.$q.fullscreen
          .exit()
          .then(() => {
            that.$store.commit("TOGGLE_EXPAND_PANELS", true);
          })
          .catch(err => {});
    }
  },
  mounted() {
    let that = this;
    this.timer = setInterval(() => {
      that.date = dayjs(new Date()).format("YYYY-MM-DD");
      that.time = dayjs(new Date()).format("HH:mm");
    }, 60000);
  },
  created() {
    this.$theme.darkSet(true);
    this.date = dayjs(new Date()).format("YYYY-MM-DD");
    this.time = dayjs(new Date()).format("HH:mm");
    let that = this;
    let _t = new Date().getTime();
    axois.get("/dw_api/101201401.html?_=" + _t).then(res => {
      console.log("weather:", JSON.parse(res.data.substring(11)));
      that.weather = JSON.parse(res.data.substring(11));
      if (that.weather.aqi <= 50) that.quality = "优";
      else if (that.weather.aqi <= 100) that.quality = "良";
      else that.quality = "差";
      document
        .getElementsByClassName("weather-icon")[0]
        .classList.add(that.weather.weathercode);
    });
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 11.2rem;
  background-color: transparent;
  &.dark-back {
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, 0));
  }
  &.light-back {
    background-image: linear-gradient(
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0)
    );
  }
  .header-title-bg {
    width: 41rem;
    height: 10.9rem;
    background-repeat: no-repeat;
    background-position: 0 0.4rem;
    background-size: 100% 100%;
    background-image: url(~@/assets/img/Logo-title-w.png);
  }
}
.header-tool {
  margin-left: 2rem;
  .caption-smart {
    font-size: 2rem;
    font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    line-height: 2.8rem;
  }
}

.hd-text {
  font-size: 2.2rem;
  font-family: Montserrat, Montserrat-Light;
  font-weight: 300;
  text-align: center;
  line-height: 1.9rem;
  margin-bottom: 0.7rem;
  zoom: 0.5;
}
.hd-num {
  font-size: 2.8rem;
  font-family: Montserrat, Montserrat-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 2.8rem;
  .unit {
    font-size: 2.4rem;
    font-family: Montserrat, Montserrat-Medium;
    font-weight: 500;
    text-align: left;
    line-height: 2.8rem;
  }
}
.hd-rank {
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid #999;
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 2rem;
  text-align: center;
}

.expand-btn {
  width: 3.8rem;
  height: 3.8rem;
  margin: 0.1rem;
  cursor: pointer;
  border: 0.1rem solid #fff;
}
@import "./weather.css";
.weather-icon {
  margin-right: 1.2rem;
  height: 3rem;
  width: 3rem;
  background-size: 96rem 64rem;
  background-image: url(~@/assets/img/weather.png);
}
</style>
