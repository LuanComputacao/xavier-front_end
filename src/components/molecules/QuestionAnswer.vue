<template>
  <div class="question-answer">
    <textarea v-if="type == 1" maxlength="512">
    </textarea>
    <div v-if="type == 2">
      <div v-for="(option, i) in question_items" :key="i">
        <input type="radio" :id="'question-option-' + i" :value="option.id" v-model="picked">
        <label for="one">{{option.text}}</label>
      </div>
    </div>
    <div v-if="type == 3">
      <div v-for="(option, i) in question_items" :key="i">
        <label for="">
        <input
          :id="'question-choice-' + i"
          type="checkbox"
          :value="question_choices_value[option.id]"
          @change="updateChoice(option.id)"
          :true-value="true"
          :false-value="false"
        >
        {{option.text}}</label>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionAnswer',
  props: {
    type: Number,
    question_items: Array
  },
  data: function () {
    return {
      picked: 'null',
      question_choices_value: {
        1: false,
        2: false
      }
    }
  },
  methods: {
    updateChoice (id) {
      this.question_choices_value[id] = !(this.question_choices_value[id])
    }
  }

}
</script>

<style>

</style>
