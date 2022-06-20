<template>
  <div class="container-card">
    <img class="poster" :src="assignImgPoster" :alt="item.title || item.name" />
    <div class="hover-menu p-3">
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
      </div>
      <div class="cast-movie">
        <p v-show="castMovie.length">
          <strong>Cast:</strong>
          <em v-for="(actorMovie, index) in castMovie" :key="actorMovie.id">
           <span v-if="index < 5"> {{ actorMovie.name }}<span v-if="index != 4">,</span><span v-else>.</span>
              </span>
          </em>
        </p>
      </div>

      <div class="cast-tv">
        <p v-show="castTv.length">
          <strong>Cast:</strong>
          <em v-for="(actorTv, index) in castTv" :key="actorTv.id">
            <span v-if="index < 5"> {{ actorTv.name }}<span v-if="index != 4">,</span><span v-else>.</span>
              </span>
          </em>
        </p>
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
  max-width: max-content;
  &:hover .hover-menu {
    display: block;
  }
  .poster {
    height: 513px;
    width: 342px;
    border: 1px solid red;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 2px #000000;
  }
  .hover-menu {
    display: none;
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
    /* animation: puff-in-ver 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both; */
    animation: flip-in-diag-1-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

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

@keyframes flip-in-diag-1-tr {
  0% {
    -webkit-transform: rotate3d(1, 1, 0, -80deg);
    transform: rotate3d(1, 1, 0, -80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate3d(1, 1, 0, 0deg);
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}

/* @keyframes puff-in-ver {
  0% {
    -webkit-transform: scaleY(2);
    transform: scaleY(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  } */
</style>