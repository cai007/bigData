import * as echarts from "echarts";
import series from "./map/map1.js";
import option2 from "./map/map2.js";
import "echarts-liquidfill";

function widthUnit(n) {
  return parseFloat(n * 20 - 1.6) + "rem";
}
function heightUnit(n) {
  return parseFloat(n * 14.8 - 1.6) + "rem";
}

const colorList = [
  "#0054ff",
  "#28cd41",
  "#5856d6",
  "#ff9500",
  "#ff2d55",
  "#a2845e",
  "#aa00ff",
  "#d50000"
];
const industryColor = {
  服饰鞋包: "#0054ff",
  日用百货: "#a2845e",
  餐饮: "#28cd41",
  生活服务: "#5856d6",
  医疗健康: "#ff9500",
  文化娱乐: "#ff2d55",
  住宿: "#aa00ff"
};

//8种边框大小
const panelBoxTypes = [
  {
    height: heightUnit(1),
    width: widthUnit(1),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(2),
    width: widthUnit(1),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(1),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(2),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(3),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(4),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(5),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(6),
    width: widthUnit(2),
    position: "relative",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(4),
    width: widthUnit(4),
    position: "absolute",
    top: "30rem",
    backgroundColor: "rgba(0,26,58,0.95)"
  },
  {
    height: heightUnit(2),
    width: widthUnit(4),
    position: "absolute",
    backgroundColor: "rgba(0,26,58,0.95)"
  }
];

/**
 * 图表种类
 * 数字类：
 *  num1:小数字，num2：大数字，num3：2倍长小数字，num4：2倍长带图，num5：大数字带图，num6：2倍高带图，num7：2倍高大数字带图，num8：2倍长带chart，num9：2倍高带chart
 * 线形图类：
 *  line1：2倍长高折线,line2:2倍长高堆叠面积图  line5:折线面积
 * 柱状图类：
 *  bar1：2倍长高chart，bar2：2倍长3倍高chart,bar3：2倍长高横向多色横向,bar4:2倍长3倍高横向，bar5:2倍长高横向圆角，bar6：2倍长高分类图，bar7：2倍长高柱状图饼图混合,bar8:2倍长高柱状图折线图混合,
 * 饼状图类：
 *  pie1：2倍长高chart,pie2:2倍长3倍高带信息，pie3：2倍长高带1子项，pie4：2倍长高两个chart
 * 漏斗图
 *  funnel：2倍长高
 * 排名图类：
 *  rnk1：2倍长高chart
 * 混合图类：
 *  mix1: 2倍长4倍高chart
 * 图片类：
 *  wrd:2倍长3倍高
 * 树类：
 *  tree:2倍长4倍高
 * 地图类：
 * map:4倍长4倍高
 */
