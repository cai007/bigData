import china from "./china.js";

var geoCoordMap = {
  荆门: [114.3896, 30.6628],
  上海: [121.4648, 31.2891],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516]
};

var SHData = [
  [{ name: "荆门" }, { name: "吉林", value: 95 }],
  [{ name: "荆门" }, { name: "广西", value: 90 }],
  [{ name: "荆门" }, { name: "天津", value: 80 }],
  [{ name: "荆门" }, { name: "云南", value: 70 }],
  [{ name: "荆门" }, { name: "贵州", value: 60 }],
  [{ name: "荆门" }, { name: "湖南", value: 20 }],
  [{ name: "荆门" }, { name: "内蒙古", value: 40 }],
  [{ name: "荆门" }, { name: "山东", value: 20 }],
  [{ name: "荆门" }, { name: "山西", value: 10 }]
];

var convertData = function(data) {
  console.log(data);
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[1].name];
    var toCoord = geoCoordMap[dataItem[0].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[1].value
      });
    }
  }
  return res;
};

var color = ["#a6c84c", "#ffa022", "#46bee9"];
var series = [];
[["荆门", SHData]].forEach(function(item, i) {
  //console.log(item,i);
  series.push(
    {
      name: item[0],
      type: "lines",
      zlevel: 1,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: "#fff",
        symbolSize: 3
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 0,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
    {
      name: item[0] + " Top10",
      type: "lines",
      zlevel: 2,
      symbol: ["none", "arrow"],
      symbolSize: 10,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: "arrow", //箭头图标
        symbolSize: 5 //图标大小
      },
      lineStyle: {
        normal: {
          color: color[i],
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        }
      },
      data: convertData(item[1])
    },
    {
      name: item[0] + " Top10",
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        brushType: "stroke"
      },
      label: {
        normal: {
          show: true,
          position: "right",
          formatter: "{b}"
        }
      },
      symbolSize: function(val) {
        return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i]
        }
      },
      data: item[1].map(function(dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
        };
      })
    }, //被攻击点
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      rippleEffect: {
        period: 4,
        brushType: "stroke",
        scale: 8
      },
      label: {
        normal: {
          show: true,
          position: "right", //显示位置
          offset: [5, 0], //偏移设置
          formatter: function(params) {
            //圆环显示文字
            return params.data.name;
          },
          fontSize: 16
        },
        emphasis: {
          show: true
        }
      },
      symbol: "circle",
      symbolSize: function(val) {
        return 2 + val[2]; //圆环大小
      },
      itemStyle: {
        normal: {
          show: false,
          color: "#0f0"
        }
      },
      data: [
        {
          name: item[0],
          value: geoCoordMap[item[0]].concat([10])
        }
      ]
    }
  );
});

export default series;
