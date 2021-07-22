const top1 = [
  {
    chart: "num2",
    title: "本月交易总额",
    unit: "万元",
    data: "3925.2"
  },
  {
    chart: "num2",
    title: "当月交易笔数",
    unit: "万笔",
    data: "1336.5",
    option: {}
  },
  {
    chart: "num2",
    title: "当月活跃商户数",
    unit: "个",
    data: "3925"
  },
  {
    chart: "num2",
    title: "活跃店铺",
    unit: "个",
    data: "1326",
    option: {}
  }
];
const charts1 = [
  {
    chart: "pie5",
    title: "空置率",
    id: "1kzl",
    children: [
      {
        chart: "num1",
        title: "年度消费总额",
        unit: "亿元",
        data: "48.56",
        caption: "与上年同比增加",
        captionData: "7%",
        child: true
      }
    ],
    child: true,
    data: [0.6, 0.6]
  },
  {
    chart: "pie3",
    title: "年度应收",
    unit: "亿元",
    id: "ndys1",
    data: {
      seriesData: [
        [
          { value: 1048, name: "开业门店" },
          { value: 735, name: "未开业门店" }
        ]
      ]
    },
    children: [
      {
        chart: "num1",
        title: "开业门店",
        unit: "个",
        data: "2872",
        caption: "环比增长",
        data1: "35%",
        child: true
      }
    ]
    // select: [
    //   {
    //     label: 2020,
    //     value: 2020
    //   },
    //   {
    //     label: 2021,
    //     value: 2021
    //   }
    // ],
    // data: {
    //   seriesData: [
    //     [
    //       { value: 1048, name: "开业门店" },
    //       { value: 735, name: "未开业门店" }
    //     ]
    //   ]
    // },
    // children: [
    //   {
    //     chart: "num1",
    //     title: "开业门店",
    //     unit: "个",
    //     data: "2872",
    //     caption: "环比增长",
    //     data1: "35%",
    //     child: true
    //   }
    // ]
  },
  // {
  //   chart: "mix1",
  //   title: "营收占比",
  //   select: [
  //     {
  //       label: "2021-01",
  //       value: "2021-01"
  //     },
  //     {
  //       label: "2021-02",
  //       value: "2021-02"
  //     },
  //     {
  //       label: "2021-03",
  //       value: "2021-03"
  //     },
  //     {
  //       label: "2021-04",
  //       value: "2021-04"
  //     },
  //     {
  //       label: "2021-05",
  //       value: "2021-05"
  //     }
  //   ],

  {
    aa: {
      legendData: ["餐饮", "服饰", "日用", "服务", "娱乐", "住宿", "医疗"],
      xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      seriesData: [
        [320, 382, 434, 391, 490, 530, 510],
        [360, 410, 460, 420, 520, 560, 580],
        [250, 243, 279, 266, 287, 350, 380],
        [250, 210, 226, 270, 190, 200, 285],
        [130, 110, 121, 111, 165, 256, 253],
        [120, 100, 90, 110, 179, 230, 240],
        [170, 182, 167, 184, 232, 267, 279]
      ]
    },
    bb: {
      seriesData: [
        [
          { value: 1048, name: "线上生态运营" },
          { value: 735, name: "线下合作运行" },
          { value: 735, name: "三方合作运行" }
        ],
        [
          { value: 1048, name: "线上生态运营" },
          { value: 735, name: "线下合作运行" },
          { value: 735, name: "三方合作运行" }
        ],
        [
          { value: 1048, name: "线上生态运营" },
          { value: 735, name: "线下合作运行" },
          { value: 735, name: "三方合作运行" }
        ],
        [
          { value: 1048, name: "线上生态运营" },
          { value: 735, name: "线下合作运行" },
          { value: 735, name: "三方合作运行" }
        ]
      ]
    }
  },
  //   children: [
  //     {
  //       chart: "pie1",
  //       title: "分类别占比",
  //       id: "lbzb",空间索引图、楼层平面索引、指向标识、集合式平面标识、方向指向标识
  // data: {
  //   seriesData: [
  //     [
  //       { value: 148, name: "已处理" },
  //       { value: 35, name: "未处理" },
  //     ]
  //   ]
  // },
  //       child: true
  //     },
  //     {
  //       chart: "pie1",
  //       title: "分区域占比",
  //       id: "qyzb",
  //       data: {
  //         seriesData: [
  //           [
  //             { value: 1048, name: "中天街" },
  //             { value: 735, name: "工商界" },
  //             { value: 580, name: "中天街1" },
  //             { value: 484, name: "工商界1" },
  //             { value: 300, name: "工商界2" }
  //           ]
  //         ]
  //       },
  //       child: true
  //     }
  //   ]
  // }
  {
    chart: "map2",
    id: "map2",
    title: "游客来源"
  }
];
const charts2 = [
  {
    chart: "bar1",
    title: "坪效分析",
    unit: "万元",
    id: "pxfx",
    data: {
      legendData: ["街区整体"], //非必须，图例数据
      xAxisData: ["1月", "2月", "3月", "4月", "5月", "6月"], //非必须，没有则从series获取
      seriesData: [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7]]
    }
  }
  // {
  //   chart: "rnk1",
  //   title: "信用评价排行",
  //   select: [
  //     {
  //       label: "2021-01",
  //       value: "2021-01"
  //     },
  //     {
  //       label: "2021-02",
  //       value: "2021-02"
  //     },
  //     {
  //       label: "2021-03",
  //       value: "2021-03"
  //     },
  //     {
  //       label: "2021-04",
  //       value: "2021-04"
  //     },
  //     {
  //       label: "2021-05",
  //       value: "2021-05"
  //     }
  //   ],
  // data: [
  //   {
  //     id: 1,
  //     icon: "account",
  //     name: "东方百货",
  //     rankName:'店铺数',
  //     rank: "655"
  //   },
  //   {
  //     id: 2,
  //     icon: "account",
  //     name: "月新广场",
  //     rankName:'店铺数',
  //     rank: "432"
  //   },
  //   {
  //     id: 3,
  //     icon: "account",
  //     name: "木林森名鞋",
  //     rankName:'店铺数',
  //     rank: "256"
  //   },
  //   {
  //     id: 4,
  //     icon: "account",
  //     name: "荆门中商百货",
  //     rankName:'店铺数',
  //     rank: "254"
  //   },
  //   {
  //     id: 5,
  //     icon: "account",
  //     name: "王子鞋城",
  //     rankName:'店铺数',
  //     rank: "125"
  //   },
  //   {
  //     id: 6,
  //     icon: "account",
  //     rankName:'店铺数',
  //     name: "王子鞋城1",
  //     rank: "98"
  //   }
  // ]
  // },
  // {
  //   chart: "bar3",
  //   title: "重点单位销售额",
  //   unit: "万元",
  //   id: "zddw",

  //       { value: 1048, name: "小吃服务" },
  //       { value: 735, name: "正餐服务" },
  //       { value: 580, name: "电子产品" },
  //       { value: 484, name: "服装零售" },
  //       { value: 300, name: "化妆品零售" }
  // data: {
  //   yAxisData: [
  //     "小吃服务",
  //     "正餐服务",
  //     "电子产品",
  //     "化妆品零售",
  //     "服装零售",
  //     "王子鞋城"
  //   ],
  //   seriesData: [[10, 20, 52, 13, 25, 16]]
  // }
  // }
];
const charts3 = [
  // {
  //   chart: "funnel",
  //   title: "消费档次分析",
  //   id: "xfdc",
  //   data: {
  //     legendData: ["高", "偏高", "中", "偏低", "低"],
  //     seriesData: [
  //       [
  //         { value: 60, name: "高" },
  //         { value: 40, name: "偏高" },
  //         { value: 20, name: "中" },
  //         { value: 80, name: "偏低" },
  //         { value: 100, name: "低" }
  //       ]
  //     ]
  //   }
  // },
  // {
  //   chart: "bar1",
  //   unit: "万元",
  //   title: "支付方式偏好",
  //   id: "xfph",
  //   select: [
  //     {
  //       label: "2021-01",
  //       value: "2021-01"
  //     },
  //     {
  //       label: "2021-02",
  //       value: "2021-02"
  //     },
  //     {
  //       label: "2021-03",
  //       value: "2021-03"
  //     },
  //     {
  //       label: "2021-04",
  //       value: "2021-04"
  //     },
  //     {
  //       label: "2021-05",
  //       value: "2021-05"
  //     }
  //   ],
  //   data: {
  //     legendData: ["支付宝", "微信", "银联卡"],
  //     xAxisData: ["第一周", "第二周", "第三周", "第四周"],
  //     seriesData: [
  //       [10, 20, 52, 13],
  //       [52, 13, 10, 20],
  //       [10, 13, 20, 52]
  //     ]
  //   }
  // },
  {
    chart: "tab",
    title: "监测设备列表",
    data: {
      legendData: ["同比增长", "GDP"],
      xAxisData: ["2019", "2020", "2021"],
      seriesData: [
        [0, -5.6, 25.93],
        [94.47, 89.14, 112.25]
      ]
    }
  },
  {
    data: {
      legendData: ["营收额", "同比增长"],
      xAxisData: ["Q1", "Q2", "Q3", "Q4"],
      seriesData: [
        [12, 16.62, 34.03, 26],
        [0.2, 0.3, 0.4, 0.5]
      ]
    },

    chart: "line4",
    title: "活跃商户数",
    id: "zhtfx",
    select: [
      {
        label: "2021",
        value: "2021"
      },
      {
        label: "2021",
        value: "2021"
      },
      {
        label: "2021",
        value: "2021"
      },
      {
        label: "2021",
        value: "2021"
      },
      {
        label: "2021",
        value: "2021"
      }
    ],
    aa: {
      seriesData: [
        [
          { value: 143436, name: "批发业" },
          { value: 556603, name: "零售业" },
          { value: 11099, name: "住宿业" },
          { value: 29473, name: "餐饮业" }
        ]
      ]
    },
    bb: {
      yAxisData: ["住宿业", "餐饮业", "批发业", "零售业"],
      seriesData: [[11099, 29473, 143436, 556603]]
    },
    data: {
      xAxisData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      seriesData: [
        [7.0, 23.2, 25.6, 76.7, 135.6, 2.0, 4.9, 162.2, 32.6, 20.0, 6.4, 3.3]
      ]
    }
  }
];

