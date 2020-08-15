<template>
  <div>
    <div>Qual o tipo da questão?</div>
    <div v-for="(type, i) in types" :key="i">
      <input
        type="radio"
        name="question-type"
        :id="'question-type-' + i"
        :value="type.code"
        @change="$emit('update-type', $event.target.value)"
      />
      <label :for="'question-type-' + i">{{type.label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionAnswerTypeForm',
  props: {
    types: {
      type: Object,
      required: false,
      default: () => {
        return {
          code: 0,
          label: '-'
        }
      }
    }
  }
}
</script>

<style>
</style>
