<template>
  <div id="app">
    <div class="search">
      <input type="text" v-model="key" @keyup.enter="fetchApiMovies" />
      <button @click="fetchApiMovies">Cerca</button>
    </div>
    <div class="container">
      <div class="cards-container" v-if="searchedMovies != 0">
        <h1>Films</h1>
        <div class="row">
          <div class="col-3" v-for="movie in searchedMovies" :key="movie.id">
            <Card :item="movie" />
          </div>
        </div>
      </div>

      <div class="cards-container" v-if="searchedTV != 0">
        <h1>Serie Tv</h1>
        <div class="row">
          <div class="col-3" v-for="tv in searchedTV" :key="tv.id">
            <Card :item="tv" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      key: "",
      searchedMovies: [],
      searchedTV: [],
      apiMovie: "https://api.themoviedb.org/3/search/movie",
      apiTv: "https://api.themoviedb.org/3/search/tv",
      api_key: "de777000efc1bf0e53d7f663907ef833",
    };
  },
  methods: {
    fetchApiMovies() {
      const config = {
        params: {
          api_key: this.api_key,
          language: "it-IT",
          query: this.key,
        },
      };

      axios
        .all([axios.get(this.apiMovie, config), axios.get(this.apiTv, config)])
        .then(
          axios.spread((resMv, resTv) => {
            this.searchedMovies = resMv.data.results;
            this.searchedTV = resTv.data.results;
          })
        )
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>
