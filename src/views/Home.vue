<template>
  <div class="home">
    <QuestionContainer :question="question"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionContainer from '@/components/organisms/QuestionContainer.vue'

export default {
  name: 'Home',
  data: () => {
    return {
      question: {
        wording: 'Questãozinha bonitinha',
        items: [
          { id: 1, text: 'Primeira Opção' },
          { id: 2, text: 'Segunda Opção' }
        ]
      }
    }
  },
  components: {
    QuestionContainer
  }
}
</script>
