const state = {
  nowActiveIndex: 0
}

const actions = {
  /**
   * 设置激活的某个 
   */
  setActive({commit}, activeIndex) {
    commit('SET_ACTIVE', activeIndex);
  }
}

const mutations = {
  SET_ACTIVE(state, payload) {
    state.nowActiveIndex = payload;
  }
}

export default {
  state,
  actions,
  mutations
}