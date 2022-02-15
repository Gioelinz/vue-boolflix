<template>
  <div class="container-card">
    <img :src="assignImgPoster" :alt="item.title || item.name" />
    <i class="fa-solid fa-star fa-lg"></i>
    <i class="fa-regular fa-star fa-lg"></i>
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
    <p>{{ averageFormat }}</p>
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
      if (!this.item.poster_path) {
        return require("../assets/img/no-poster.png");
      }
      return `https://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
    },
    averageFormat() {
      let vote;
      vote = this.item.vote_average;
      vote = vote / 2;
      vote = Math.ceil(vote);
      return vote;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>