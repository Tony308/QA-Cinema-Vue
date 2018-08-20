<template>
  <div id="addOrder">
    <router-view></router-view>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <navigation/>
    <table>
      <thead>
      <th>Account</th><th> Ticket Order</th>
      </thead>
      <tr>
        <td> <input type="text" placeholder="Account Number" v-model="accNumber"/></td>
        <td> <input type="text" placeholder="Ticket Order"/> </td>
        <td><input type="button" value="Submit"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Navigation from './Navigation'
import Footer from '@/components/footer.vue'
export default {
  name: 'AddOrder',
  components: {Footer, Navigation}
}
</script>

<style scoped>
  table {
    margin-left:25px;
  }
</style>
