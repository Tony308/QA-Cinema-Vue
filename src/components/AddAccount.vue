<template>
  <div id="post-account">
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->

    <navigation/>
    <table>
      <thead>
      <th>First Name</th> <th> Surnames </th> <th>Account Number </th>
      </thead>
      <tr>
        <td><input v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input v-model="accNumber" placeholder="Account Number" alt="Account Number"/></td>
        <td><input type="submit" alt="Submit" v-on:click="createAccount"/>     </td>
      </tr><br>
      <tr>
        <td>ID</td><td>First Name</td><td>Last Name</td><td>Account Number</td>
      </tr>
      <tr v-for="item in tuples">
        <td>{{item.id}}</td>
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.accountNumber}}</td>
      </tr>
    </table>

    <table>
      <tr>
        <td><input type="text" placeholder="ID" name="id" v-model="id"></td><td><button v-on:click="deleteAccount"> Delete </button></td>
      </tr>

      <tr>
        <td><input v-model="id" placeholder="ID" alt="ID" type="text"></td>
        <td><input type="text" v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input type="text" v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input type="text" v-model="accNumber" placeholder="Account Number" alt="Account Number"/></td>
        <td><button v-on:click="updateAccount"> Edit </button></td>
      </tr>
        <p id="confirmation" v-bind:value="msg"> {{msg}}</p>
    </table>
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
      tuples: [],
      id: ''
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
      setTimeout(this.getAccounts, 500)
    },
    updateAccount () {
      axios.put('http://localhost:8182/account/edit/' + this.id, {
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
      setTimeout(this.getAccounts, 500)
    },
    deleteAccount () {
      axios.delete('http://www.localhost:8182/account/delete/' + this.id)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      setTimeout(this.getAccounts, 500)

    }
  }
}

</script>
<style scoped>
  table {
    margin:1%;
  }
  table tr td {
    margin: 5px;
    border: solid black 2px;
    padding:2%;
  }
</style>
