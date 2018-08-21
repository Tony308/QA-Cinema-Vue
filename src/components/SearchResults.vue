<template>
  <div>
  <navigation/>
    <ul v-for="movie in filterMovies()" :key="movie">
      <li>{{movie.Title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from './Navigation'
export default {
  name: 'SearchResults',
  props: ['searchTerm'],
  components: {Navigation},
  data: function () {
    return {
      movies: [],
      filteredMovies: [],
    }
  },
  mounted () {
    axios.get('http://www.localhost:8182/movie/getAll')
      .then(response => {
        this.movies = response.data
      })
  },
  methods: {
    filterMovies: function () {
      return this.movies.filter(movie => movie.Title.toUpperCase().includes(this.searchTerm.toUpperCase()))
    }
  }
}

</script>

<style scoped>

</style>
