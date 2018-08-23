<template>
  <div id="post-account">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <navigation/>
    <table>
      <thead>
      <th>First Name</th> <th> Surnames </th> <th> Email </th> <th></th>
      </thead>
      <tr>
        <td><input type="text" v-model="firstname" placeholder="First Name" alt="First Name"></td>
        <td><input type="text" v-model="Surname" placeholder="Surname" alt="Surname"/></td>
        <td><input type="email" v-model="Email" placeholder="Email" alt="Email" > </td>
        <td><input type="submit" alt="Submit" v-on:click="createAccount"/>     </td>
      </tr><br>
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
      firstname: '',
      Surname: '',
      tuples: [],
      id: '',
      msg: '',
      Email: ''
    }
  },
  mounted: function () {
    setTimeout(this.getAccounts(), 100)
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
      if (this.firstname === '') {
        this.msg = 'You haven\'t entered a firstname'
      } else if (this.Surname === '') {
        this.msg = 'You haven\'t entered a surname'
      } else {
        this.msg = ''
      }

      axios.post('http://www.localhost:8182/account/add', {
        'firstName': this.firstname,
        'lastName': this.Surname,
        'email': this.Email
      })
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      setTimeout(this.getAccounts, 250)
      this.firstname = ''
      this.Surname = ''
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
  #post-account {
    width: 100%;
  }

</style>
