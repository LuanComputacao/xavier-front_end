<template>
  <div>
      <div v-if="selectedType != null">
        <div v-if="types.OPEN.code !== selectedType.code">
          <label for="question-number-of-option">
            Número de opções da questão:
          </label>
          <input
            v-model="amountOfOptions"
            id="question-number-of-option"
            type="number"
            value="2"
            max="5"
            min="2"
          />
        </div>
        <div v-if="types.OPEN.code !== selectedType.code">
          <h3>Opções</h3>
          <div v-for="(i, k) in amountOfOptionsComp" :key="k">
            <input
              :id="'question_option_' + i"
              type="text"
              v-model="items[i]"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionAnswerForm',

  data: () => {
    return {
      items: [],
      amountOfOptions: 2
    }
  },

  props: {
    selectedType: {
      type: Object,
      default: () => {
        return {
          code: 0,
          label: '-'
        }
      }
    },
    types: {
      type: Object,
      required: false,
      default: () => {
        return {
          OPEN: {
            code: 1,
            label: 'Aberta'
          }
        }
      }
    }
  },

  computed: {
    amountOfOptionsComp () {
      const a = []
      for (let i = 1; i <= this.amountOfOptions; i++) {
        a.push(i)
      }
      return a
    }
  }
}
</script>

<style>
</style>
