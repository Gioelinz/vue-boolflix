<template>
  <main>
    <div class="container">
      <!-- Risultato ricerca -->
      <h2
        class="text-center my-4"
        v-show="searchedMovies != 0 || searchedTV != 0"
      >
        Hai trovato
        <span class="text-danger">{{ searchedMovies.length }} </span>
        <a class="text-ref" href="#movies">Films</a> e
        <span class="text-danger">{{ searchedTV.length }} </span>
        <a class="text-ref" href="#series">Serie Tv</a>
      </h2>
      <!-- Sezione risultati -->
      <div id="movies" class="cards-container my-4" v-if="searchedMovies != 0">
        <h2 class="px-3 my-4 titles">Films</h2>
        <div class="row gy-5">
          <div
            class="col col-md-6 col-lg-4"
            v-for="movie in searchedMovies"
            :key="movie.id"
          >
            <Card :item="movie" :movie-id="movie.id" />
          </div>
        </div>
      </div>

      <div id="series" class="cards-container my-4" v-if="searchedTV != 0">
        <h2 class="px-3 my-4 titles">Serie Tv</h2>
        <div class="row gy-5">
          <div
            class="col col-md-6 col-lg-4"
            v-for="tv in searchedTV"
            :key="tv.id"
          >
            <Card :item="tv" :tv-id="tv.id" />
          </div>
        </div>
      </div>
      <div v-else-if="notFound" class="search_alert">
        <h2 class="text-danger">NON E' STATO TROVATO NESSUN RISULTATO</h2>
      </div>
      <div v-else class="search_alert">
        <h2>CERCA FILMS O SERIE TV&#11016;</h2>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Main",
  props: ["searchedMovies", "searchedTV", "notFound"],
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.text-ref {
  color: rgb(24, 24, 24);
  &:hover {
    color: #dc3545;
  }
}
</style>