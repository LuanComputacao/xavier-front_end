const state = () => ({
  all: {}
})

const getters = {}

const actions = {
  updateAnswer ({ state, commit }, answer) {
    commit('update', {
      id: answer.question_id,
      type: answer.type,
      answer: answer.answer
    })
  }
}

const mutations = {
  update (state, { id, type, answer }) {
    state.all[id] = { type, answer }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
