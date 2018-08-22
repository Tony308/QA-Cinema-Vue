import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/Homepage'
import addAccount from '@/components/AddAccount.vue'
import Login from '@/components/Login'
import account from '@/components/Account'
import ticketBookingList from '@/components/TicketBookingListing'
import bookTicket from '@/components/TicketBooking'
import Aboutus from '@/components/Aboutus'
import movielisings from '@/components/MovieListings'
import openingtimes from '@/components/OpeningTimes'
import contactus from '@/components/ContactUs'
// import nicescroll from '@/css/jquery.nicescroll.js'
// import seatchart from '@/css/jquery.seat-chart.js'
// import seatcharts2 from '@/css/jquery.seat-chart.js/jquery.seat-charts.min.js'
// import seatingscript from '@/css/scripts.js'
// import jquerynumber from '@/css/jquery.seat-charts.js/jquery-1.11.0.min.js'
// import seatmap from '@/JavaScript/Seatmap.js'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/add-account',
      name: 'createAccount',
      component: addAccount
    },
    {
      path: '/account/login',
      name: 'login',
      component: Login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/ticket-booking',
      name: 'ticket-booking',
      component: ticketBookingList
    },
    {
      path: '/book-ticket',
      name: 'book-ticket',
      component: bookTicket
    },
    {
      path: '/Aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/Movie-Listings',
      name: 'Movie-Listings',
      component: movielisings
    },
    {
      path: '/Opening-Times',
      name: 'Opening-Times',
      component: openingtimes
    },
    {
      path: '/Contact-Us',
      name: 'ContactUs',
      component: contactus
    }
    // {
    //   path: '/seat-chart',
    //   name: 'seat-chart',
    //   component: seatchart
    // },
    // {
    //   path: '/nice-scroll',
    //   name: 'nice-scroll',
    //   component: nicescroll
    // },
    // {
    //   path: '/seatchart-2',
    //   name: 'seatchart-2',
    //   component: seatcharts2
    // },
    // {
    //   path: '/seating-script',
    //   name: 'seatingscript',
    //   component: seatingscript
    // },
    // {
    //   path: '/jquery-number',
    //   name: 'jquery-number',
    //   component: jquerynumber
    // },
    // {
    //   path: '/seatmap',
    //   name: 'seatmap',
    //   component: seatmap
    // }
  ]
})
