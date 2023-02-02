<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const search = ref('')
const movies = ref([])

const onSubmit = async () => {
  // we can do additional validation here
  if (search.value !== '') {
    const resp = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_ODB_APIKEY}&s=${
        search.value
      }`
    )
    const data = await resp.json()
    movies.value = data.Search

    search.value = ''
  }
}
</script>

<template>
  <main>
    <div class="home">
      <div class="featured-card">
        <RouterLink to="/movie/tt4154796">
          <img
            src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/03/D1pKLzbUYAAb0la.jpg-large.jpg"
            alt="end game poster"
            class="featured-img"
          />
          <div class="detail">
            <h3>Avengers: End Game</h3>
            <p>
              After the devastating events of Avengers: Infinity War (2018), the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face.
            </p>
          </div>
        </RouterLink>
      </div>
      <form @submit.prevent="onSubmit" class="search-box">
        <input
          type="text"
          placeholder="Enter any movie name and search!"
          v-model="search"
        />
        <input type="submit" value="Search" />
      </form>

      <div class="movie-list">
        <div class="movie" v-for="movie in movies" :key="movie.imdbID">
          <RouterLink :to="'/movie/' + movie.imdbID" class="movie-link">
            <div class="product-image">
              <img :src="movie.Poster" alt="Movie Poster" />
              <div class="type">{{ movie.Type }}</div>
            </div>
            <div class="detail">
              <p class="year">{{ movie.Year }}</p>
              <h3>{{ movie.Title }}</h3>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.home {
  .featured-card {
    @apply relative;

    .featured-img {
      @apply relative block w-full max-w-6xl object-cover z-0 m-auto;
      height: 300px;
    }

    .detail {
      @apply absolute left-0 right-0 bottom-0 z-10 p-4 w-full max-w-5xl m-auto;
      background-color: rgba(0, 0, 0, 0.6);

      h3 {
        @apply text-white text-2xl mb-4 font-semibold;
      }

      p {
        @apply text-white;
      }
    }
  }

  .search-box {
    @apply flex flex-col justify-center items-center p-4 max-w-5xl m-auto;

    input {
      @apply block appearance-none outline-none;
      background: none;
      border: none;

      &[type='text'] {
        @apply text-white w-full text-xl py-2.5 px-4 rounded-lg mb-4 duration-300;
        background-color: #496583;

        &::placeholder {
          @apply text-gray-50;
        }

        &:focus {
          @apply shadow-md;
        }
      }

      &[type='submit'] {
        @apply w-full max-w-xs p-4 rounded-lg text-white text-xl uppercase font-medium duration-300;
        background-color: #42b883;
      }

      &:active {
        background-color: #3b8070;
      }
    }
  }

  .movie-list {
    @apply flex flex-wrap mx-0 my-2 justify-center;

    .movie {
      @apply max-w-[50%] px-4 py-2;

      .movie-link {
        @apply flex flex-col h-full;

        .product-image {
          @apply relative block;

          img {
            @apply block object-cover w-72;
            height: 275px;
          }

          .type {
            @apply absolute px-2 py-4 text-white bottom-4 left-0 capitalize;
            background-color: #42b883;
          }
        }

        .detail {
          @apply px-4 py-2 rounded-b-lg w-auto sm:w-72;
          background-color: #496583;

          .year {
            @apply text-gray-50 text-sm;
          }

          h3 {
            @apply text-white text-base font-semibold;
          }
        }
      }
    }
  }
}
</style>
