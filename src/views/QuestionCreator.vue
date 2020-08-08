<template>
  <div>

    <div>
      <div>
        <h2>Formul&aacute;rio</h2>
      </div>
      <form action="" method="POST">
        <hr/>
        <div>
          <label for="js-question-wording">Enunciado da questão</label><br/>
          <textarea
            name="question-wording"
            id="js-question-wording"
            rows="10"
            placeholder="Coloque aqui o enunciado"
            v-model="wording"
          >
          </textarea>
        </div>
        <hr/>
        <div>
          <div>Qual o tipo da questão?</div>
          <div v-for="(type, i) in questionsTypes" :key="i">
            <input type="radio"
              :id="'question-type-' + i"
              :value="type.code"
              v-model="question_type"
              >
            <label :for="'question-type-' + i">{{type.label}}</label>
          </div>
        </div>
        <div v-if="questionsTypes.OPEN.code !== question_type">
          <hr/>
          <label for="question-number-of-option">Número de opções da questão: </label>
          <input
            v-model="amountOfOptions"
            id="question-number-of-option"
            type="number"
            value="2"
            max="5"
            min="2">
        </div>
        <hr/>
        <div v-if="questionsTypes.OPEN.code !== question_type">
          <h3>Opções</h3>
          <div v-for="(i, k) in amountOfOptionsComp" :key="k">
            <input type="text">
          </div>
        </div>
      </form>
    </div>
    <hr/><hr/>
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
import { mapState } from 'vuex'
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
      question_id: '',
      question_type: 0,
      amountOfOptions: 1
    }
  },

  mounted () {
    this.question_type = this.questionsTypes.OPEN.code
  },

  computed: {
    question () {
      return {
        order: 1,
        wording: this.wording,
        type: this.question_type
      }
    },
    amountOfOptionsComp () {
      const a = []
      for (let i = 1; i <= this.amountOfOptions; i++) {
        a.push(i)
      }
      return a
    },
    ...mapState({
      questionsTypes: state => state.questions.types
    })
  }
}
</script>

<style>

</style>
