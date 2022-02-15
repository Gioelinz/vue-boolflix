<template>
  <div id="app">
    <Header @get-term="fetchApiMovies" placeholder="Cerca qui..." />
    <Main
      :searched-movies="searchedMovies"
      :searchedTV="searchedTV"
      :not-found="notFound"
    />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      key: "",
      searchedMovies: [],
      searchedTV: [],
      notFound: false,
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
        this.notFound = false;
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
            if (
              resMv.data.results.length == 0 &&
              resTv.data.results.length == 0
            )
              this.notFound = true;
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
  h2 {
    color: rgb(24, 24, 24);
  }
  .search_alert {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
