<template>
  <div class="question-answer">
    <textarea
      v-if="type == types.OPEN"
      maxlength="512"
      @keyup="updateAnswer"
      v-model="text"
    >
    </textarea>
    <div v-if="type == types.UNIQUE_CHOICE">
      <div v-for="(option, i) in question_items" :key="i">
        <input type="radio"
          :id="'question-option-' + i"
          :value="option.id"
          @change="updateAnswer"
          v-model="picked"
          >
        <label for="one">{{option.text}}</label>
      </div>
    </div>
    <div v-if="type == types.MULTIPLE_CHOICE">
      <div v-for="(option, i) in question_items" :key="i">
        <label for="">
        <input
          :id="'question-choice-' + i"
          type="checkbox"
          :value="question_choices_value[option.id]"
          @click="updateChoice(option.id)"
          :true-value="true"
          :false-value="false"
        >
        {{option.text}}</label>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'QuestionAnswer',
  props: {
    type: Number,
    question_items: Array,
    question_id: String
  },
  data: function () {
    return {
      types: {
        OPEN: 1,
        UNIQUE_CHOICE: 2,
        MULTIPLE_CHOICE: 3
      },
      text: '',
      picked: 'null',
      question_choices_value: {}
    }
  },

  mounted () {
    if (this.type === this.types.MULTIPLE_CHOICE) {
      this.question_items.forEach((e) => {
        this.question_choices_value[e.id] = false
      })
    }
  },

  methods: {
    updateAnswer () {
      this.updateAnswerAction({
        question_id: this.question_id,
        type: this.type,
        answer: this.chooseAnswerByType()
      })
    },

    chooseAnswerByType () {
      if (this.type === this.types.OPEN) {
        return this.text
      } else if (this.type === this.types.UNIQUE_CHOICE) {
        return this.picked
      } else if (this.type === this.types.MULTIPLE_CHOICE) {
        return this.question_choices_value
      }
    },

    updateChoice (id) {
      this.question_choices_value[id] = !(this.question_choices_value[id])
      this.updateAnswer()
    },
    ...mapActions('answers', { updateAnswerAction: 'updateAnswer' })
  }

}
</script>

<style>

</style>
