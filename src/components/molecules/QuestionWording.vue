<template>
  <div class="question-wording">
  <div>
    {{order}} - {{wording}} <small>[code:{{question_id}}]</small>
  </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionWording',
  props: {
    question_id: String,
    order: Number,
    wording: String
  }
}
</script>
