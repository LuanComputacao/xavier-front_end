const state = () => ({
  types: {
    OPEN: 1,
    UNIQUE_CHOICE: 2,
    MULTIPLE_CHOICE: 3
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
  }
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
