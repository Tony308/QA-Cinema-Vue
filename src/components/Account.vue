<template>
  <div id="account">
    <navigation/>
    <div>
      <table>
        <thead>
        <th>ID</th> <th>First Name</th> <th> Last Name</th> <th> Account Number </th>
        </thead>
        <tr v-for="item in tuples" v-on:key="id">
          <td>{{item.id}}</td> <td>{{item.firstName}}</td> <td> {{item.lastName}}</td> <td> {{item.accountNumber}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '@/components/Navigation'
export default {
  name: 'Account',
  components: {
    Navigation
  },
  data () {
    return {
      tuples: []
    }
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
    }
  },
  mounted: function () {
    this.getAccounts()
  }
}
</script>

<style scoped>
#account {
  width:100%;
}

table {
  margin:5% 0 0 4%;
}
table tr td {
  margin: 5px;
  border: solid black 2px;
  padding:2% 4% 2% 4%;
}

</style>
