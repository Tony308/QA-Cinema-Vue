<template>
  <div id="post-account">
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->

    <navigation />
    <table style="margin-left:25px;">
      <thead>
      <th>First Name</th> <th> Surnames </th> <th>Account Number </th>
      </thead>
      <tr>
        <td><input v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input v-model="accNumber" placeholder="Account Number" alt="Account Number"/></td>
        <td><button v-on:click="getAccounts"> Edit </button></td>
        <td><button> Delete </button></td>
        <td>      <input type="submit" alt="Submit" v-on:click="createAccount"/>
        </td>
      </tr>
      <tr></tr><br>
      <tr v-for="item in tuples">
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.accountNumber}}</td>
      </tr>

    </table>
    <p id="confirmation"  v-bind:value="msg"> {{msg}}</p>
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
      msg: '',
      tuples: []
    }
  },
  mounted: function () {
    this.getAccounts()
  },
  methods: {
    getAccounts () {
      axios.get('http://www.localhost:8182/account/getAll')
        .then(response => {
          // JSON responses are automatically parsed.
          this.tuples = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    createAccount () {
      axios.post('http://www.localhost:8182/account/add', {
        'firstName': this.firstname,
        'lastName': this.Surname,
        'accountNumber': this.accNumber
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.tuples = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      this.getAccounts()
    },
    updateAccount () {
      axios.put('https://www.localhost:8182/account/edit/id', {
        'firstName': '',
        'lastName': '',
        'accountNumber': ''
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.tuples = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteAccount () {
      axios.delete('http://www.localhost:8182/account/delete/id', {
        'id': 0
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}

</script>
<style scoped>
  table tr td {
    margin: 5px;
    border: dashed red 2px;
  }
</style>
