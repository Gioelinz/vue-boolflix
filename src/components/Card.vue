<template>
  <div class="container-card">
    <h2>{{ title || name }}</h2>
    <h3>({{ original_title || original_name }})</h3>
    <img
      :src="assignImgLanguage(languageMov || languageTv)"
      width="60"
      height="40"
      :alt="title"
      :title="languageMov || languageTv"
    />
    <p>{{ averageMov || averageTv }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "title",
    "original_title",
    "languageMov",
    "averageMov",
    "name",
    "original_name",
    "languageTv",
    "averageTv",
  ],
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
};
</script>

<style lang="scss" scoped>
</style>