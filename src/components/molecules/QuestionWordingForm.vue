<template>
  <div>
    <label for="js-question-wording">Enunciado da questão</label>
    <br />
    <textarea
      name="question-wording"
      id="js-question-wording"
      rows="10"
      placeholder="Coloque aqui o enunciado"
      @keyup="$emit('update-wording', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'QuestionWordingForm'
}
</script>

<style>
</style>
