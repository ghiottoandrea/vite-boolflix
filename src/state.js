// 1. Import the reactive function from vue
import { reactive } from 'vue';
import axios from 'axios';

// 2. export a constant where you call the reactive function 
// inside the reactive function you need to pass a plain js object literal.

// Global state here
export const state = reactive({
  // State (your  data)
  base_url: 'https://api.themoviedb.org/3/search/',
  image_url: 'https://image.tmdb.org/t/p/w342',
  api_key: 'bc46d729b2821cc15efdf5ada3a491ac',
  searchText: '',
  movies: [],
  tvSeries: [],
  category: false,

  ///https://image.tmdb.org/t/p/w342/AfFD10ZqEx2vkxM2yvRZkybsGB7.jpg
  // Actions that change the state (your methods)
  callApi(film_url, tv_url) {

    this.category = true
    
    axios.get(film_url)
      .then(response => {
        console.log('searching film...', this.searchText)
        this.movies = response.data.results
        console.log(this.movies);
      })

    axios.get(tv_url)
      .then(response => {
        console.log('searching tvseries...', this.searchText)
        this.tvSeries = response.data.results
        console.log(this.tvSeries);
      })

  }
})