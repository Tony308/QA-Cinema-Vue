<template>
  <div class="homepage">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!--<link rel="stylesheet" href="../css/homepage.css">-->
    <!--NAV-->
    <navigation/>
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
          <img class="carousel-image" src="@/images/incredibles-2.jpeg" alt="Incredibles 2">
          <div class="carousel-caption">
            <h3>Out Now</h3>
            <p>Book Now</p>
          </div>
        </div>

        <div class="item">
          <!--<img src="https://placehold.it/1200x400?text=Another Image Maybe" alt="Image">-->
          <img class="carousel-image" src="@/images/ant+wasp poster.png" alt="Ant man and the wasp">
          <div class="carousel-caption">
            <h3>Out 4th July </h3>
            <p> Book Now </p>
          </div>
        </div>

        <div class="item">
          <img class="carousel-image" src="@/images/MI_Fallout.jpg" alt="Mission Impossible: Fallout" style="width:100%;height:635px;">
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
      <h1></h1>
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
    background-color:black;
  }
  h1 {
    color:white;
    font-size: 50px;
    margin: 5% 0 3% 0;
  }
  .col-sm-4{
    margin:0%;
    padding:0%;
  }
  img {
    height:100%;
  }

</style>
