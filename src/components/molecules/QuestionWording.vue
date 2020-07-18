<template>
  <div class="question-wording">
  <div>
    {{order}} - {{wording}}
  </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionWording',
  props: {
    order: Number,
    wording: String
  }
}
</script>
