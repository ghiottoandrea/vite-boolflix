<script>
import { state } from '../state.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
    name: `mainApp`,

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

    <main>
        <div class="container">

            <h1 class="category" v-if="state.category">Movies</h1>
            <div class="row">
                <div class="col-3" v-for="movie in state.movies">

                    <div class="card">

                        <div class="card-front">
                            <img :src="`${state.image_url}${movie.poster_path}`" alt="" class="poster_img">
                        </div>
                        <!-- movie_card-front/ -->

                        <div class="card-back">

                            <div v-if="movie.title">
                                Titolo:
                                <div>
                                    {{ movie.title }}
                                </div>
                            </div>
                            <!-- movie-title/ -->

                            <div v-if="movie.original_title">
                                Titolo Originale:
                                <div>
                                    {{ movie.original_title }}
                                </div>
                            </div>
                            <!-- movie-original-title/ -->


                            <div v-if="movie.original_language">
                                Lingua:
                                <span
                                    :class="`fi fi-${languageFlags[movie.original_language] || movie.original_language}`"></span>
                            </div>
                            <!-- movie-original-language/ -->

                            <div>
                                Voto:
                                <span v-for="starClass in getValutationStar(movie.vote_average)">
                                    <i :class="starClass"></i>
                                </span>
                            </div>
                            <!-- movie-vote/ -->

                            <div v-if="movie.overview">
                                Resume:
                                <div>
                                    {{ movie.overview }}
                                </div>
                            </div>
                            <!-- movie-resume/ -->

                        </div>
                        <!-- movie_card-back/ -->

                    </div>
                    <!-- movie-card/ -->

                </div>
            </div>
            <!-- movie-cicle/ -->

            <h1 class="category" v-if="state.category">Tv Series</h1>
            <div class="row">
                <div class="col-3" v-for="tvSerie in state.tvSeries">

                    <div class="card">

                        <div class="card-front">
                            <img :src="`${state.image_url}${tvSerie.poster_path}`" alt="" class="poster_img">
                        </div>
                        <!-- tvseries_card-front/ -->

                        <div class="card-back">

                            <div v-if="tvSerie.name">
                                Titolo:
                                <div>
                                    {{ tvSerie.name }}
                                </div>
                            </div>
                            <!-- tvseries_name/ -->

                            <div v-if="tvSerie.original_name">
                                Titolo Originale:
                                <div>
                                    {{ tvSerie.original_name }}
                                </div>
                            </div>
                            <!-- tvseries-origin-name/ -->

                            <div v-if="tvSerie.original_language">
                                Lingua:
                                <span
                                    :class="`fi fi-${languageFlags[tvSerie.original_language] || tvSerie.original_language}`"></span>
                            </div>
                            <!-- tvseries-language/ -->

                            <div>
                                Voto:
                                <span v-for="starClass in getValutationStar(tvSerie.vote_average)">
                                    <i :class="starClass"></i>
                                </span>
                            </div>
                            <!-- tvseries-vote/ -->

                            <div v-if="tvSerie.overview">
                                Resume:
                                <div>
                                    {{ tvSerie.overview }}
                                </div>
                            </div>
                            <!-- tvseries-resume/ -->

                        </div>
                        <!-- tvseries_card-back/ -->


                    </div>
                    <!-- tvseries_card/ -->


                </div>
            </div>
            <!-- tvseries-cycle/ -->

        </div>
    </main>

</template>

<style>
main {
    height: 93vh;
    background-color: rgb(30, 29, 29);
    overflow-y: scroll;
}

.category {
    color: rgb(101, 11, 11);
    margin-top: 1rem;
}

.container {
    width: 80%;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-3 {
    width: calc((100%/12)*3);
}

.card {
    padding: 0.2rem;
    margin: 1rem 0.2rem 0;
    border: 1px solid lightgray;
    border-radius: 12px;
    height: 450px;

}

.card-front {
    padding: 0.2rem;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 12px;

    }

}

.card-back {
    display: none;
    height: 100%;
    padding: 0.5rem;
    font-size: 20px;
    color: rgb(217, 216, 216);


    div {
        margin-top: 0.2rem;
    }
}

.card:hover .card-back {
    display: block;
    overflow-y: scroll;
}

.card:hover .card-front {
    display: none;
}
</style>