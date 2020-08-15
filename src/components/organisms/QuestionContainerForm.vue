<template>
  <div>
    <QuestionWordingForm @update-wording="updateWording"/>

    <QuestionAnswerTypeForm
      :types="questionsTypes"
      @update-type="updateType"
    />

    <QuestionAnswerForm
      :types="questionsTypes"
      :selectedType="type"
    />
  </div>
</template>

<script>
import QuestionWordingForm from '../molecules/QuestionWordingForm'
import QuestionAnswerTypeForm from '../molecules/QuestionAnswerTypeForm'
import QuestionAnswerForm from '../molecules/QuestionAnswerForm'
import { mapState } from 'vuex'
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
      question_id: '',
      question_type: 0,
      amountOfOptions: 2
    }
  },

  computed: {
    ...mapState({
      questionsTypes: state => state.questions.types
    })
  },

  methods: {
    updateWording (wording) {
      this.wording = wording
    },
    updateType (type) {
      type = Number.parseInt(type)
      const typeNames = Object.getOwnPropertyNames(this.questionsTypes)
      for (let i = 0; i < typeNames.length; i++) {
        const currentType = this.questionsTypes[typeNames[i]]
        if (this.questionsTypes[typeNames[i]].code === type) {
          this.type = currentType
          break
        }
      }
    }
  }
}
</script>

<style>

</style>
