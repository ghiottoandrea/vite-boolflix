<script>
export default {
    name: 'searchBox',
    data(){
        return{
            searchMovie: ''
        }
    },
    methods: {
        searchMovies(){
            this.$emit('performSearch', this.searchMovie)
        }
    }
}

</script>

<template>

<div class="searchBox">
    <input type="text" v-model="searchMovie" placeholder="Search a movie">
    <button @click="searchMovies" >Search</button>
</div>

</template>

<style>

</style>
