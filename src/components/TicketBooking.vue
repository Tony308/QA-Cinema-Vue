<template>
<div>

<navigation></navigation>
  <div class="content">
    <h1>Book Your Tickets</h1>
        <form class="form-horizontal">
          <fieldset>
            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="emailaddress">Email Address</label>
              <div class="col-md-4">
                <input id="emailaddress" name="emailaddress" type="text" placeholder="" class="form-control input-md" required="">
              </div>
            </div>
            <!-- Select Location -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="Location">Select your Location</label>
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
            <!-- Select Movie -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="Movie">Select your Movie</label>
              <div class="col-md-4">
                <select id="Movie" name="Movie" class="form-control">
                  <option value="0">------ SELECT MOVIE ------</option>
                  <option value="1">Incredibles 2</option>
                  <option value="2">Antman and the Wasp</option>
                  <option value="3">Misson Impossible: Fallout</option>
                  <option value="4">The Equalizer 2</option>
                  <option value="5">Mamma Mia</option>
                  <option value="6">The MEG</option>
                  <option value="7">Slender Man</option>
                  <option value="8">Tag</option>
                  <option value="9">Supporting the Girls</option>
                  <option value="10">Searching</option>
                  <option value="11">The Festival</option>
                  <option value="12">The Happytime Murders</option>
                  <option value="13">Disney's Christopher Robin</option>
                  <option value="14">The Spy Who Dumped Me</option>
                  <option value="15">ALPHA</option>
                </select>
              </div>
            </div>
            <!-- Select Number of Tickets -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="NoofTickets">Number of Tickets</label>
              <div class="col-md-4">
                <select id="NoofTickets" name="NoofTickers" class="form-control">
                  <option value="0">------ SELECT TICKETS ------</option>
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

            <!-- Multiple Radios -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="airboatsize">Airboat Size</label>
              <div class="col-md-4">
                <div class="radio">
                  <label for="airboatsize-0">
                    <input type="radio" name="airboatsize" id="airboatsize-0" value="1" checked="checked">
                    Small
                  </label>
                </div>
                <div class="radio">
                  <label for="airboatsize-1">
                    <input type="radio" name="airboatsize" id="airboatsize-1" value="2">
                    Large
                  </label>
                </div>
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="quantity">Number of People</label>
              <div class="col-md-4">
                <input id="quantity" name="quantity" type="text" placeholder="" class="form-control input-md">

              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="dateselection">Date</label>
              <div class="col-md-4">
                <input id="dateselection" name="dateselection" type="text" placeholder="" class="form-control input-md">

              </div>
            </div>

            <!-- Select Basic -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="timeselect">Time</label>
              <div class="col-md-4">
                <select id="timeselect" name="timeselect" class="form-control">
                  <option value="1">9:45a</option>
                  <option value="2">12p</option>
                  <option value="3">2p</option>
                  <option value="4">4p</option>
                </select>
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for="hotel">Hotel Name</label>
              <div class="col-md-4">
                <input id="hotel" name="hotel" type="text" placeholder="" class="form-control input-md">

              </div>
            </div>

            <!-- Multiple Checkboxes (inline) -->
            <div class="form-group">
              <label class="col-md-4 control-label" for="pickup">Hotel Pickup</label>
              <div class="col-md-4">
                <label class="checkbox-inline" for="pickup-0">
                  <input type="checkbox" name="pickup" id="pickup-0" value="1">
                  Yes
                </label>
              </div>
            </div>

          </fieldset>
        </form>

        <div style="clear:both"></div>
      </div>
      <br>
      <br>
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
