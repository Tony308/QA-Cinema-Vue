<template>
  <div id="post-account">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <navigation />
    <table style="margin-left:25px;">
      <thead>
      <th>First Name</th> <th> Surnames </th> <th>Account Number </th>
      </thead>
      <tr>
        <td><input v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input v-model="accNumber" placeholder="Account Number" alt="Account Number"/></td>
        <td><button> Edit </button></td>
        <td><button> Delete </button></td>
        <td></td>
      </tr>
      <input type="submit" alt="Submit" v-on:click="createAccount"/>

      <tr v-for="item in items" :key="item">
        <td> {{item.firstName}}</td> <td>{{item.lastName}}</td> <td>{{item.accountNumber}}</td>
      </tr>
    </table>
    <p id="confirmation" v-bind:value="msg"> {{msg}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from './Navigation'
export default {
  name: 'AddAccount',
  components: {Navigation},
  data () {
    return {
      // props: ['items'],
      firstname: '',
      Surname: '',
      accNumber: '',
      items: [],
      msg: ''
    }
  },
  methods: {
    getAccounts () {
      axios.get('http://www.localhost:8182/account/getAll')
        .then(response => {
          this.items = response.data
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    createAccount () {
      axios.post('http://www.localhost:8182/account/add', {
        'firstName': this.firstname,
        'lastName': this.Surname,
        'accountNumber': this.accNumber
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.getAccounts()
    },
    updateAccount () {
      axios.put('https://www.localhost:8182/account/edit/id', {
        'firstName': '',
        'lastName': '',
        'accountNumber': ''
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    deleteAccount () {
      axios.delete('http://www.localhost:8182/account/delete/id', {
        'id': 0
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  mounted: function () {
    this.getAccounts()
  }
}
</script>
<style scoped>
  table tr td {
    margin: 5px;
  }
</style>
