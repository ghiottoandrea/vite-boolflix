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
            state,
            languageFlags: {
                "en": "us",
                "zh": "cn",
                "cn": "cn",
                "ja": "jp",
                "da": "dk",
            }
        }
    }
}
</script>

<template>

    <searchBox />
    <div class="d-flex">

        <div class="col-6">
            <h3>Film</h3>
            <ul v-for="movie in state.movies">
                <li>Titolo: <b> {{ movie.title }}</b></li>
                <li>Titolo Originale: {{ movie.original_title }}</li>
                <li>Lingua: <span :class="`fi fi-${languageFlags[movie.original_language] || movie.original_language}`"></span></li>
                <li>Voto: {{ movie.vote_average }}</li>
            </ul>
        </div>

        <div class="col-6">
            <h3>Serie TV</h3>
            <ul v-for="tvSerie in state.tvSeries">
                <li>Titolo: <b> {{ tvSerie.name }}</b></li>
                <li>Titolo Originale: {{ tvSerie.original_name }}</li>
                <li>Lingua: <span :class="`fi fi-${languageFlags[tvSerie.original_language] || tvSerie.original_language}`"></span></li>
                <li>Voto: {{ tvSerie.vote_average }}</li>
            </ul>
        </div>

    </div>
</template>

<style>
.d-flex {
    display: flex;
}

.col-6{
    width: 50%;
    margin: 0 auto;
}
</style>