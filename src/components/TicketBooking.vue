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
                <option v-for="item in movies" :value="item.id" v-on:key="movie-id">{{item.Title}}</option>
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
              <input type="button" name="" value="Add Ticket to Order" v-on:click="addTicketsToOrder">
            </td>
          </tr>
        </table>
        <P v-if="orderID === -1"> {{msg}}</P>
        <input class="checkout-button" type="button" value="Create Order" v-on:click="addOrder">

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
      // //puts the ticket for order into an array
      // this.ticket = [this.selectedMovie, this.selectedTicket, this.quantity]
      // //Then puts the array inside another array.
      // this.orderTickets.push(this.ticket)
      // console.log(this.ticket)
      // setTimeout(this.selectedMovie = '', 200)
      // setTimeout(this.quantity = '', 200)
      // setTimeout(this.selectedTicket = '', 200)
    },
    addOrder () {
      axios.post('http://localhost:8182/order/add', {
        'email': 'pass@email.com',
        'movie': this.selectedMovie
      })
        .then(response => {
          this.orderID = response.data
          if (this.orderID === -1) {
            this.msg = 'Error. You need to create an account before you can make a booking.'
          }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTicketsToOrder () {
      axios.post('http://localhost:8182/order/ticket/add', {
        'order': this.orderID,
        'ticket': this.selectedTicket,
        'quantity': this.quantity
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      setTimeout(200)
      this.selectedTicket = ''
      this.selectedMovie = ''
      this.quantity = 0
    }
  },
  data: function () {
    return {
      movies: [],
      tickets: [],
      total: 0,
      selectedMovie: '',
      selectedTicket: '',
      quantity: 0,
      orderID: 0
    }
  },
  mounted: function () {
    // setTimeout(this.getOrders(), 200)
    setTimeout(this.getTickets(), 200)
    setTimeout(this.getMovies(), 200)
  }
}

</script>

<style scoped>

  table, tr, td {
    margin: 1%;
    border: solid black 2px;
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
