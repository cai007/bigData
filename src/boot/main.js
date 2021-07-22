import axios from "axios"; // axios
import "@/assets/icons";
import Theme from "@/utils/theme";
import { setRem } from "@/utils/index.js";
import "cesium-deepblue/select-placeholder";
import PeachCropper from "peach-cropper";
import scroll from "vue-seamless-scroll";
import "default-passive-events";
import { exist } from "@/directive";

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
let routerInstance = void 0;
export default async ({ app, router, Vue, store }) => {
  routerInstance = router;
  // peach-cropper图片裁剪插件
  Vue.use(PeachCropper);
  Vue.use(scroll);

  // 在此设置全局变量
  Vue.prototype.$axios = axios;

  Vue.prototype.$theme = new Theme();

  // 在此设置全局路由守卫
  router.beforeEach(async (to, from, next) => {
    next();
  });
};
export { routerInstance };
