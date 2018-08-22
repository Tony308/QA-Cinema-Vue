<template>
<div id="ticket-booking">
  <navigation/>
  <div class="content">
    <h1>QA Cinema</h1>
    <div class="main">
      <div class="demo">
        <table class="book-right">
          <tr>
            <td>Movie</td> <td>Ticket</td> <td>Quantity</td> <td v-if="total !== 0">Total</td>
          </tr>
          <tr>
            <td>
              <select name="movies" v-model="selectedMovie">
                <option v-for="item in movies" :value="item.Title" v-on:key="movie-id">{{item.Title}}</option>
              </select>
            </td>
            <td>
              <select name="tickets" v-model="selectedTicket">
                <option v-for="item in tickets" :value="item.price" v-on:key="movie-id"> {{item.type}}</option>
              </select>
            </td>
            <td>
              <input v-model="quantity" type="number" >
            </td>
            <td v-if="this.total !== 0"> {{total}}</td>
            <td>
              <input type="button" name="" value="Add to Cart" v-on:click="addToCart">
            </td>

          </tr>
        </table>
        <input class="checkout-button" type="button" value="Book Now">
        <div style="clear:both"></div>
      </div>
    </div>
    <p class="copy_rights">&copy; QA Cinema </p>
  </div>
</div>
</template>

<script>
import navigation from '../components/Navigation'
import axios from 'axios'

export default {
  name: 'TicketBookingFilm',
  components: {
    'navigation': navigation
  },
  data () {
    return {
      movies: [],
      tickets: [],
      orders: [],
      total: 0,
      selectedMovie: '',
      selectedTicket: '',
      quantity: 0,
      orderTickets: []
    }
  },
  methods: {
    getMovies () {
      axios.get('http://localhost:8182/movie/getAll')
        .then(response => {
          this.movies = response.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getOrders () {
      axios.get('http://localhost:8182/order/getAll')
        .then(response => {
          this.orders = response.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getTickets () {
      axios.get('http://localhost:8182/ticket/getAll')
        .then(response => {
          this.tickets = response.data
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
    },
    addToCart () {
      this.total = this.total + (this.quantity * this.selectedTicket)
      this.selectedMovie = ''
      this.quantity = 0
      this.selectedTicket = ''
    }
  },
  mounted: function () {
    this.getOrders()
    this.getTickets()
    this.getMovies()
  }
}
</script>

<style scoped>

  table, tr, td {
    margin: 1%;
    border: solid black 2px;
    padding:auto;
  }
  #ticket-booking {
    margin:auto;
    width: 100%;
  }

  .content {
    margin: 2% 10% 2% 10%;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  div.seatCharts-container {
    /*min-width: 700px;*/
  }
  div.seatCharts-cell {

    height: 16px;
    width: 16px;
    margin: 3px;
    float: left;
    text-align: center;
    outline: none;
    font-size: 13px;
    line-height:16px;
    color: blue;

  }
  div.seatCharts-seat {
    color: white;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: default;
  }
  div.seatCharts-seat:focus {
    border: none;
  }
  /*
  .seatCharts-seat:focus {
      outline: none;
  }
  */

  div.seatCharts-space {
    background: none;
  }
  div.seatCharts-row {
    height: 50px;
  }

  div.seatCharts-row:after {
    clear: both;
  }

  div.seatCharts-seat.selected {
    background-color: aqua;
  }

  div.seatCharts-seat.focused {
    background-color: #6db131;
  }

  div.seatCharts-seat.available {
    background-color: green;
  }

  div.seatCharts-seat.unavailable {
    background-color: red;
    cursor: not-allowed;
  }

  ul.seatCharts-legendList {
    list-style: none;
  }
  li.seatCharts-legendItem {
    margin-top: 10px;
    line-height: 2;
  }

</style>
