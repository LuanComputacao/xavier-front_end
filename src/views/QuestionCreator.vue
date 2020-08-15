<template>
  <div>

    <div>
      <div>
        <h2>Formul&aacute;rio</h2>
      </div>
      <div style="border: solid 1px">
        <QuestionContainerForm/>
      </div>
      <div>

      </div>
      <form action="" method="POST">
      </form>
    </div>
    <hr/><hr/>
    <div>
      <div>
        <h2>Preview de Quest&atilde;o</h2>
      </div>
      <QuestionContainer :question='question' />
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QuestionContainer from '../components/organisms/QuestionContainer'
import QuestionContainerForm from '../components/organisms/QuestionContainerForm'
export default {
  name: 'QuestionCreator',

  components: {
    QuestionContainer,
    QuestionContainerForm
  },

  data: function () {
    return {
      order: 0,
      type: 0,
      wording: '',
      items: [],
      question_id: '',
      question_type: 0,
      amountOfOptions: 2
    }
  },

  mounted () {
    this.question_type = this.questionsTypes.UNIQUE_CHOICE.code
  },

  computed: {

    question () {
      return {
        order: 1,
        wording: this.wording,
        type: this.question_type,
        items: this.itemsComp
      }
    },

    amountOfOptionsComp () {
      const a = []
      for (let i = 1; i <= this.amountOfOptions; i++) {
        a.push(i)
      }
      return a
    },

    itemsComp () {
      return this.items.slice(1).map((i, j) => {
        return { id: j + 1, text: i }
      })
    },

    ...mapState({
      questionsTypes: state => state.questions.types
    })
  }
}
</script>

<style>

</style>
