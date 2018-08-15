<template>
  <div id="post-account">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <navigation />
    <table style="margin-left:25px;">
      <thead>
      <th>First Name</th> <th> Surname </th> <th>Account Number </th>
      </thead>
      <tr>
        <td><input v-model="firstName" placeholder="First Name" alt="First Name"></td>
        <td><input v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input v-model="accNumber" placeholder="Account Number" alt="Account Number"/></td>
          <input type="submit" v-on:click="createAccount"/>
      </tr>
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
      items: [],
      firstName: '',
      Surname: '',
      accNumber: ''
    }
  },
  methods: {
    getAccounts () {
      axios.get('http://www.localhost:8182/Order')
        .then(function (response) {
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
      axios.post('http://www.localhost:8182/PATH', {
        firstname: this.firstName,
        surname: this.Surname,
        accountNumber: this.accNumber
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.getAccounts()
    }
  },
  mounted: function () {
    this.getAccounts()
  }
}
</script>
<style scoped>

</style>
