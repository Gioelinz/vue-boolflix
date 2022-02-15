<template>
  <div class="container-card">
    <img
      @mouseenter="isHover = true"
      class="poster"
      :src="assignImgPoster"
      :alt="item.title || item.name"
    />
    <div @mouseleave="isHover = false" v-if="isHover" class="hover-menu p-3">
      <h5><strong>Titolo: </strong>{{ item.title || item.name }}</h5>
      <h5 class="mb-0">
        <strong>Titolo originale: </strong>({{
          item.original_title || item.original_name
        }})
      </h5>
      <img
        class="my-2"
        :src="assignImgLanguage(item.original_language)"
        width="40"
        height="25"
        :alt="item.original_language"
        :title="item.original_language"
      />
      <div class="star-container">
        <strong>Voto: </strong>
        <i
          v-for="(star, index) in totalStars"
          :key="index"
          class="fa-star fa-lg"
          :class="[averageFormat > index ? 'fa-solid' : 'fa-regular']"
        ></i>
        <!-- <i
          v-for="(star, index) in averageFormat"
          :key="index"
          class="fa-solid fa-star fa-lg"
        ></i>
        <i
          v-for="(star, index, keyStars) in totalStars - averageFormat"
          :key="keyStars"
          class="fa-regular fa-star fa-lg"
        ></i> -->
      </div>
      <p>
        <strong>Trama: </strong
        ><em> {{ item.overview || "Non Disponibile" }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      isHover: false,
      totalStars: 5,
    };
  },

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
        case "de":
          flag = require("../assets/img/de.png");
          break;
        case "fr":
          flag = require("../assets/img/fr.png");
          break;
        default:
          flag = require("../assets/img/global.jpg");
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
.container-card {
  position: relative;
  .poster {
    height: 513px;
    width: 342px;
    border: 1px solid red;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 2px #000000;
  }
  .hover-menu {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(#000, 0.9);
    border-radius: 15px;
    width: 342px;
    height: 513px;
    overflow-y: auto;
    animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    em {
      font-weight: 200;
      font-size: 1.1rem;
    }
    .fa-star {
      color: #ffbd00;
    }
    .fa-star.fa-regular:hover {
      font-family: "Font Awesome 6 Free";
      font-weight: 600;
    }
  }
}
@keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
    transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>