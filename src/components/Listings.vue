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
    <br>
    <div class="listings">
      <input style="width:25%; align:center; margin:auto;" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search"><br>
      <ul>
        <li v-for="movie in filterMovies()" :key="movie">
          <div class="container">
            <img :src="movie.Poster" class="image">
            <div class="overlay">
              <div class="text" style="border:solid white 2px; padding:1%;"><h4> {{movie.Title}}</h4><br>
                <p style="width: 250px;font-size: 15px">{{movie.Plot}}</p><br>
                <p style="width: 250px;font-size: 15px">{{movie.Released}}</p>
                <p style="width: 250px;font-size: 15px">{{movie.Genre}}</p>
                <p style="width: 250px;font-size: 15px">{{movie.Runtime}}</p>
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
      rows: [],
      filtered: [],
      search: ''
    }
  },
  name: 'Listings',
  components: {
    'navigation': navigation
  },
  mounted: function () {
    axios.get('http://www.localhost:8182/movie/getAll')
      .then(response => {
        this.rows = response.data
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    filterMovies () {
      return this.rows.filter(movie => movie.Title.toUpperCase().includes(this.search.toUpperCase()))
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
    margin-top:7%;
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
    opacity: 0.9  ;
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
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
