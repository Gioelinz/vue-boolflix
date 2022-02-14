<template>
  <div id="app">
    <div class="search">
      <input type="text" v-model="key" @keyup.enter="fetchApiMovies" />
      <button @click="fetchApiMovies">Cerca</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="movie in searchedMovies" :key="movie.id">
          <div class="movie-card">
            <h2>{{ movie.title }}</h2>
            <h3>({{ movie.original_title }})</h3>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      key: "",
      searchedMovies: [],
      apiMovie: "https://api.themoviedb.org/3/search/movie",
      api_key: "de777000efc1bf0e53d7f663907ef833",
      languagesImg: {
        en: "./assets/img/en.png",
        it: "./assets/img/it.png",
      },
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

      axios.get(this.apiMovie, config).then((res) => {
        this.searchedMovies = res.data.results;
      });
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>
