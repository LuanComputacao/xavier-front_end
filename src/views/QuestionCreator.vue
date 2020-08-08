<template>
  <div>

    <div>
      <div>
        <h2>Formul&aacute;rio</h2>
      </div>
      <form action="" method="POST">
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

        <div>
          <div>Qual o tipo da questão?</div>
          <div v-for="(option, i) in questionsTypes" :key="i">
            {{option.code}}
            <input type="radio"
              :id="'question-type-' + i"
              :value="option.id"
              @change="updateAnswer"
              v-model="picked"
              >
            <label for="one">{{option.text}}</label>
          </div>
        </div>
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
      question_id: ''
    }
  },

  computed: {
    question () {
      return {
        order: 1,
        wording: this.wording
      }
    },
    ...mapState({
      questionsTypes: state => state.questions.types
    })
  }
}
</script>

<style>

</style>