const charts4 = [
  {
    chart: "mix3",
    title: "营收情况",
    split: [25, 35, 40],
    aa: {
      legendData: ["同比增长", "总额"],
      xAxisData: ["2019", "2020", "2021"],
      seriesData: [
        [0, -15.48, 28.11],
        [60.16, 50.84, 65.13]
      ]
    },
    children: [
      {
        chart: "bar10",
        title: "2020年GDP",
        id: "1kzl",
        data: {
          legendData: ["同比增长", "GDP"],
          xAxisData: ["2019", "2020", "2021"],
          seriesData: [
            [0, -4.9, 7.0],
            [2.0, 2.2, 3.3]
          ]
        },
        child: true
      },
      {
        chart: "line2",
        title: "每日营销趋势",
        unit: "万元",
        id: "yxqs2",
        child: true,
        data: {
          legendData: ["2020", "2021"],
          xAxisData: ["10.1", "10.2", "10.3", "10.4", "10.5", "10.6", "10.7"],
          seriesData: [
            [120, 282, 111, 234, 220, 340, 310],
            [140, 232, 101, 264, 90, 340, 250]
          ]
        },

        aa: {
          seriesData: [
            { value: 17, name: "东方百货" },
            { value: 20, name: "月新广场" },
            { value: 10, name: "木林森鸣谢" },
            { value: 30, name: "荆门中天广场" },
            { value: 10, name: "龙凤珠宝" },
            { value: 13, name: "王子鞋城" }
          ]
        },
        bb: {
          yAxisData: [
            "东方百货",
            "月新广场",
            "木林森鸣谢",
            "荆门中天广场",
            "龙凤珠宝",
            "王子鞋城"
          ],
          seriesData: [[10, 20, 52, 13, 25, 16]]
        }
      },
      {
        chart: "line3",
        title: "特殊节假日应收趋势",
        unit: "万元",
        id: "jjrqs",
        data: {
          legendData: [
            "线上广告",
            "优惠券返点",
            "店铺会员分成",
            "CSP引流收入",
            "招牌租聘"
          ],
          xAxisData: ["Q1", "Q2", "Q3", "Q4"],
          seriesData: [
            [120, 182, 234, 191, 290, 330, 310],
            [20, 12, 14, 10, 21, 30, 10],
            [150, 232, 134, 90, 230, 101, 210],
            [120, 142, 114, 110, 101, 370, 210],
            [50, 32, 34, 9, 30, 10, 21]
          ]
        },
        children: [
          {
            chart: "bar5",
            title: "消费偏好TGI",
            id: "xfph",
            data: {
              yAxisData: ["东方百货", "月新广场", "木林森鸣谢"],
              seriesData: [[13, 25, 16]]
            }
          }
        ],
        child: {
          seriesData: [
            [
              { value: 1048, name: "线上" },
              { value: 735, name: "线下" },
              { value: 735, name: "三方" }
            ],
            [
              { value: 148, name: "线上广告" },
              { value: 35, name: "优惠券返点" },
              { value: 35, name: "店铺会员分成" },
              { value: 35, name: "CSP引流收入" },
              { value: 35, name: "招牌租聘" }
            ]
          ]
        }
      }
    ]
  }
];

