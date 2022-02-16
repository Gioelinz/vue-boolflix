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
import axios from "axios";

export default {
  name: "Card",
  props: ["item", "movieId", "tvId"],
  data() {
    return {
      isHover: false,
      totalStars: 5,
      castMovie: [],
      castTv: [],
      apiCast: {
        api_key: "de777000efc1bf0e53d7f663907ef833",
        baseUriMovie: "https://api.themoviedb.org/3/movie/",
        baseUriTv: "https://api.themoviedb.org/3/tv/",
        endUri: "/credits",
      },
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

    /* apiCallCast(url, array) {
      axios
        .get(url)
        .then((res) => {
          this[array] = res.data.cast;
        })
        .catch((err) => {
          console.log(err);
        });
    }, */

    fetchApiCredits() {
      const { api_key, baseUriMovie, baseUriTv, endUri } = this.apiCast;

      const config = {
        params: {
          api_key,
          language: "it-IT",
        },
      };
      const movieUrl = baseUriMovie + this.movieId + endUri;
      const tvUrl = baseUriTv + this.tvId + endUri;

      if (this.movieId) {
        axios
          .get(movieUrl, config)
          .then((res) => {
            this.castMovie = res.data.cast;
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (this.tvId) {
        axios
          .get(tvUrl, config)
          .then((res) => {
            this.castTv = res.data.cast;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },

  mounted() {
    this.fetchApiCredits();
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
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(#000, 0.9);
    border-radius: 15px;
    width: 342px;
    height: 513px;
    overflow-y: auto;
    animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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

@keyframes swing-in-bottom-bck {
  0% {
    -webkit-transform: rotateX(-70deg);
    transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    opacity: 1;
  }
}
</style>