<template>
  <div id="login">
    <navigation/>

    <div id="form">
    <div id="loginForm">
      Login<br>
      <input type="text" placeholder="Username" v-model="username"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <br>
    </div>
    <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import axios from 'axios'
export default {
  name: 'Login',
  components: {Navigation},
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:8182/account/login', {
        'accountNumber': this.username,
        'password': this.password
      }).then(function (response) {
        console.log(response)
        if (response.data !== -1) {
          window.location.href = 'http://localhost:8080/account/'
        }
      })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
  #form {
    display: block;
    max-width: 400px;
    width: 100%;
    margin: 5% auto;
    position: relative;
    border: solid red 2px;
    text-align: center;
  }
</style>
