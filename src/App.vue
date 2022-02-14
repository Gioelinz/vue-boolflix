<template>
  <div id="app">
    <input type="text" v-model="key" />
    <button @click="fetchApiMovies">Cerca</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      key: "",
      searchedMovie: [],
      apiMovie: "https://api.themoviedb.org/3/search/movie",
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

      axios.get(this.apiMovie, config).then((res) => {
        this.searchedMovie = res.data.results;
      });
    },
  },
};
</script>

<style lang="scss">
</style>
