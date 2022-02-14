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
      apiMovie: "https://api.themoviedb.org/3/search/movie",
      apiTv: "https://api.themoviedb.org/3/search/tv",
      api_key: "de777000efc1bf0e53d7f663907ef833",
      languagesImg: "",
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
    assignImgLanguage(language) {
      switch (language) {
        case "en":
          this.languagesImg = "./assets/img/en.png";
          break;
        case "it":
          this.languagesImg = "./assets/img/it.png";
          break;
        default:
          this.languagesImg = "./assets/img/global.png";
          break;
      }
      return this.languagesImg;
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>