const ChartTypes = {
  num1: {
    windowStyle: panelBoxTypes[0],
    titleStyle: {},
    dataStyle: {}
  },
  num2: {
    windowStyle: panelBoxTypes[0],
    titleStyle: {
      paddingTop: "1.2rem",
      paddingLeft: "1.2rem"
    },
    dataStyle: { fontSize: "4rem", paddingLeft: "1.2rem" }
  },
  num3: {
    windowStyle: panelBoxTypes[2],
    titleStyle: {
      justifyContent: "center"
    },
    dataStyle: {
      textAlign: "center"
    }
  },
  num4: {
    windowStyle: panelBoxTypes[2],
    titleStyle: {},
    dataStyle: {},
    iconStyle: {
      position: "absolute",
      fontSize: "6.4rem",
      right: "2.4rem",
      top: "2.4rem",
      opacity: "0.4"
    }
  },
  num5: {
    windowStyle: panelBoxTypes[0],
    titleStyle: {},
    dataStyle: { fontSize: "4rem", marginTop: "-1.2rem" },
    iconStyle: {
      position: "absolute",
      fontSize: "3.2rem",
      right: "1.2rem",
      top: "1.8rem",
      opacity: "0.4"
    }
  },
  num6: {
    windowStyle: panelBoxTypes[1],
    titleStyle: { justifyContent: "center" },
    dataStyle: { textAlign: "center" },
    iconStyle: {
      position: "absolute",
      fontSize: "6.4rem",
      right: "6rem",
      bottom: "6rem",
      opacity: "0.4"
    }
  },
  num7: {
    windowStyle: panelBoxTypes[1],
    titleStyle: { justifyContent: "center" },
    dataStyle: { fontSize: "4rem", textAlign: "center" },
    iconStyle: {
      position: "absolute",
      fontSize: "6.4rem",
      right: "6rem",
      bottom: "4.8rem",
      opacity: "0.4"
    }
  },
  num8: {
    windowStyle: panelBoxTypes[2],
    titleStyle: {},
    dataStyle: {},
    chartStyle: {
      position: "absolute",
      height: "8rem",
      width: "8rem",
      right: "2.4rem",
      top: "2.4rem"
    },
    iconStyle: {}
  },
  num9: {
    windowStyle: panelBoxTypes[1],
    titleStyle: { justifyContent: "center" },
    dataStyle: { textAlign: "center" },
    chartStyle: {
      position: "absolute",
      height: "8rem",
      width: "8rem",
      right: "5.2rem",
      bottom: "3.2rem"
    },
    iconStyle: {}
  },
  line1: {
    windowStyle: panelBoxTypes[4],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis"
      },
      legend: {
        left: "2.5rem",
        bottom: "0",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        }
      ]
    }
  },
  line2: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      // color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          show: true,
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: "#0054ff"
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //   {"#0054ff",  "#28cd41",

            //     offset: 0,
            //     color: "rgba(128, 255, 165)"
            //   },
            //   {
            //     offset: 1,
            //     color: "rgba(1, 191, 236)"
            //   }
            // ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: "#28cd41"
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //   {
            //     offset: 0,
            //     color: "rgba(0, 221, 255)"
            //   },
            //   {
            //     offset: 1,
            //     color: "rgba(77, 119, 255)"
            //   }
            // ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        }
      ]
    }
  },
  line3: {
    //不带legend
    windowStyle: panelBoxTypes[5],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis"
      },
      legend: {
        left: "2.5rem",
        bottom: "0",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "15rem",
        right: "10rem",
        bottom: "0"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        }
      ]
    }
  },
  line4: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis"
      },
      legend: {
        left: "2.5rem",
        bottom: "0",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 30,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        }
      ]
    }
  },
  line5: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          show: true,
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(128, 255, 165)"
              },
              {
                offset: 1,
                color: "rgba(1, 191, 236)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        },
        {
          type: "line",
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(0, 221, 255)"
              },
              {
                offset: 1,
                color: "rgba(77, 119, 255)"
              }
            ])
          },
          emphasis: {
            focus: "series"
          }
        }
      ]
    }
  },
  line6: {
    //带legend
    windowStyle: panelBoxTypes[5],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis"
      },
      legend: {
        left: "2.5rem",
        bottom: "1.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "75rem"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        }
      ]
    }
  },
  bar1: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: {
        type: "value",
        splitNumber: 4,
        splitLine: {
          //分隔线
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          //坐标轴文字
          color: "#FFF",
          fontSize: "1.4rem",
          formatter: "{value}"
        }
      },
      series: [
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "line"
        },
        {
          type: "line"
        },
        {
          type: "line"
        }
      ]
    }
  },
  bar2: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        left: "3.5rem",
        bottom: "15rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem",
          formatter: "{value}"
        }
      },
      series: [
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        }
      ]
    }
  },
  bar3: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      grid: {
        left: "0",
        top: "15rem",
        right: "50rem",
        bottom: "10rem",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        splitNumber: 3,
        splitLine: {
          //分隔线
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "category",
        inverse: true, //倒叙
        axisTick: {
          //坐标轴刻度
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          barWidth: 10,
          type: "bar",
          label: {
            position: "right",
            show: true
          },
          colorful: true
        }
      ]
    }
  },
  bar4: {
    windowStyle: panelBoxTypes[4],
    option: {
      backgroundColor: "transparent",
      grid: {
        left: "0",
        top: "15rem",
        right: "15rem",
        bottom: "10rem",
        containLabel: true
      },
      xAxis: {
        type: "value",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "category",

        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          colorful: true,
          type: "bar"
        }
      ]
    }
  },
  bar5: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      grid: {
        left: "0",
        top: "15rem",
        right: "15rem",
        bottom: "10rem",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisTick: {
          //坐标轴刻度
          show: false
        },
        axisLabel: {
          //坐标轴文字
          show: false,
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "category",
        axisLine: {
          show: false
        },
        axisTick: {
          //坐标轴刻度
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          showBackground: true,
          barWidth: 10,
          itemStyle: {
            borderRadius: 5
          },
          type: "bar",
          colorful: true
        }
      ]
    }
  },
  bar6: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        right: "right",
        orient: "vertical",
        bottom: "50",
        data: ["Direct", "Mail Ad", "Affiliate Ad", "Video Ad", "Search Engine"]
      },
      grid: {
        left: "3%",
        right: "4%",
        top: "3%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        axisLabel: {
          //坐标轴文字
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        type: "value"
      },
      yAxis: {
        type: "category",
        inverse: true, //是否反向坐标轴
        axisLine: {
          show: false
        },
        axisTick: {
          //坐标轴刻度
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      series: [
        {
          name: "Direct",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: "Mail Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "Affiliate Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "Video Ad",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: "Search Engine",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    }
  },
  bar7: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      title: [
        {
          text: "年龄段分布",
          left: "25%",
          top: "10rem",
          textAlign: "center",
          textStyle: {
            color: "#FFF",
            fontSize: "1.4rem"
          }
        },
        {
          text: "性别分布",
          left: "75%",
          top: "10rem",
          textAlign: "center",
          textStyle: {
            color: "#FFF",
            fontSize: "1.4rem"
          }
        }
      ],
      grid: {
        left: "0",
        top: "40rem",
        right: "15rem",
        width: "50%",
        bottom: "10rem",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        splitNumber: 3,
        splitLine: {
          //分隔线
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "category",
        axisTick: {
          //坐标轴刻度
          show: false
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "bar",
          label: {
            position: "right",
            show: true
          },
          barWidth: 10,
          colorful: true
        },
        {
          type: "pie",
          radius: [0, "30%"],
          center: ["75%", "50%"]
        }
      ]
    }
  },
  bar8: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: [
        {
          type: "value",
          splitNumber: 4,
          splitLine: {
            //分隔线
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.1)"
            }
          },
          axisLabel: {
            //坐标轴文字
            color: "#FFF",
            fontSize: "1.4rem",
            formatter: "{value}"
          }
        },
        {
          type: "value",
          splitNumber: 4,
          axisLabel: {
            formatter: "{value}%"
          }
        }
      ],
      series: [
        {
          type: "bar"
        },
        {
          type: "line",
          yAxisIndex: 1
        }
      ]
    }
  },
  bar9: {
    //4倍高排行
    windowStyle: panelBoxTypes[5],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      grid: {
        left: "0",
        top: "15rem",
        right: "15rem",
        bottom: "10rem",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        splitLine: {
          //分隔线
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      yAxis: {
        type: "category",
        axisTick: {
          //坐标轴刻度
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          barWidth: 10,
          type: "bar",
          label: {
            position: "right",
            show: true
          },
          colorful: true
        }
      ]
    }
  },
  bar10: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "40rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            formatter: "{value} "
          }
        },
        {
          type: "value",
          axisLabel: {
            formatter: "{value}%"
          },
          show: false
        }
      ],
      series: [
        {
          name: "GDP",
          type: "line",
          label: {
            show: true,
            position: "top",
            color: "#FFF",
            formatter: "{c}%"
          },
          yAxisIndex: 1
        },
        {
          name: "同比增长",
          type: "bar"
        }
      ]
    }
  },
  bar11: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        {
          type: "value",
          axisLabel: {
            formatter: "{value}% "
          }
        }
      ],
      series: [
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "bar"
        },
        {
          type: "line",
          yAxisIndex: 1
        },
        {
          type: "line",
          yAxisIndex: 1
        },
        {
          type: "line",
          yAxisIndex: 1
        }
      ]
    }
  },
  bar12: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        formatter: "{a0}: {c0}<br />{a1}: {c1}%",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        left: "2.5rem",
        bottom: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 60,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      grid: {
        containLabel: true,
        left: "10rem",
        top: "35rem",
        right: "10rem",
        bottom: "45rem"
      },
      xAxis: {
        type: "category",
        axisLabel: {
          //坐标轴文字
          fontSize: "1.4rem"
        },
        axisPointer: {
          type: "shadow"
        }
      },
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}"
          }
        },
        {
          type: "value",
          axisLabel: {
            formatter: "{value}%"
          }
        }
      ],
      series: [
        {
          name: "同比增长",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "top",
              textStyle: {
                color: "#fff"
              }
            }
          }
        },
        {
          name: "GDP",
          type: "line",
          yAxisIndex: 1
        }
      ]
    }
  },
  pie1: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        top: "center",
        right: "25rem",
        orient: "vertical",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: ["40%", "60%"],
          center: ["25%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            //高亮状态
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie",
          withPercent: true
        }
      ]
    }
  },
  pie2: {
    windowStyle: panelBoxTypes[4],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        top: "bottom",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          type: "pie",
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          radius: ["30%", "50%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false
        }
      ]
    }
  },
  pie3: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        bottom: "2.5rem",
        left: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 30,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: ["40%", "70%"],
          center: ["25%", "40%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: ["40%", "70%"],
          center: ["75%", "40%"],
          avoidLabelOverlap: false,

          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        }
      ]
    }
  },
  pie4: {
    windowStyle: panelBoxTypes[3],
    // withBottomLine: true,
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        bottom: "2.5rem",
        left: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 50,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: "30%",
          center: ["25%", "20%"],
          avoidLabelOverlap: false,
          name: "工商街区",
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: "30%",
          center: ["75%", "20%"],
          avoidLabelOverlap: false,
          name: "象山大道区",
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: "30%",
          center: ["25%", "70%"],
          name: "金虾路区",
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: "30%",
          center: ["75%", "70%"],
          avoidLabelOverlap: false,
          name: "长宁大道区",
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        }
      ]
    }
  },
  pie5: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      series: [
        {
          type: "liquidFill",
          radius: "45%",
          center: ["30%", "40%"],
          // data: [0.6, 0.6], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: "rgb(255,0,255,0.1)"
          },
          label: {
            normal: {
              // formatter: (0.6 * 100).toFixed(2) + "%",
              textStyle: {
                fontSize: "1.4rem",
                color: "#fff"
              }
            }
          },
          outline: {
            show: false
          }
        },
        {
          type: "pie",
          center: ["30%", "40%"],
          radius: ["50%", "52%"],
          hoverAnimation: false,
          data: [
            {
              name: "",
              value: 500,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              // 解决圆点过大后续部分显示明显的问题
              name: "",
              value: 4.5,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              //画剩余的刻度圆环
              name: "",
              value: 88,
              itemStyle: {
                color: "#050038"
              },
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#050038"
                }
              }
            }
          ]
        }
      ]
    }
  },
  pie6: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      title: [
        {
          x: "0",
          top: "10%",
          textStyle: {
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "100"
          }
        },
        {
          x: "50%",
          top: "10%",
          textStyle: {
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "100"
          }
        }
      ],
      series: [
        {
          type: "liquidFill",
          radius: "45%",
          center: ["25%", "50%"],
          // data: [0.6, 0.6], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: "rgb(255,0,255,0.1)"
          },
          label: {
            normal: {
              // formatter: (0.6 * 100).toFixed(2) + "%",
              textStyle: {
                fontSize: "1.4rem",
                color: "#FFF"
              }
            }
          },
          outline: {
            show: false
          }
        },
        {
          type: "liquidFill",
          radius: "45%",
          center: ["75%", "50%"],
          // data: [0.6, 0.6], // data个数代表波浪数
          backgroundStyle: {
            borderWidth: 1,
            color: "rgb(255,0,255,0.1)"
          },
          label: {
            normal: {
              // formatter: (0.6 * 100).toFixed(2) + "%",
              textStyle: {
                fontSize: "1.4rem",
                color: "#FFF"
              }
            }
          },
          outline: {
            show: false
          }
        },
        {
          type: "pie",
          center: ["75%", "50%"],
          radius: ["50%", "52%"],
          hoverAnimation: false,
          data: [
            {
              name: "",
              value: 500,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              // 解决圆点过大后续部分显示明显的问题
              name: "",
              value: 4.5,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              //画剩余的刻度圆环
              name: "",
              value: 88,
              itemStyle: {
                color: "#050038"
              },
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#050038"
                }
              }
            }
          ]
        },
        {
          type: "pie",
          center: ["25%", "50%"],
          radius: ["50%", "52%"],
          hoverAnimation: false,
          data: [
            {
              name: "",
              value: 500,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              // 解决圆点过大后续部分显示明显的问题
              name: "",
              value: 4.5,
              labelLine: {
                show: false
              },
              itemStyle: {
                color: "#5886f0"
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                }
              }
            },
            {
              //画剩余的刻度圆环
              name: "",
              value: 88,
              itemStyle: {
                color: "#050038"
              },
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              emphasis: {
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#050038"
                }
              }
            }
          ]
        }
      ]
    }
  },
  pie7: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        bottom: "2.5rem",
        left: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 20,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: ["35%", "60%"],
          center: ["25%", "40%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: ["35%", "60%"],
          center: ["75%", "40%"],
          avoidLabelOverlap: false,

          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        }
      ]
    }
  },
  pie8: {
    //四饼图
    windowStyle: panelBoxTypes[5],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        bottom: "2.5rem",
        left: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 20,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: ["25%", "40%"],
          center: ["25%", "25%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: ["25%", "40%"],
          center: ["75%", "25%"],
          avoidLabelOverlap: false,

          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: ["25%", "40%"],
          center: ["25%", "65%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        },
        {
          radius: ["25%", "40%"],
          center: ["75%", "65%"],
          avoidLabelOverlap: false,

          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        }
      ]
    }
  },
  pie9: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item"
      },
      legend: {
        bottom: "2.5rem",
        left: "2.5rem",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 5,
        textStyle: {
          color: "#FFF",
          fontSize: "1.4rem"
        }
      },
      series: [
        {
          radius: ["25%", "50%"],
          center: ["25%", "35%"],
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          type: "pie"
        },
        {
          radius: ["25%", "50%"],
          center: ["75%", "35%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inner",
            formatter: "{d}%",
            fontSize: "1.2rem",
            color: "#FFF"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "1.4rem",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          type: "pie"
        }
      ]
    }
  },
  mix1: {
    windowStyle: panelBoxTypes[5]
    // withBottomLine: true
  },
  mix2: {
    windowStyle: panelBoxTypes[4]
    // withBottomLine: true
  },
  mix3: {
    windowStyle: panelBoxTypes[7]
    // withBottomLine: true
  },
  mix4: {
    windowStyle: panelBoxTypes[3]
    // withBottomLine: true
  },
  info: {
    windowStyle: panelBoxTypes[3]
    // withBottomLine: true
  },
  ratio: {
    windowStyle: panelBoxTypes[3],
    iconStyle: {
      fontSize: "6.4rem",

      opacity: "0.4"
    }
  },
  detail: {
    windowStyle: panelBoxTypes[3]
  },
  rnk1: {
    windowStyle: panelBoxTypes[3]
  },
  funnel: {
    windowStyle: panelBoxTypes[3],
    option: {
      backgroundColor: "transparent",
      legend: {
        top: "15rem",
        right: "5rem",
        orient: "vertical",
        icon: "rect",
        itemWidth: 18,
        itemHeight: 18,
        itemGap: 10,
        textStyle: {
          fontSize: "1.4rem"
        }
        // formatter: function(name) {
        //   if (name == "高") return name + "  高于10000";
        //   else if (name == "偏高") return name + "  5000~10000";
        //   else if (name == "中") return name + "  2000~5000";
        //   else if (name == "偏低") return name + "  500~2000";
        //   else if (name == "低") return name + "  低于500";
        // }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c}"
      },
      calculable: true,
      series: [
        {
          name: "漏斗图",
          type: "funnel",
          width: "40%",
          height: "80%",
          left: "15%",
          top: "10%",
          sort: "none",
          //min的值设置为value中最小的值
          min: 10,
          emphasis: {
            label: {
              fontSize: "1.4rem",
              color: "#fff"
            }
          }
        }
      ]
    }
  },
  wrd: {
    windowStyle: panelBoxTypes[3]
    // data: require("src/assets/img/shops.png")
  },
  txt: { windowStyle: panelBoxTypes[9] },
  space: {
    //占位
    windowStyle: panelBoxTypes[3]
  },
  tree: {
    windowStyle: panelBoxTypes[5]
  },
  tree2: {
    windowStyle: panelBoxTypes[7]
  },
  map: {
    windowStyle: panelBoxTypes[8],
    option: {
      backgroundColor: "tansparent",
      // title: {
      //   text: "模拟迁徙",
      //   subtext: "数据纯属虚构",
      //   left: "center",
      //   textStyle: {
      //     color: "#fff"
      //   }
      // },
      tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
          console.log("线路：", params);
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
      legend: {
        orient: "vertical",
        top: "bottom",
        left: "right",
        data: ["北京 Top10", "上海 Top10", "广州 Top10"],
        textStyle: {
          color: "#fff"
        },
        selectedMode: "multiple"
      },
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true
            // color: "#fff"
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#323c48",
            borderColor: "#404a59"
          },
          emphasis: {
            areaColor: "#2a333d"
          }
        }
      },
      series: series
    }
  },
  map2: {
    windowStyle: panelBoxTypes[8],
    option: option2
  },
  tab: {
    windowStyle: panelBoxTypes[5]
  },
  busStation: {
    windowStyle: panelBoxTypes[5]
  },
  crossing: {
    windowStyle: panelBoxTypes[3]
  },
  dty: {
    windowStyle: panelBoxTypes[3]
  },
  pipe: {
    windowStyle: panelBoxTypes[3]
  },
  video: {
    windowStyle: panelBoxTypes[3]
  }
};

