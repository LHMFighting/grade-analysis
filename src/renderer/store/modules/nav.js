import * as types from '../mutation-type'

const state = {
  activeIndex: '1',
  allGrades: []
}

const mutations = {
  [types.CHANGE_INDEX](state, index) {
    state.activeIndex = index
  },
  [types.CHANGE_ALLGRADES] (state, allGrades) {
    console.log(state.allGrades);
    state.allGrades = allGrades
  }
}

const actions = {
  changeIndex({
    commit
  }, index) {
    // do something async
    commit(types.CHANGE_INDEX, index)
  },
  changeAllGrades({commit}, allGrades) {
    commit(types.CHANGE_ALLGRADES, allGrades)
  }
}

const getters = {
  activeIndex: state => state.activeIndex,
  allGrades: state => state.allGrades
}

export default {
  state,
  mutations,
  actions,
  getters
}