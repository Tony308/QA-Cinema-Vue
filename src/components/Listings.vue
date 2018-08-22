<template>
  <div class="Listings">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!--NAV-->
    <navigation/>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox" style="background-color:black;">
      <div class="item active">
        <img class="carousel-image" src="@/images/Equalizer_2.jpg" alt="Equalizer 2" style="width:100%;height:635px;">
        <div class="carousel-caption">
          <h3>Coming Soon</h3>
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

    <div class="listings">
      <ul>
        <li v-for="item in rows" v-on:key="id-rows">
          <div class="container">
            <img :src="item.Poster" class="image">
            <div class="overlay">
              <div class="text"><h4> {{item.Title}}</h4><br>
                <p style="width: 250px;font-size: 15px">{{item.Released}}</p>
                <p style="width: 250px;font-size: 15px">{{item.Genre}}</p>
                <p style="width: 250px;font-size: 15px">{{item.Runtime}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import navigation from '@/components/Navigation'
import axios from 'axios'
export default {
  data () {
    return {
      rows: []
    }
  },
  name: 'Listings',
  components: {
    'navigation': navigation
  },
  mounted: function () {
    this.getMovie()
  },
  methods: {
    getMovie () {
      axios.get('http://www.localhost:8182/movie/getAll')
        .then(response => {
          this.rows = response.data
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .carousel-image {
    width:100%;
    height:200px;
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
  .container {
    width:100%;
    text-align:center;
    align:center;
    margin-left: 25%;
  }

  .image {
    display: inline-block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #008CBA;
    margin-left: 25%;

  }

  .container:hover .overlay {
    opacity: 1;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
  li {
    display:inline-block;
    position: relative;
  }
  listings {
  }

</style>
