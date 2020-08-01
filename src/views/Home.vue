<template>
  <div class="home">
    <h1>Perguntas</h1>
    <div v-for="(question, qId) in questions" :key="qId">
      <QuestionContainer :question="question" :question_id="qId"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionContainer from '@/components/organisms/QuestionContainer.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      questions: state => state.questions.all,
      answers: state => state.answers.all
    })
  },

  components: {
    QuestionContainer
  }
}
</script>
