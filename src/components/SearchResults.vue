<template>
  <div>
  <navigation/>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click = 'filterMovies'>Search</button>
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
  components: {Navigation},
  data: function () {
    return {
      movies: [],
      filteredMovies: [],
      search: ''
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
      return this.movies.filter(movie => movie.Title.toUpperCase().includes(this.search.toUpperCase()))
    }
  }
}

</script>

<style scoped>

</style>
