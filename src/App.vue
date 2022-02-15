<template>
  <div id="app">
    <Header @get-term="fetchApiMovies" />
    <main>
      <div class="container">
        <div class="cards-container" v-if="searchedMovies != 0">
          <h2 class="px-3 my-3 titles">Films</h2>
          <div class="row gy-5">
            <div
              class="col col-md-6 col-lg-4"
              v-for="movie in searchedMovies"
              :key="movie.id"
            >
              <Card :item="movie" />
            </div>
          </div>
        </div>

        <div class="cards-container" v-if="searchedTV != 0">
          <h2 class="px-3 my-3 titles">Serie Tv</h2>
          <div class="row gy-5">
            <div
              class="col col-md-6 col-lg-4"
              v-for="tv in searchedTV"
              :key="tv.id"
            >
              <Card :item="tv" />
            </div>
          </div>
        </div>
        <h2 class="search_alert" v-else>Cerca Films o Serie Tv!</h2>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

import Card from "./components/Card.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Card,
    Header,
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
    fetchApiMovies(term) {
      if (!term) {
        this.searchedMovies = [];
        this.searchedTV = [];
        return;
      }
      const config = {
        params: {
          api_key: this.api_key,
          language: "it-IT",
          query: term,
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

body {
  background-color: #434343;
  color: white;
  font-family: "Kanit", sans-serif;
  .titles {
    font-size: 3rem;
    text-decoration: underline;
  }
}
</style>
