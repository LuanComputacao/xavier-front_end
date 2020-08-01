<template>
  <div class="question">
     <QuestionWording
      :order="question.order"
      :wording="question.wording"
      :question_id="question_id"
    />
    <QuestionAnswer
      :type='question.type'
      :question_items="question.items"
      :question_id="question_id"
    />
  </div>
</template>

<script>
import QuestionAnswer from '@/components/molecules/QuestionAnswer.vue'
import QuestionWording from '@/components/molecules/QuestionWording.vue'

export default {
  name: 'QuestionContainer',
  props: {
    question: Object,
    question_id: String
  },
  components: {
    QuestionWording,
    QuestionAnswer
  }
}
</script>

<style>

</style>
