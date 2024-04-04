<script>
import { state } from '../state.js';

export default {
    name: 'searchBox',
    data(){
        return{
            state,
        }
    },
    methods: {
        search(){
            const film_url = `${state.base_url}movie?api_key=${state.api_key}&query=${state.searchText}`
            const tv_url = `${state.base_url}tv?api_key=${state.api_key}&query=${state.searchText}`
            this.state.callApi(film_url, tv_url)
        }
    }
}

</script>

<template>

<div class="searchBox">
    <input type="text" v-model="state.searchText" placeholder="Search a movie" @keyup.enter="search">
    <button @click="search" >Search</button>
</div>

</template>

<style>

</style>
