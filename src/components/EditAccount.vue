<template>
  <div class="edit-account">
    <navigation>    </navigation>
    <table>
      <th>ID</th>
      <tr>
        <td><input type="text" placeholder="ID" name="id" v-model="id"></td><td><button v-on:click="deleteAccount"> Delete </button></td>
      </tr>
      <th>ID</th> <th>First Name</th><th>Last Name</th>
      <tr>
        <td><input v-model="id" placeholder="ID" alt="ID" type="text"></td>
        <td><input type="text" v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input type="text" v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><button v-on:click="updateAccount"> Edit </button></td>
      </tr>
      <a v-if="msg !== ''" id="confirmation" v-bind:value="msg"> {{msg}}</a>
    </table>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import axios from 'axios'
export default {
  name: 'EditAccount',
  components: {Navigation},
  data () {
    return {
      id: ''
    }
  },
  methods: {
    deleteAccount () {
      axios.delete('http://www.localhost:8182/account/delete/' + this.id)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      setTimeout(this.getAccounts, 200)
    },
    updateAccount () {
      axios.put('http://localhost:8182/account/edit/' + this.id, {
        'firstName': this.firstname,
        'lastName': this.Surname
      })
        .then(response => {
          // JSON responses are automatically parsed.
          this.tuples = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      setTimeout(this.getAccounts, 250)
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
    padding: 2%;
  }

</style>
