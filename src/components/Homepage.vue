<template>
  <div class="homepage">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
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
        <div class="item active">
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
      <h3>What's on</h3><br>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
      </div>
    </div>
    <br>

    <div class="container text-center" style="padding-bottom:3%;">
      <h3>Discounts</h3><br>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
        <div class="col-sm-4">
          <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '../components/Navigation'
import axios from 'axios'

export default {
  data () {
    return {
      apikey: '7813aa57',
      localhost: 'http://www.localhost:8182/'
    }
  },
  name: 'Homepage',
  components: {
    'navigation': navigation
  },
  mounted: function () {
    this.getPoster()
  },
  methods: {
    getPoster () {
      axios.get('http://www.omdbapi.com/?apikey=7813aa57&t=the+dark+knight')
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
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
  h3 {
    color:white;
  }

</style>
