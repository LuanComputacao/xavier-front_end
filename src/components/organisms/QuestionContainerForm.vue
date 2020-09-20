<template>
  <div>
    <QuestionWordingForm @update-wording="updateWording" />

    <QuestionAnswerTypeForm
      :types="questionsTypes"
      @update-type="updateType"
    />

    <QuestionAnswerForm
      :types="questionsTypes"
      :selectedType="type"
      @update-items="updateItems"
    />
  </div>
</template>

<script>
import QuestionWordingForm from '../molecules/QuestionWordingForm'
import QuestionAnswerTypeForm from '../molecules/QuestionAnswerTypeForm'
import QuestionAnswerForm from '../molecules/QuestionAnswerForm'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'QuestionContainerForm',

  components: {
    QuestionWordingForm,
    QuestionAnswerTypeForm,
    QuestionAnswerForm
  },

  data: function () {
    return {
      order: 0,
      type: null,
      wording: '',
      items: [],
      amountOfOptions: 2
    }
  },

  computed: {
    ...mapState({
      questionsTypes: state => state.questions.types,
      editingQuestion: state => state.questions.editingQuestion
    })
  },

  methods: {
    ...mapActions('questions', [
      'updateEditingQuestion'
    ]),

    updateWording (wording) {
      this.updateEditingQuestion({ ...this.editingQuestion, wording: wording })
    },

    updateItems (items) {
      this.updateEditingQuestion({ ...this.editingQuestion, items: items })
    },

    updateType (type) {
      type = Number.parseInt(type)
      const typeNames = Object.getOwnPropertyNames(this.questionsTypes)
      for (let i = 0; i < typeNames.length; i++) {
        const currentType = this.questionsTypes[typeNames[i]]
        if (this.questionsTypes[typeNames[i]].code === type) {
          this.type = currentType
          this.updateEditingQuestion({ ...this.editingQuestion, type: currentType.code })
          break
        }
      }
    }
  }
}
</script>

<style>
</style>
