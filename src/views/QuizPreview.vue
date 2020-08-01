<template>
  <div>
    <h1>Quiz preview</h1>
    <div>
      <div v-for="(question, qId) in questions" :key="qId">
      <QuestionContainer :question="question" :question_id="qId"/>
    </div>
    </div>
  </div>
</template>

<script>
import QuestionContainer from '@/components/organisms/QuestionContainer.vue'
import { mapState } from 'vuex'

export default {
  name: 'QuizPreview',

  components: {
    QuestionContainer
  },

  computed: {
    ...mapState({
      questions: state => state.questions.all,
      answers: state => state.answers.all
    })
  }
}
</script>

<style>

</style>
