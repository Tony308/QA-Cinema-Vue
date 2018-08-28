<template>
  <div id="orders">
    <navigation/>
    <div>
      <table>
        <thead>
        <th>ID</th>
        </thead>
        <tr v-for="item in orders" v-on:key="item">
          <td> {{item.id}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import axios from 'axios'
export default {
  name: 'Orders',
  components: {Navigation},
  data () {
    return {
      orders: []
    }
  },
  methods: {
    getOrders () {
      axios.get('http://localhost:8182/order/getAll')
        .then(response => {
          this.orders = response.data
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
  #orders {
    width: 100%;
  }
  table {
    margin:5% 0 0 4%;
  }
  table tr td {
    margin: 5px;
    border: solid black 2px;
    padding:2% 4% 2% 4%;
  }

  th {
    margin: 5px;
    margin: 5px;
    border: solid black 2px;
    padding:2% 4% 2% 4%;
  }
</style>
