<script>
import { state } from './state.js';

import searchBox from './components/searchBox.vue';
import axios from 'axios';

export default {
    name: `App`,

    components: {
        searchBox
    },
    data() {
        return {
            state,
            movies: []
        }
    },
    methods: {
        searchMovies(searchMovie) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bc46d729b2821cc15efdf5ada3a491ac&query=${searchMovie}`)
                .then(response => {
                    console.log('searching...', searchMovie)
                    this.movies = response.data.results
                    console.log(this.movies);
                })
        }
    }
}
</script>

<template>

    <searchBox @performSearch="searchMovies" />

<ul v-for="movie in movies">
    <li>Titolo: {{ movie.title }}</li>
    <li>Titolo Originale: {{ movie.original_title }}</li>
    <li>Lingua: {{ movie.original_language }}</li>
    <li>Voto: {{ movie.vote_average }}</li>

</ul>

</template>

<style></style>