<template>
  <div>

    <div>
      <div>
        <h2>Formul&aacute;rio</h2>
      </div>
      <form action="" method="POST">
        <label for="js-question-wording">Enunciado da questão</label><br/>
        <textarea
          name="question-wording"
          id="js-question-wording"
          rows="10"
          placeholder="Coloque aqui o enunciado"
          v-model="wording"
        >
        </textarea>
      </form>
    </div>
    <div>
      <div>
        <h2>Preview de Quest&atilde;o</h2>
      </div>
      <QuestionContainer
        :question='question'
      />
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import QuestionContainer from '../components/organisms/QuestionContainer'
export default {
  name: 'QuestionCreator',

  components: {
    QuestionContainer
  },

  data: function () {
    return {
      order: 0,
      type: 0,
      wording: '',
      items: [],
      question_id: ''
    }
  },

  computed: {
    question () {
      return {
        order: 1,
        wording: this.wording
      }
    }
  }
}
</script>

<style>

</style>
