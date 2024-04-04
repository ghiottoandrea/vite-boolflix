<script>
import { state } from './state.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
            //traduzione bandiere
            languageFlags: {
                "en": "us",
                "zh": "cn",
                "cn": "cn",
                "ja": "jp",
                "da": "dk",
            }
        }
    },
    methods: {
        getValutationStar(vote_average) {
            let stars = [];
            let vote = (vote_average / 2).toFixed(0);
            for (let i = 0; i < 5; i++) {
                if (i < vote) {
                    stars.push('fa-solid fa-star star');
                } else {
                    stars.push('fa-regular fa-star half_star');
                }
            }
            return stars;
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
                <li>Lingua:
                    <span :class="`fi fi-${languageFlags[movie.original_language] || movie.original_language}`"></span>
                </li>
                <li>Voto:
                    <span v-for="starClass in getValutationStar(movie.vote_average)">
                        <i :class="starClass"></i>
                    </span>
                </li>
                <li><img :src="`${state.image_url}${movie.poster_path}`" alt="" class="poster_img"></li>
            </ul>
        </div>

        <div class="col-6">
            <h3>Serie TV</h3>
            <ul v-for="tvSerie in state.tvSeries">
                <li>Titolo: <b> {{ tvSerie.name }}</b></li>
                <li>Titolo Originale: {{ tvSerie.original_name }}</li>
                <li>Lingua:
                    <span
                        :class="`fi fi-${languageFlags[tvSerie.original_language] || tvSerie.original_language}`"></span>
                </li>
                <li>Voto:
                    <span v-for="starClass in getValutationStar(tvSerie.vote_average)">
                        <i :class="starClass"></i>
                    </span>
                </li>
                <li><img :src="`${state.image_url}${tvSerie.poster_path}`" alt=""></li>

            </ul>
        </div>

    </div>
</template>

<style>
.d-flex {
    display: flex;
}

.col-6 {
    width: 50%;
    margin: 0 auto;
}

.star {
    color: rgb(247, 247, 6);
}
</style>