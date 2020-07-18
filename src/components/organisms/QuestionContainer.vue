<template>
  <div class="question">
     <QuestionWording
      :order="1"
      :wording="question.wording"
    />
    <QuestionAnswer
      :type='3'
      :question_items="question.items"
    />
  </div>
</template>

<script>
import QuestionAnswer from '@/components/molecules/QuestionAnswer.vue'
import QuestionWording from '@/components/molecules/QuestionWording.vue'

export default {
  name: 'QuestionContainer',
  props: {
    question: Object
  },
  components: {
    QuestionWording,
    QuestionAnswer
  }
}
</script>

<style>

</style>
