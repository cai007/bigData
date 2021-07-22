import { Dark, colors } from "quasar";
export default class Theme {
  constructor() {
    this._init();
  }

  _init() {
    colors.setBrand("bgMainDark", "#12151a");
    colors.setBrand("bgSubDark", "#2A3038");
    colors.setBrand("textMainDark", "#ffffff");
    colors.setBrand("textSub1Dark", "#ececec");
    colors.setBrand("textSub2Dark", "#c3c3c3");
    colors.setBrand("textSub3Dark", "#aeafaf");
    colors.setBrand("textSub4Dark", "#a4a4a4");
    colors.setBrand("bdSub5Dark", "#ffffff33");
    colors.setBrand("bgOpacity05Light", colors.changeAlpha("#000", 0.05));
    colors.setBrand("textOpacity40Light", colors.changeAlpha("#000", 0.4));
    colors.setBrand("textOpacity60Light", colors.changeAlpha("#000", 0.6));
    colors.setBrand("bgMainLight", "#f3faff");
    colors.setBrand("bgSubLight", "#DBE2E7");
    colors.setBrand("textMainLight", "#060606");
    colors.setBrand("textSub1Light", "#191919");
    colors.setBrand("textSub2Light", "#5C5C5C");
    colors.setBrand("textSub3Light", "#7B7B7B");
    colors.setBrand("textSub4Light", "#8A8A8A");
    colors.setBrand("bdSub5Light", "#0000001a");
    colors.setBrand("bgOpacity05Dark", colors.changeAlpha("#ffffff", 0.05));
    colors.setBrand("textOpacity40Dark", colors.changeAlpha("#ffffff", 0.4));
    colors.setBrand("textOpacity60Dark", colors.changeAlpha("#ffffff", 0.6));
  }
  /**
   * 是否处于暗色模式
   * @return Boolean
   */
  isDark() {
    return Dark.isActive;
  }
  /**
   * 是否处于暗色模式
   * @param toggle:Boolean 开启/关闭
   */
  darkSet(toggle) {
    Dark.set(toggle);
  }
  /**
   * 切换暗色模式
   */
  darkToggle() {
    Dark.toggle();
  }

  /**
   * 更改主题
   * @param theme:Object 颜色key/value
   */
  setTheme(theme) {
    for (const key in theme) {
      if (Object.hasOwnProperty.call(theme, key)) {
        const value = theme[key];
        colors.setBrand(key, value);
      }
    }
  }
  /**
   * 获取当前主题色
   * @return Object
   */
  getTheme() {
    return {
      primary: colors.getBrand("primary"),
      bgMain: colors.getBrand(`bgMain${this.isDark() ? "Dark" : "Light"}`),
      bgSub: colors.getBrand(`bgSub${this.isDark() ? "Dark" : "Light"}`),
      textMain: colors.getBrand(`textMain${this.isDark() ? "Dark" : "Light"}`),
      textSub1: colors.getBrand(`textSub1${this.isDark() ? "Dark" : "Light"}`),
      textSub2: colors.getBrand(`textSub2${this.isDark() ? "Dark" : "Light"}`),
      textSub3: colors.getBrand(`textSub3${this.isDark() ? "Dark" : "Light"}`),
      textSub4: colors.getBrand(`textSub4${this.isDark() ? "Dark" : "Light"}`),
      bdSub5: colors.getBrand(`bdSub5${this.isDark() ? "Dark" : "Light"}`)
    };
  }
  /**
   * 更改颜色
   * @param key:String 颜色key
   * @param value:String 颜色value
   */
  setColor(key, value) {
    colors.setBrand(key, value);
    if (key === "primary") {
      colors.setBrand("primaryBorder", colors.lighten(value, 50));
    }
  }
  /**
   * 获取颜色
   * @param key:String 颜色key
   * @return String
   */
  getColor(key) {
    return colors.getBrand(key);
  }
}
