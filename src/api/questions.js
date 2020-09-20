import axios from 'axios'

export default {
  async getQuestions (cb) {
    const res = await axios.get('http://localhost:5000/questions/')

    const questionsformated = {}
    res.data.forEach(question => {
      questionsformated[question.code] = {
        order: 1,
        wording: question.wording,
        type: question.answer_type,
        answer: {}
      }
    })
    cb(questionsformated)
  }
}
