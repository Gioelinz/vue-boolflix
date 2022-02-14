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
            <img
              :src="require(`${assignImgLanguage(movie.original_language)}`)"
              width="50"
              height="50"
              :alt="movie.title"
            />
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
      /*  const requestOne = this.apiMovie, config;
      const requestTwo = this.apiMovie, config; */
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
    assignImgLanguage(language) {
      let flag;
      switch (language) {
        case "en":
          flag = "./assets/img/en.png";
          break;
        case "it":
          flag = "./assets/img/it.png";
          break;
        default:
          flag = "./assets/img/global.png";
          break;
      }
      return flag;
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>
