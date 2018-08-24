<template>
 <div>
  <title>Movie Listings</title>
  <link src="@/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link src="@/css/one-page-wonder.css/one-page-wonder.min.css" rel="stylesheet">
  <link src="@/css/one-page-wonder.css" rel="stylesheet">
  <link src="@/css/jquery.seat-charts.css" rel="stylesheet">
  <navigation></navigation>
  <!-- Contact Section -->
  <section id="Movie Listings">
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container"></div>
        <h1 class="masthead-heading mb-0">Movie Listings</h1>
        <h2 class="masthead-subheading mb-0"></h2>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
  </section>
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
  name: 'MovieListings',
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
    color: #000000;
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
    background-color: #2e0d7a;
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
</style>
