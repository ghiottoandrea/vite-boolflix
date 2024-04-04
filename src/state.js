// 1. Import the reactive function from vue
import { reactive } from 'vue';
import axios from 'axios';

// 2. export a constant where you call the reactive function 
// inside the reactive function you need to pass a plain js object literal.

// Global state here
export const state = reactive({
  // State (your  data)
  base_url: 'https://api.themoviedb.org/3/search/movie',
  api_key: 'bc46d729b2821cc15efdf5ada3a491ac',
  searchText: '',
  movies: [],


  // Actions that change the state (your methods)
  callApi(url) {

    axios.get(url)
      .then(response => {
        console.log('searching...', this.searchText)
        this.movies = response.data.results
        console.log(this.movies);
      })
  }
})