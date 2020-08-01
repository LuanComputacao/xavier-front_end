<template>
  <div class="home">
    <h1>Home</h1>
    <div>{{beHappy}}</div>
    <div>
      <input
        type="text"
        v-model="nome"
        placeholder="Seu nome"
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data () {
    return {
      nome: ''
    }
  },
  computed: {
    beHappy () {
      return 'Be happy ' + this.nome + '!'
    }
  }
}
</script>
