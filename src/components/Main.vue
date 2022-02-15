<template>
  <main>
    <div class="container">
      <div class="cards-container" v-if="searchedMovies != 0">
        <h2 class="px-3 my-4 titles">Films</h2>
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
        <h2 class="px-3 my-4 titles">Serie Tv</h2>
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

<style>
</style>