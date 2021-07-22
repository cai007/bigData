//大数据
import * as types from "../mutation-types.js";

const state = {
  rightShow: false,
  isDoubleLine: true,
  bottomDis: 0,
  requests: [], //大数据请求队列
  menuId: 0,
  mapData: {},
  mapSetting: {}, //地图屏幕设置
  interactionName: "街区整体", //交互标题
  regionData: {}, //分区数据
  unitData: {}, //重点单位数据
  floorData: {}, //分层数据
  cameraData: {}, //相机数据
  interestData: {}, //兴趣点数据
  chainData: {}, //连锁店数据
  dalanData: {}, //大兰货柜数据
  equipmentData: {}, //智能设备数据
  parkingData: {}, //停车场数据
  AIAlarmData: {}, //报警数据
  pipeData: {} //管网管线数据
};

const mutations = {
  [types.TOGGLE_RIGHT_PANEL](state, val) {
    state.rightShow = val;
  },
  [types.TOGGLE_DOUBLE_LINE](state, val) {
    state.isDoubleLine = val;
  },
  [types.SET_MENU_ID](state, val) {
    state.menuId = val;
  },
  [types.SET_MAP_DATA](state, val) {
    state.mapData = val;
    console.log("index.html--------------", val);
    state.interactionName = "";
    // "Type":"AIAlarm","Message":{"tickedMenu":"334"}
    let { Type, Message } = val;
    if (Type == "select_region") {
      state.regionData = Message;
      state.interactionName = Message.region_name;
    } else if (Type == "select_important_unit") {
      state.unitData = Message;
      state.interactionName = Message.unit_name;
    } else if (Type == "select_floor") {
      state.floorData = Message;
      state.interactionName = Message.floor;
    } else if (Type == "select_pass_flow_camera") {
      state.cameraData = Message;
    } else if (Type == "select_cam_region") {
      state.interactionName = Message.cam_region_name;
    } else if (Type == "select_interest_pt") {
      state.interestData = Message;
    } else if (Type == "select_dalan") {
      state.dalanData = Message;
      state.interactionName = Message.name;
    } else if (Type == "select_equipment") {
      state.equipmentData = Message;
      state.interactionName = Message.name;
    } else if (Type == "select_chainstore") {
      state.chainData = Message;
    } else if (Type == "select_parking") {
      state.parkingData = Message;
    } else if (Type == "AIAlarm") {
      state.AIAlarmData = Message;
    } else if (Type == "DisplaySettings") {
      console.log("get map DisplaySettings");
      state.mapSetting = Message;
    } else if (Type == "select_pipe") {
      console.log("get map pipe");
      state.pipeData = Message;
    }
  }
};

export default {
  state,
  mutations
};
