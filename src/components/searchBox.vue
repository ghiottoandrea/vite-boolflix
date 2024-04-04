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
            const url = `${state.base_url}?api_key=${state.api_key}&query=${state.searchText}`
            this.state.callApi(url)
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
