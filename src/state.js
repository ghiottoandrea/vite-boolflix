// 1. Import the reactive function from vue
import { reactive } from 'vue';
import axios from 'axios';

// 2. export a constant where you call the reactive function 
// inside the reactive function you need to pass a plain js object literal.

// Global state here
export const state = reactive({
  // State (your  data)
  base_url: 'https://api.themoviedb.org/3/search/',
  api_key: 'bc46d729b2821cc15efdf5ada3a491ac',
  searchText: '',
  movies: [],
  tvSeries: [],


  // Actions that change the state (your methods)
  callApi(film_url, tv_url) {

    axios.get(film_url)
      .then(response => {
        console.log('searching...', this.searchText)
        this.movies = response.data.results
        console.log(this.movies);
      })

    axios.get(tv_url)
      .then(response => {
        console.log('searching...', this.searchText)
        this.tvSeries = response.data.results
        console.log(this.tvSeries);
      })

  }
})