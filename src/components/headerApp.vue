<script>
import { state } from '../state.js';

export default {
    name: 'headerApp',
    data() {
        return {
            state,
        }
    },
    methods: {
        search() {
            const film_url = `${state.base_url}movie?api_key=${state.api_key}&query=${state.searchText}`
            const tv_url = `${state.base_url}tv?api_key=${state.api_key}&query=${state.searchText}`
            this.state.callApi(film_url, tv_url)
        }
    }
}

</script>

<template>

    <header>

        <div class="container">

            <div class="row">

                <div class="logo">
                    <h1>BOOTFLIX</h1>
                </div>

                <div class="searchBox">
                    <input type="text" v-model="state.searchText" placeholder="Search a movie" @keyup.enter="search">
                </div>

            </div>

        </div>

    </header>

</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    height: 7vh;
    background-color: rgb(17, 15, 15);

    .container {
        width: 80%;
        margin: auto;

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;

            .logo {
                color: rgb(171, 11, 11);
            }

            .searchBox {
                input {
                    padding: 0.3rem;
                    border-radius: 10px;
                    border: 1px solid lightgray;
                }
            }
        }
    }
}
</style>
