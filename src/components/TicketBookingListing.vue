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
         <h1 class="masthead-heading mb-0">Ticket Booking</h1>
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
   <section>
     <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-6 order-lg-2">
           <div class="p-5">
             <img class="img-fluid rounded-circle" src="@/images/The incredibles2.jpeg" alt="">
           </div>
         </div>
         <div class="col-lg-6 order-lg-1">
           <div class="p-5">
             <h2 class="display-4">The Incredibles 2</h2>
             <p>Bob Parr takes a break from saving the world only to face up to his biggest challenge to date; managing the impressive superpowers of his baby son Jack-Jack while his wife is out busting criminals.</p>
             <router-link to="/book-ticket" replace>
             <a class="btn btn-primary btn-xl rounded-pill">Click to Book Now</a></router-link>
           </div>
         </div>
       </div>
     </div>
   </section>
   <section>
     <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-6">
           <div class="p-5">
             <img class="img-fluid rounded-circle" src="@/images/fallout-header.jpg" alt="">
           </div>
         </div>
         <div class="col-lg-6">
           <div class="p-5">
             <h2 class="display-4">Mission:Impossible FALLOUT </h2>
             <p>Ethan’s past returns to haunt him as the threat of nuclear terrorism casts a dark shadow over the world.</p>
             <router-link to="/book-ticket" replace>
               <a class="btn btn-primary btn-xl rounded-pill">Click to Book Now</a></router-link>
           </div>
         </div>
       </div>
     </div>
   </section>
   <section>
     <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-6 order-lg-2">
           <div class="p-5">
             <img class="img-fluid rounded-circle" src="@/images/ant-man-and-the-wasp.jpg" alt="">
           </div>
         </div>
         <div class="col-lg-6 order-lg-1">
           <div class="p-5">
             <h2 class="display-4">Marvel: ANT-MAN AND The WASP</h2>
             <p>As Scott Lang struggles to juggle his role as father with his Ant-Man duties, he is assigned a dangerous new mission that sees him team up with The Wasp.</p>
             <router-link to="/book-ticket" replace>
               <a class="btn btn-primary btn-xl rounded-pill">Click to Book Now</a></router-link>
           </div>
         </div>
       </div>
     </div>
   </section>
   <section>
     <div class="container">
       <div class="row align-items-center">
         <div class="col-lg-6">
           <div class="p-5">
             <img class="img-fluid rounded-circle" src="@/images/TheMEG.jpg" alt="">
           </div>
         </div>
         <div class="col-lg-6">
           <div class="p-5">
             <h2 class="display-4">The MEG</h2>
             <p>200 miles off the coast of China, a pre-historic monster emerges from extinction to threaten the crew of a submarine deep in its habitat… Jason Statham, Rainn Wilson, and Ruby Rose star in this thrilling tale about what happens when Man VS Beast goes supersized…</p>
             <router-link to="/book-ticket" replace>
               <a class="btn btn-primary btn-xl rounded-pill">Click to Book Now</a>
             </router-link>
           </div>
         </div>
       </div>
     </div>
   </section>

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
  name: 'TicketBooking',
  components: {
    'navigation': navigation
  },
  data () {
    return {
    }
  },
  getOrders () {
    axios.get('http://localhost:8182/order/getAll')
      .then(response => {
        this.orders = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
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
  header.masthead{position:relative;overflow:hidden;padding-top:calc(7rem + 72px);padding-bottom:7rem;background:linear-gradient(0deg, #ccf8ff 0, #4fafee 100%);background-repeat:no-repeat;background-position:center center;background-attachment:scroll;background-size:cover}
  header.masthead .masthead-content{z-index:1;position:relative}
  header.masthead .masthead-content .masthead-heading{font-size:4rem}
  header.masthead .masthead-content .masthead-subheading{font-size:2rem}
  header.masthead .bg-circle{z-index:0;position:absolute;border-radius:100%;background:linear-gradient(0deg, #4069ee 0, #ff5660 100%)}
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
</style>
