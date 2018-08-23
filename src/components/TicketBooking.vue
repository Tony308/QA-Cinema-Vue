<template>
<div>
  <title>Book Tickets Now!</title>
  <link src="@/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link src="@/css/one-page-wonder.css/one-page-wonder.min.css" rel="stylesheet">
  <link src="@/css/one-page-wonder.css" rel="stylesheet">
  <link src="@/css/jquery.seat-charts.css" rel="stylesheet">

  <navigation></navigation>
  <header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <h1 class="masthead-heading mb-0">Book Your Tickets</h1>
        <h2 class="masthead-subheading mb-0"></h2>
        <a src="#" class="btn btn-primary btn-xl rounded-pill mt-5">All Screenings</a>
        <a src="#" class="btn btn-primary btn-xl rounded-pill mt-5">Book Now!</a>
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  </header>
  <div align="Center">
  <div class="content">
    <br>
    <br>
    <h1>Fill out the fields below</h1>
        <form class="form-horizontal">
          <fieldset>
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="emailaddress"><b>Email Address</b></label>
              <div class="col-md-4">
                <input id="emailaddress" name="emailaddress" type="text" placeholder="" class="form-control input-md" required="">
              </div>
            </div>
            <!-- Select Location -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="Location"><b>Select your Location</b></label>
              <div class="col-md-4">
                <select id="Location" name="Location" class="form-control">
                  <option value="0">------ SELECT LOCATION ------</option>
                  <option value="1">Manchester Anchorage</option>
                  <option value="2">Manchester Trafford Centre</option>
                  <option value="3">Manchester The Printworks</option>
                  <option value="4">London </option>
                  <option value="5">Liverpool</option>
                  <option value="6">Birmingham</option>
                  <option value="7">Slough</option>
                </select>
              </div>
            </div>
            <!-- Multiple Radios -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="TicketType1"><b>Ticket Type</b></label>
              <div class="col-md-4">
                <div class="radio">
                  <label for="TicketType1">
                    <input type="checkbox" name="TicketType" id="TicketType1" value="1" checked="checked">
                    Adult
                  </label>
                  <select id="NoofTickets1" name="NoofTickets" class="form-control">
                    <option value="0"><b>------ SELECT TICKET QUANTITY ------</b></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div class="radio">
                  <label for="TicketType2">
                    <input type="checkbox" name="TicketType" id="TicketType2" value="2">
                    Child
                  </label>
                  <select id="NoofTickets2" name="NoofTickets" class="form-control">
                    <option value="0">------ SELECT TICKET QUANTITY------</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="dateselection"><b>Date</b></label>
              <div class="col-md-4">
                <input id="dateselection" name="dateselection" type="date" placeholder="" class="form-control input-md">
              </div>
            </div>

            <!-- Select Basic -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="timeselect"><b>Select Movie Time</b></label>
              <div class="col-md-4">
                <select id="timeselect" name="timeselect" class="form-control">
                  <option value="1">10:00am</option>
                  <option value="2">11:30am</option>
                  <option value="3">12:00pm</option>
                  <option value="4">13:00pm</option>
                  <option value="4">14:30pm</option>
                  <option value="4">15:00pm</option>
                  <option value="4">15:45pm</option>
                  <option value="4">16:30pm</option>
                  <option value="4">18:00pm</option>
                  <option value="4">19:30pm</option>
                  <option value="4">20:00pm</option>
                  <option value="4">20:30pm</option>
                  <option value="4">21:00pm</option>
                  <option value="4">21:30pm</option>
                  <option value="4">22:00pm</option>
                  <option value="4">23:30pm</option>
                </select>
              </div>
            </div>
            <a class="btn btn-primary btn-xl rounded-pill">Click to Book Now</a>
          </fieldset>
        </form>

<!--
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
-->
        <div style="clear:both"></div>

      </div>
      <br>
      <br>
      </div>
        <div>
        <footer class="py-5 bg-black">
          <div class="container">
            <p class="m-0 text-center text-white small">Copyright &copy; Your Website 2018</p>
          </div>
          <!-- /.container -->
        </footer>
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
  body{font-family:Lato}h1,h2,h3,h4,h5,h6{font-family:Catamaran;font-weight:800!important}
  .btn-xl{text-transform:uppercase;padding:1.5rem 3rem;font-size:.9rem;font-weight:700;letter-spacing:.1rem}
  .bg-black{background-color:#000!important}
  .rounded-pill{border-radius:5rem}
  .navbar-custom{padding-top:1rem;padding-bottom:1rem;background-color:rgba(0,0,0,.7)}
  .navbar-custom .navbar-brand{text-transform:uppercase;font-size:1rem;letter-spacing:.1rem;font-weight:700}
  .navbar-custom .navbar-nav .nav-item .nav-link{text-transform:uppercase;font-size:.8rem;font-weight:700;letter-spacing:.1rem}
  header.masthead{position:relative;overflow:hidden;padding-top:calc(7rem + 72px);padding-bottom:7rem;background:linear-gradient(0deg, #b368ff 0, #4970ee 100%);background-repeat:no-repeat;background-position:center center;background-attachment:scroll;background-size:cover}
  header.masthead .masthead-content{z-index:1;position:relative}
  header.masthead .masthead-content .masthead-heading{font-size:4rem}
  header.masthead .masthead-content .masthead-subheading{font-size:2rem}
  header.masthead .bg-circle{z-index:0;position:absolute;border-radius:100%;background:linear-gradient(0deg, #2e0d7a 0, #ff153d 100%)}
  header.masthead .bg-circle-1{height:90rem;width:90rem;bottom:-55rem;left:-55rem}
  header.masthead .bg-circle-2{height:50rem;width:50rem;top:-25rem;right:-25rem}
  header.masthead .bg-circle-3{height:20rem;width:20rem;bottom:-10rem;right:5%}
  header.masthead .bg-circle-4{height:30rem;width:30rem;top:-5rem;right:35%}
  @media (min-width:992px){header.masthead{padding-top:calc(10rem + 55px);padding-bottom:10rem}
    header.masthead .masthead-content .masthead-heading{font-size:6rem}
    header.masthead .masthead-content .masthead-subheading{font-size:4rem}}
  .bg-primary{background-color:#ee0979!important}
  .btn-primary{background-color:#6c757d;border-color:#6c757d}
  .btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color: #bd0429 !important;border-color:#bd0760!important}
  .btn-primary:focus{box-shadow:0 0 0 .2rem rgba(238,9,121,.5)}
  .btn-secondary{background-color:#ff6a00;border-color:#ff6a00}
  .btn-secondary:active,.btn-secondary:focus,.btn-secondary:hover{background-color:#c50!important;border-color:#c50!important}
  .btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(255,106,0,.5)}
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
