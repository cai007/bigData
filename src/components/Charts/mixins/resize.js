import { debounce } from "@/utils";
import { setChartFontsize } from "@/utils/index.js";
import _ from "lodash";
export default {
  data() {
    return {};
  },
  mounted() {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.formatSizeByResize();
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.__resizeHandler);
  },
  methods: {
    //barWidth
    formatSizeByResize(o) {
      // let tempOption = {};
      // if (o) tempOption = JSON.parse(JSON.stringify(o));
      // else tempOption = JSON.parse(JSON.stringify(this.options));
      let tempOption = _.cloneDeep(this.options);
      if (tempOption && tempOption.legend && tempOption.legend.itemWidth) {
        tempOption.legend.itemWidth = setChartFontsize(
          tempOption.legend.itemWidth
        );
        tempOption.legend.itemHeight = setChartFontsize(
          tempOption.legend.itemHeight
        );
        tempOption.legend.itemGap = setChartFontsize(tempOption.legend.itemGap);
      }
      this.chart.setOption(tempOption);
    }
  }
};
