const state = {
  AICameraSettingInfo : {},
  AICameraSettingShow : false,
};

const mutations = {
  AICameraSettingInfo (state, value) {
    state.AICameraSettingInfo = value;
  },
  AICameraSettingShow(state, value) {
    state.AICameraSettingShow = value;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
