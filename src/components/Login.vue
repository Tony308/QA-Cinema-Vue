<template>

  <div id="login">
    <navigation style="padding:1%;"/>
    <div class="container">
      <form id="contact" action="" method="post">
        <h3>Login</h3>
        <fieldset>
          <input type="text" placeholder="Username" tabindex="1" v-model="username" required autofocus>
        </fieldset>
        <fieldset>
          <input type="password" placeholder="Enter Password" name="psw" required tabindex="2">
        </fieldset>
        <fieldset>
          <a v-if="msg !== ''">{{msg}}</a>
        </fieldset>
        <fieldset>
          <button name="submit" id="contact-submit" v-on:click="login" type="submit" tabindex="3">Submit</button>
        </fieldset>

      </form>
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
      password: '',
      tuples: [],
      msg: '',
      state: ''
    }
  },
  methods: {
    login: function () {
      if (this.firstname === '') {
        this.msg = 'Please enter a firstname'
        return this.msg
      } else if (this.Surname === '') {
        this.msg = 'Please enter a Surname'
        return this.msg
      } else {
        this.msg = ''
      }

      axios.post('http://localhost:8182/account/login', {
        'accountNumber': this.username,
        'password': this.password
      }).then(response => {
        this.tuples = response.data
        console.log(response)
        if (response.data !== -1) {
          window.location.href = 'http://localhost:8080/account/'
        } else {
          this.msg = 'Login credentials incorrect.'
        }
      }).catch(response => {
        console.log(response)
      })
    }
  }
}

</script>

<style scoped>

  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    background: #4CAF50;
  }

  .container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea,
  #contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #af2b9e;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type="submit"]:hover {
    background: #6b0076;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }

  /* Full-width input fields */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
</style>
