<script>
import { state } from './state.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import searchBox from './components/searchBox.vue';
//import axios from 'axios';

export default {
    name: `App`,

    components: {
        searchBox
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>

    <searchBox />

    <ul v-for="movie in state.movies">
        <li>Titolo:<b> {{ movie.title }}</b></li>
        <li>Titolo Originale: {{ movie.original_title }}</li>
        <li>Lingua: {{ movie.original_language }}</li>
        <li>Voto: {{ movie.vote_average }}</li>
        <li><span :class="`fi fi-${movie.original_language}`"></span></li>

    </ul>

</template>

<style></style>