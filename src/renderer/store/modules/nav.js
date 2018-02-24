import * as types from '../mutation-type'

const state = {
  activeIndex: '1'
}

const mutations = {
 [types.CHANGE_INDEX] (state, index) {
    state.activeIndex = index
  },
}

const actions = {
  changeIndex ({ commit }, index) {
    // do something async
    commit(types.CHANGE_INDEX, index)
  }
}

const getters = {
  activeIndex: state => state.activeIndex
}

export default {
  state,
  mutations,
  actions,
  getters
}
