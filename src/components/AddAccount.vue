<template>
  <div id="post-account">
    <nav/>
    <table>
      <thead>
      <th>First Name</th> <th> Surname </th> <th>Account Number </th>
      </thead>
      <tr>
        <form method="get">
        </form>
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
export default {
  name: 'AddAccount',
  data: function () {
    return {
      items: [],
      firstName: '',
      Surname: '',
      accNumber: ''
    }
  },
  methods: {
    getAccounts () {
      axios.get('localhost:PORT/PATH')
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
      axios.post('localhost:PORT/PATH', {
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
    }
  },
  mounted: function () {
    // this.getAccounts()
  }
}
</script>
<style scoped>

</style>
