const bottomTabData = [
  { menuId: 0, label: "政区数据", navName: "CurbEpidemicView", views: [] },
  {
    label: "商业大数据",
    navName: "CommunityManagement",
    views: [],
    children: [
      {
        menuId: 0,
        label: "消费数据",
        navName: "SecurityProtectionView",
        views: []
      },
      { menuId: 1, label: "业态分布", navName: "CurbEpidemicView", views: [] },
      {
        menuId: 2,
        label: "商户数据",
        navName: "CommunityManagement",
        views: []
      },
      {
        menuId: 3,
        label: "连锁品牌",
        navName: "CommunityManagement",
        views: []
      }
    ]
  },
  {
    label: "客群大数据",
    navName: "CommunityManagement",
    views: [],
    children: [
      {
        menuId: 4,
        label: "客流数据",
        navName: "CommunityManagement",
        views: []
      },
      {
        menuId: 4,
        label: "客群画像",
        navName: "CommunityManagement",
        views: []
      }
    ]
  },
  {
    menuId: 2,
    label: "运营大数据",
    navName: "CommunityManagement",
    views: [],
    children: [
      {
        menuId: 0,
        label: "运营数据",
        navName: "SecurityProtectionView",
        views: []
      },
      {
        menuId: 2,
        label: "能耗数据",
        navName: "CommunityManagement",
        views: []
      }
    ]
  },
  { menuId: 6, label: "AI智能分析", navName: "CurbEpidemicView", views: [] },
  {
    menuId: 7,
    label: "设备设施",
    navName: "CommunityManagement",
    views: [],
    children: [
      {
        menuId: 0,
        label: "智能设备",
        navName: "SecurityProtectionView",
        views: []
      },
      // {
      //   menuId: 5,
      //   label: "智慧停车",
      //   navName: "SecurityProtectionView",
      //   views: []
      // },
      {
        menuId: 0,
        label: "市政设施",
        navName: "SecurityProtectionView",
        views: []
      },

      {
        menuId: 0,
        label: "导视系统",
        navName: "SecurityProtectionView",
        views: []
      },
      {
        menuId: 8,
        label: "管网管线",
        navName: "CommunityManagement",
        dev: true,
        views: []
      },
      {
        menuId: 0,
        label: "巡检维修",
        navName: "SecurityProtectionView",
        views: []
      }
    ]
  },
  { menuId: 9, label: "应急预案", navName: "CommunityManagement", views: [] },
  { menuId: 12, label: "三维漫游", navName: "CommunityManagement", views: [] }
];

export { bottomTabData };
