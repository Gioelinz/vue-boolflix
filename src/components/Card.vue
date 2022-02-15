<template>
  <div class="container-card">
    <img :src="assignImgPoster" :alt="item.title || item.name" />
    <h2>{{ item.title || item.name }}</h2>
    <h3>({{ item.original_title || item.original_name }})</h3>
    <img
      :src="assignImgLanguage(item.original_language)"
      width="60"
      height="40"
      :alt="item.original_language"
      :title="item.original_language"
    />
    <p>{{ item.vote_average }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  methods: {
    assignImgLanguage(language) {
      let flag;
      switch (language) {
        case "en":
          flag = require("../assets/img/en.png");
          break;
        case "it":
          flag = require("../assets/img/it.png");
          break;
        default:
          flag = require("../assets/img/global.png");
          break;
      }
      return flag;
    },
  },
  computed: {
    assignImgPoster() {
      return `https://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>