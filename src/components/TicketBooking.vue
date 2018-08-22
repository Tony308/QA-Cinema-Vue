<template>
<div>

<navigation></navigation>
  <div class="content">
    <h1>QA Cinema</h1>
    <div class="main">
      <div class="demo">
        <div id="seat-map">
          <div class="front">SCREEN</div>
        </div>
        <div class="booking-details">
          <ul class="book-left">
            <li>Movie </li>
            <li>Time </li>
            <li>Tickets</li>
            <li>Total</li>
            <li>Seats :</li>
          </ul>
          <ul class="book-right">
            <li>: Mission Impossible</li>
            <li>: April 3, 21:00</li>
            <li>: <span id="counter">0</span></li>
            <li>: <b><i>$</i><span id="total">0</span></b></li>
          </ul>
          <div class="clear"></div>
          <ul id="selected-seats" class="scrollbar scrollbar1"></ul>
          <button class="checkout-button">Book Now</button>
          <div id="legend"></div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
    <p class="copy_rights">&copy; QA Cinema </p>
  </div>
</div>
</template>

<script>
import navigation from '@/components/Navigation'
// import seatchart from '@/css/jquery.seat-chart.js'
import seatmap from '@/JavaScript/Seatmap.js'
// import nicescroll from '@/css/jquery.nicescroll.js'
// import seatcharts2 from '@/css/jquery.seat-chart.js/jquery.seat-charts.min.js'
// import seatingscript from '@/css/scripts.js'
// import jquerynumber from '@/css/jquery.seat-charts.js/jquery-1.11.0.min.js'

export default {
  name: 'TicketBookingFilm',
  components: {
    'navigation': navigation,
    'seatmap': seatmap
    // 'seatchart': seatchart
    // 'nicescroll': nicescroll,
    // 'seatcharts2': seatcharts2,
    // 'seatingscript': seatingscript,
    // 'jquerynumber': jquerynumber
  }
}
</script>

<style scoped>
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
