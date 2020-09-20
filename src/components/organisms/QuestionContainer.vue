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
  data () {
    return {
    }
  },
  name: 'QuestionContainer',
  props: {
    question: {
      type: Object,
      required: true,
      default: () => {
        return {
          order: 0,
          type: 1,
          wording: 'question wording',
          items: [
            { id: 1, text: 'First' },
            { id: 2, text: 'Second' }
          ]
        }
      }
    },
    question_id: {
      type: String,
      default: () => {
        return '#$#'
      }
    }
  },
  components: {
    QuestionWording,
    QuestionAnswer
  }
}
</script>

<style>
</style>