const charts5 = [
  {
    chart: "bar2",
    title: "空置率变化趋势",
    id: "kzlqs",
    unit: "公顷",
    select: [
      {
        label: 2020,
        value: 2020
      },
      {
        label: 2021,
        value: 2021
      }
    ],
    data: {
      legendData: ["餐饮", "娱乐", "住宿", "休闲"],
      xAxisData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      seriesData: [
        [135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
        [7.0, 23.2, 25.6, 76.7, 135.6, 2.0, 4.9, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      ]
    }
  },
  {
    chart: "pie1",
    title: "娱乐业分布",
    id: "yly",
    data: {
      seriesData: [
        [
          { value: 1048, name: "第一季度" },
          { value: 735, name: "第二季度" },
          { value: 580, name: "第三季度" },
          { value: 484, name: "第四季度" }
        ]
      ]
    }
  },
  {
    chart: "pie1",
    title: "服务业分布",
    id: "fwy12",
    data: {
      seriesData: [
        [
          { value: 104, name: "小吃服务1" },
          { value: 73, name: "正餐服务1" },
          { value: 58, name: "电子产品1" },
          { value: 48, name: "服装零售1" },
          { value: 30, name: "化妆品零售1" }
        ]
      ]
    }
  }
];
const charts6 = [
  {
    chart: "bar2",
    title: "行业同比增长",
    id: "hytbzz",
    unit: "公顷",
    select: [
      {
        label: "同比2020",
        value: 2020
      },
      {
        label: "同比2020",
        value: 2020
      },
      {
        label: "同比2021",
        value: 2021
      }
    ],
    data: {
      legendData: ["餐饮", "娱乐", "住宿", "休闲"],
      xAxisData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      seriesData: [
        [135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
        [7.0, 23.2, 25.6, 76.7, 135.6, 2.0, 4.9, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      ]
    }
  },
  {
    chart: "pie1",
    title: "零售业分布",
    id: "lsy",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  },
  {
    chart: "pie1",
    title: "餐饮业分布",
    id: "cyy",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  }
];
const charts7 = [
  {
    chart: "pie1",
    title: "行业门店数量占比",
    id: "hymdsl",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  },
  {
    chart: "pie1",
    title: "行业面积占比",
    id: "hymj",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  },
  {
    chart: "wrd",
    title: "品牌店",
    data: [
      {
        name: "蜀大侠",
        value: "32"
      },
      {
        name: "迪信通",
        value: "112"
      },
      {
        name: "蛙来哒",
        value: "122"
      },
      {
        name: "鼎尚数码",
        value: "23"
      },
      {
        name: "豪客家族",
        value: "11"
      },
      {
        name: "书亦烧仙草",
        value: "22"
      },
      {
        name: "周大金珠宝",
        value: "32"
      },
      {
        name: "王子鞋城",
        value: "42"
      },
      {
        name: "三福",
        value: "32"
      },
      {
        name: "安踏",
        value: "23"
      },
      {
        name: "麦当劳",
        value: "25"
      },
      {
        name: "老凤祥银楼",
        value: "66"
      },
      {
        name: "大东",
        value: "77"
      },
      {
        name: "快鱼",
        value: "44"
      },
      {
        name: "壹品酥宫廷糕点",
        value: "33"
      },
      {
        name: "周黑鸭",
        value: "221"
      },
      {
        name: "金大福珠宝",
        value: "34"
      },
      {
        name: "特步",
        value: "55"
      },
      {
        name: "王老五钻石",
        value: "224"
      }
    ]
  }
];
const charts8 = [
  {
    chart: "bar3",
    title: "特色门店分布",
    id: "tsmd",
    data: {
      yAxisData: [
        "东方百货",
        "月新广场",
        "木林森鸣谢",
        "荆门中天广场",
        "龙凤珠宝",
        "王子鞋城"
      ],
      seriesData: [[10, 20, 52, 13, 25, 16]]
    }
  },
  {
    chart: "bar3",
    title: "店铺数量分布",
    id: "dpsl",
    data: {
      yAxisData: [
        "东方百货",
        "月新广场",
        "木林森鸣谢",
        "荆门中天广场",
        "龙凤珠宝",
        "王子鞋城"
      ],
      seriesData: [[10, 20, 52, 13, 25, 16]]
    }
  },
  {
    chart: "bar3",
    title: "品牌店数量分布",
    id: "ppdsl",
    data: {
      yAxisData: [
        "中天街",
        "长宁大道",
        "工商街",
        "荆门中天广场",
        "龙凤珠宝",
        "王子鞋城",
        "工商街",
        "荆门中天广场",
        "龙凤珠宝",
        "王子鞋城"
      ],
      seriesData: [[10, 20, 52, 13, 25, 16, 13, 25, 16]]
    }
  }
];

const charts9 = [
  {
    chart: "tree",
    title: "兴趣点分布",
    id: "xqdfb",
    radio: [
      {
        label: "商户位置",
        value: "商户位置"
      },
      {
        label: "商户类型",
        value: "商户类型"
      }
    ]
  },
  {
    chart: "pie1",
    title: "兴趣点分布",
    id: "xqdfl",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  }
];
const charts10 = [
  {
    chart: "bar2",
    title: "兴趣点变化趋势",
    id: "xqdbh",
    select: [
      {
        label: "2019",
        value: 2019
      },
      {
        label: "2020",
        value: 2020
      },
      {
        label: "2021",
        value: 2021
      }
    ],
    data: {
      legendData: ["餐饮", "娱乐", "住宿", "休闲"],
      xAxisData: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      seriesData: [
        [135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
        [7.0, 23.2, 25.6, 76.7, 135.6, 2.0, 4.9, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      ]
    }
  },
  {
    chart: "bar3",
    title: "热门兴趣点排行",
    id: "rmxqd",
    data: {
      yAxisData: [
        "东方百货",
        "月新广场",
        "木林森鸣谢",
        "荆门中天广场",
        "龙凤珠宝",
        "王子鞋城"
      ],
      seriesData: [[10, 20, 52, 13, 25, 16]]
    }
  },
  {
    chart: "pie1",
    title: "零售渠道分布",
    id: "lsqd",
    data: {
      seriesData: [
        [
          { value: 1048, name: "小吃服务" },
          { value: 735, name: "正餐服务" },
          { value: 580, name: "电子产品" },
          { value: 484, name: "服装零售" },
          { value: 300, name: "化妆品零售" }
        ]
      ]
    }
  }
];

const chartsTest = [
  // {
  //   chart: "mix1",
  //   split: [35, 65],
  //   title: "区域空置率",
  //   children: [
  //     {
  //       chart: "pie3",
  //       title: "中天街",
  //       id: "ztj1kzl",
  //       select: [
  //         {
  //           label: 2020,
  //           value: 2020
  //         },
  //         {
  //           label: 2021,
  //           value: 2021
  //         }
  //       ],
  //       data: {
  //         seriesData: [
  //           [
  //             { value: 1048, name: "开业门店" },
  //             { value: 735, name: "未开业门店" }
  //           ]
  //         ]
  //       },
  //       children: [
  //         {
  //           chart: "num1",
  //           title: "开业门店",
  //           unit: "个",
  //           data: "2872",
  //           caption: "环比增长",
  //           data1: "35%",
  //           child: true
  //         }
  //       ],
  //       child: true
  //     },
  //     {
  //       chart: "pie4",
  //       title: "其他分区",
  //       id: "ztj1kzl1",
  //       data: {
  //         seriesData: [
  //           [
  //             { value: 1048, name: "开业门店" },
  //             { value: 735, name: "未开业门店" }
  //           ],
  //           [
  //             { value: 148, name: "开业门店" },
  //             { value: 35, name: "未开业门店" }
  //           ],
  //           [
  //             { value: 1048, name: "开业门店" },
  //             { value: 735, name: "未开业门店" }
  //           ],
  //           [
  //             { value: 148, name: "开业门店" },
  //             { value: 35, name: "未开业门店" }
  //           ]
  //         ]
  //       },
  //       child: true
  //     }
  //   ]
  // },
  // {
  //   chart: "txt",
  //   title: "简介",
  //   id: "qyhyfb",
  // data: {
  //   title: "东宝区面积：1645平方千米",
  //   info:
  //     "东宝区，隶属湖北省荆门市。地处湖北省中部、江汉平原西北部，东临钟祥市，西接宜昌市远安县、当阳市，南连掇刀区、漳河新区，北靠襄阳市南漳县、宜城市。截至2020年，东宝区下辖2个街道、6个镇、1个乡。 东宝区是革命文物保护利用片区分县  、率先基本实现主要农作物生产全程机械化示范区 、全国计划生育优质服务先进单位。"
  // }
  // },
  // {
  //   legendData: ["餐饮", "娱乐", "住宿", "服饰", "影视", "住宿"],
  //   xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  //   seriesData: [
  //     [220, 282, 334, 291, 390, 230, 410],
  //     [320, 282, 434, 391, 490, 530, 510],
  //     [180, 122, 274, 111, 210, 370, 380],
  //     [120, 182, 234, 191, 290, 330, 310],
  //     [220, 132, 154, 190, 201, 330, 410],
  //     [150, 232, 134, 90, 230, 101, 210]
  //   ]
  // },
  // {
  //   chart: "pie6",
  //   title: "区域行业分布",
  //   code: "qyhyfbewe",
  //   data: [
  //     { label: "占比", value: 0.3 },
  //     { label: "同比", value: -0.2 }
  //   ]
  // }
  // {
  //   chart: "space",
  //   title: "消费偏好TGI",
  //   id: "xfphtgi"
  // },
  // {
  //   chart: "bar6",
  //   title: "区域行业分布",
  //   id: "qyhyfb",
  //   data: {
  //     legendData: [
  //       "餐饮",
  //       "服饰鞋包",
  //       "娱乐",
  //       "影视",
  //       "教育培训",
  //       "住宿",
  //       "生活用品"
  //     ],
  //     yAxisData: ["中天街", "工商街区", "象山大道区", "金虾路区", "长宁大道区"],
  //     seriesData: [
  //       [123, 2, 56, 4, 12, 36, 15],
  //       [114, 122, 6, 3, 2, 5, 45],
  //       [63, 6, 45, 122, 6, 4, 2],
  //       [63, 2, 2, 36, 56, 14, 45],
  //       [73, 4, 2, 22, 56, 36, 45]
  //     ]
  //   }
  // }
  // {
  //   chart: "pie6",
  //   title: "区域行业分布",
  //   code: "qyhyfbewe",
  // data: [
  //   { label: "算力服务器1", value: 0.7 },
  //   { label: "算力服务器2", value: 0.8 }
  // ]
  // },

  {
    aa: {
      seriesData: [
        [
          { value: 0.13, name: "鹰眼设备" },
          { value: 0.04, name: "智能wifi" },
          { value: 0.03, name: "客流设备" },
          { value: 0.03, name: "魔镜" },
          { value: 0.03, name: "眼控广告机" },
          { value: 0.02, name: "广告大屏" },
          { value: 0.13, name: "小犀牛" },
          { value: 0.03, name: "智能灯" },
          { value: 0.13, name: "猫头鹰" },
          { value: 0.12, name: "其他" }
        ]
      ]
    },
    chart: "video",
    title: "监控",
    data: [
      {
        url: "www.baidu.com",
        location: "中天街奥特莱斯街口"
      },
      {
        url: "www.baidu.com",
        location: "中天街三福百货门口"
      },
      {
        url: "www.baidu.com",
        location: "府东路街口"
      }
    ]
  },
  {
    chart: "ratio",
    title: "中天街",
    id: "ztj1k21",
    data: {
      legendData: ["中天街"],
      xAxisData: [
        "last30",
        "last29",
        "last28",
        "last27",
        "last26",
        "last25",
        "last24",
        "last24",
        "last22",
        "last21",
        "last20",
        "last19",
        "last18",
        "last17",
        "last16",
        "last15",
        "last14",
        "last13",
        "last12",
        "last11",
        "last10",
        "last9",
        "last8",
        "last7",
        "last6",
        "last5",
        "last4",
        "last3",
        "last2",
        "last1"
      ],
      seriesData: [
        [
          61133,
          66125,
          51188,
          51199,
          51101,
          51133,
          51155,
          51133,
          51254,
          51188,
          51199,
          51101,
          51133,
          51155,
          51133,
          51254,
          51188,
          51199,
          51101,
          51133,
          51155,
          51133,
          51254,
          51188,
          51199,
          51101,
          51133,
          51155,
          51133,
          51155
        ]
      ]
    }
    // children: [
    //   {
    //     chart: "num6",
    //     title: "男性",
    //     data: "42%",
    //     child: true,
    //     icon: "account"
    //   },
    //   {
    //     chart: "num6",
    //     title: "女性",
    //     data: "58%",
    //     child: true,
    //     icon: "account"
    //   }
    // ]
  }
];

const chartT2 = [];

export { chartsTest, chartT2 };