function insertDataToOption(m) {
  //解析数据，根据chart类型将对应数据组合成option
  if (
    m.data &&
    (m.chart.indexOf("map") !== -1 ||
      m.chart.indexOf("lin") !== -1 ||
      m.chart.indexOf("bar") !== -1 ||
      m.chart.indexOf("pie") !== -1 ||
      m.chart.indexOf("fun") !== -1)
  ) {
    //1、chart为num时，返回数值
    //2、chart为rak,返回数组
    //3、chart为img时，返回img地址
    //4、chart为tre时，返回数的结构数组
    //混合图时隐藏legend
    m.option.color = colorList;
    if (
      (m.chart.indexOf("pie3") !== -1 && m.child) ||
      m.chart.indexOf("line3") !== -1
    ) {
      m.option.legend.show = false;
      m.withBottomLine = false;
    }
    if (m.data.legendData)
      m.option.legend.data = JSON.parse(JSON.stringify(m.data.legendData));
    if (m.data.xAxisData)
      m.option.xAxis.data = JSON.parse(JSON.stringify(m.data.xAxisData));
    if (m.data.yAxisData)
      m.option.yAxis.data = JSON.parse(JSON.stringify(m.data.yAxisData));
    if (m.chart.indexOf("bar10") !== -1 || m.chart.indexOf("bar12") !== -1) {
      m.option.yAxis[0].name = m.data.legendData[1];
      m.option.yAxis[1].name = m.data.legendData[0];
    }

    //针对pie5的特殊处理
    if (m.chart.indexOf("pie5") !== -1) {
      let text = m.data > 0 ? "上升" : "下降";

      if (m.title.indexOf("任务") !== -1 || m.title.indexOf("巡更") !== -1)
        text = "完成";
      if (m.data < 0)
        m.option.series[1].data[0].itemStyle.color = "rgb(238,102,102)";

      m.option.series[0].data = [Math.abs(m.data), Math.abs(m.data)];
      m.option.series[0].label.normal.formatter =
        text + Math.abs(m.data * 100).toFixed(2) + "%";
      return;
    }

    //针对pie6的特殊处理
    if (m.chart.indexOf("pie6") !== -1) {
      let t0 = m.data[0].value;
      let t1 = m.data[1].value;

      m.option.series[0].data = [Math.abs(t0), Math.abs(t0)];
      m.option.title[0].text = m.data[0].label;
      m.option.series[0].label.normal.formatter =
        (m.data[0].value > 0 ? "升高" : "降低") +
        (m.data[0].value * 100).toFixed(2) +
        "%";
      m.option.series[1].data = [Math.abs(t1), Math.abs(t1)];
      m.option.title[1].text = m.data[1].label;
      m.option.series[1].label.normal.formatter =
        (m.data[1].value > 0 ? "升高" : "降低") +
        (m.data[1].value * 100).toFixed(2) +
        "%";
      return;
    }
    if (m.data.seriesData) {
      //遍历series
      m.data.seriesData.forEach((s, i) => {
        //统计纬度名称赋值
        if (
          m.data.legendData &&
          m.option.series[i] &&
          m.option.series[i].type !== "pie"
        )
          m.option.series[i].name = JSON.parse(
            JSON.stringify(m.data.legendData[i])
          );

        //行业设置对应颜色  折线图
        if (m.option.series[i]) {
          if (m.chart.indexOf("line") !== -1) {
            m.option.series[i].itemStyle = {
              color: industryColor[m.data.legendData[i]]
            };
          }
        }
        //遍历series中data
        m.option.series[i].data = JSON.parse(
          JSON.stringify(
            s.map((d, j) => {
              let item = {
                value: d.value || d,
                name: d.name || ""
              };
              // debugger;
              //设置数据为多种颜色
              // if (m.option.series[i] && m.option.series[i].colorful)
              //   item.itemStyle = { normal: { color: colorList[j] } };
              //针对pie的特殊处理
              // if (m.option.series[i].withPercent) {
              //   let total = s.reduce((t, c) => t + c.value, 0);
              //   let p = (s[j].value / total) * 100;
              //   item.name = d.name + "  " + p.toFixed(2) + "%";
              // }

              // item.itemStyle = { normal: { color: colorList[j] } };
              //行业设置对应颜色  柱状图和饼图
              if (
                m.chart.indexOf("bar") !== -1 ||
                m.chart.indexOf("pie") !== -1
              ) {
                if (
                  m.chart.indexOf("bar3") !== -1 &&
                  j > 2 &&
                  !industryColor[m.data.yAxisData[j]]
                ) {
                  item.itemStyle = {
                    color: "#999999"
                  };
                } else if (d.name) {
                  item.itemStyle = {
                    color: industryColor[d.name]
                  };
                } else if (m.data.yAxisData) {
                  item.itemStyle = {
                    color: industryColor[m.data.yAxisData[j]]
                  };
                }
              }

              //设置bar3排名前三有色
              // if (m.chart.indexOf("bar3") !== -1 && j > 2) {
              //   item.itemStyle = {
              //     color: "#999999"
              //   };
              // }
              return item;
            })
          )
        );
      });
    }
  }
  // console.log(m.title, m.chart, m);
}

function mergeCongig(configArr) {
  if (configArr.length == 0) return;
  configArr.forEach(c => {
    //根据chart类型，合并对应的模版json
    Object.assign(c, _.cloneDeep(ChartTypes[c.chart]));
    //将ecahrts数据插入到option中
    insertDataToOption(c);

    if (c.children && c.children.length) {
      mergeCongig(c.children);
    }
  });
}

export { ChartTypes, insertDataToOption, mergeCongig };
