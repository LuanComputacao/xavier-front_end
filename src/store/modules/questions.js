import questionsBase from '../../api/questions'

const state = () => ({
  types: {
    OPEN: {
      code: 1,
      label: 'Aberta'
    },
    UNIQUE_CHOICE: {
      code: 2,
      label: 'Unica escolha'
    },
    MULTIPLE_CHOICE: {
      code: 3,
      label: 'Multipla escolha'
    }
  },
  all: {
    '001': {
      order: 1,
      wording: 'Fale sobre alguma coisa',
      type: 1,
      answer: {}
    },
    '002': {
      order: 2,
      wording: 'Marque a opção correta',
      items: [
        { id: 1, text: 'Primeira Opção' },
        { id: 2, text: 'Segunda Opção' },
        { id: 3, text: 'Terceira Opção' }
      ],
      type: 2,
      answer: {}
    },
    '003': {
      order: 3,
      wording: 'Marque as opções corretas',
      items: [
        { id: 1, text: 'Primeira Opção' },
        { id: 2, text: 'Segunda Opção' },
        { id: 3, text: 'Terceira Opção' },
        { id: 4, text: 'Quarta Opção' }
      ],
      type: 3,
      answer: {}
    }
  },
  editingQuestion: {
    items: null,
    type: null,
    wording: ''
  }
})

const getters = {}

const actions = {
  updateEditingQuestion (context, question) {
    context.commit('updateEditingQuestion', question)
  },

  getAllQuestions ({ commit }) {
    questionsBase.getQuestions(questions => {
      commit('setQuestions', questions)
    })
  }
}

const mutations = {
  updateEditingQuestion (_state, question) {
    _state.editingQuestion = question
  },
  setQuestions (_state, questions) {
    _state.all = questions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
