<template>
  <div class="homepage">
    <title>Welcome to QA Cinema's</title>
    <link src="@/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!--<link rel="stylesheet" href="../css/homepage.css">-->
      <!-- Custom fonts for this template -->
      <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

      <!-- Custom styles for this template -->
      <link src="@/css/one-page-wonder.css/one-page-wonder.min.css" rel="stylesheet">
      <link src="@/css/one-page-wonder.css" rel="stylesheet">
      <link src="@/css/jquery.seat-charts.css" rel="stylesheet">
      <navigation></navigation>
      <!-- Contact Section -->
      <section id="homepage">
            <!--<div class="container"></div>-->
            <h1 class="masthead-heading mb-0 text-center text-black" style="margin-top: 0px">QA Cinema's</h1>
      </section>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
       <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

       <!--Wrapper for slides-->
      <div class="carousel-inner" role="listbox" style="background-color:black;">
        <div class="item active" >
          <!--<img src="https://placehold.it/1200x400?text=IMAGE" alt="Image">-->
          <img class="carousel-image" src="@/images/incredibles-2.jpg" alt="Incredibles 2" style="width:100%;height:635px;">
          <div class="carousel-caption">
            <h3>Out Now</h3>
            <p>Book Now</p>
          </div>
        </div>

        <div class="item">
          <!--<img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">-->
          <img class="carousel-image" src="@/images/antmanandthewasp.jpg" alt="Ant man and the wasp" style="width:100%;height:635px;">
          <div class="carousel-caption">
            <h3>Out 4th July </h3>
            <p> Book Now </p>
          </div>
        </div>

        <div class="item">
          <img class="carousel-image" src="@/images/fallout.jpg" alt="Mission Impossible: Fallout" style="width:100%;height:635px;">
          <div class="carousel-caption">
            <h3>Out Now</h3>
            <p>Book Now</p>
          </div>
        </div>
      <div class="item">
        <img class="carousel-image" src="@/images/equalizer.jpg" alt="Equalizer 2" style="width:100%;height:635px;">
        <div class="carousel-caption">
          <h3>Out Now</h3>
          <p>Book Now</p>
        </div>
      </div>
    </div>
       <!--Left and right controls-->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="container text-center" style="padding-bottom:3%;">
      <br>
      <div class="row">
        <!--IMAGE-->
        <div class="col-sm-4" v-for="item in movies" >
          <img :src="item.Poster" class="img-responsive" style="width:100%" alt="Image">
          <a class="movie-title" style="color:white;">{{item.Title}}</a>
        </div>
      </div>
    </div>
    <br>
    <!--Footer -->
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
import Footer from './Footer'

export default {
  data () {
    return {
      apikey: '7813aa57',
      localhost: 'http://www.localhost:8182/',
      movies: []
    }
  },
  name: 'Homepage',
  components: {
    Footer,
    'navigation': navigation
  },
  mounted: function () {
    setTimeout(this.getPoster())
  },
  methods: {
    getPoster () {
      axios.get('http://localhost:8182/movie/getAll')
        .then(response => {
          // handle success
          this.movies = response.data
          console.log(response)
        })
        .catch(error => {
          // handle error
          console.log(error)
        })
    }
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
    /*display: inline-block;*/
    margin: 0 10px;
  }
  a {
    color: #000000;
  }
  body{font-family:Lato}h1,h2,h3,h4,h5,h6{font-family:Catamaran;font-weight:800!important}
  .btn-xl{text-transform:uppercase;padding:1.5rem 3rem;font-size:.9rem;font-weight:700;letter-spacing:.1rem}
  .bg-black{background-color:#000!important}
  .rounded-pill{border-radius:5rem}
  .navbar-custom{padding-top:1rem;padding-bottom:1rem;background-color:rgba(0,0,0,.7)}
  .navbar-custom .navbar-brand{text-transform:uppercase;font-size:1rem;letter-spacing:.1rem;font-weight:700}
  .navbar-custom .navbar-nav .nav-item .nav-link{text-transform:uppercase;font-size:.8rem;font-weight:700;letter-spacing:.1rem}
  header.masthead{position:relative;overflow:hidden;padding-top:calc(7rem + 72px);padding-bottom:7rem;background:linear-gradient(0deg, #ff153d 0, #3022ee, #070721 100%);background-repeat:no-repeat;background-position:center center;background-attachment:scroll;background-size:cover}
  header.masthead .masthead-content{z-index:1;position:relative}
  header.masthead .masthead-content .masthead-heading{font-size:4rem}
  header.masthead .masthead-content .masthead-subheading{font-size:2rem}
  header.masthead .bg-circle{z-index:0;position:absolute;border-radius:100%;background:linear-gradient(0deg, #2e0d7a 0, #bd0429 100%)}
  header.masthead .bg-circle-1{height:90rem;width:90rem;bottom:-55rem;left:-55rem}
  header.masthead .bg-circle-2{height:50rem;width:50rem;top:-25rem;right:-25rem}
  header.masthead .bg-circle-3{height:20rem;width:20rem;bottom:-10rem;right:5%}
  header.masthead .bg-circle-4{height:30rem;width:30rem;top:-5rem;right:35%}
  @media (min-width:500px){header.masthead{padding-top:calc(1rem + 1px);padding-bottom:1rem}
    header.masthead .masthead-content .masthead-heading{font-size:8rem}
    header.masthead .masthead-content .masthead-subheading{font-size:4rem}}
  .bg-primary{background-color:#ee0979!important}
  .btn-primary{background-color:#6c757d;border-color:#6c757d}
  .btn-primary:active,.btn-primary:focus,.btn-primary:hover{background-color: #bd0429 !important;border-color:#bd0760!important}
  .btn-primary:focus{box-shadow:0 0 0 .2rem rgba(238,9,121,.5)}
  .btn-secondary{background-color:#ff6a00;border-color:#ff6a00}
  .btn-secondary:active,.btn-secondary:focus,.btn-secondary:hover{background-color:#c50!important;border-color:#c50!important}
  .btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(255,106,0,.5)}
  .img-responsive {
    display: inline-block;

    padding: 5%;
  }
  .carousel-image {
    width:100%;
    height:635px;
  }
  .carousel-inner img {
    width: 100%; /* Set width to 100% */
    margin: auto;
    min-height:200px;
  }
  .carousel-caption {
    text-shadow: 1px 0 black,
    0 1px black,
    2px 0 black,
    0 1px black;
  }

  /* Hide the carousel text when the screen is less than 600 pixels wide */
  @media (max-width: 600px) {
    .carousel-caption {
      display: none;
    }
  }
  .homepage {
    background-color: #f7f8f9;
  }
  h1 {
    color: #000000;
    font-size: 50px;
    margin: 5% 0 3% 0;
    align-items: center;
  }
  .col-sm-4{
    margin:0%;
    padding:0%;
  }
  img {
    height:100%;
  }
</style>
