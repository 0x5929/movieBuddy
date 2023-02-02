<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const movie = ref({})
const route = useRoute()

onBeforeMount(async () => {
  const resp = await fetch(
    `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_ODB_APIKEY}&i=${
      route.params.id
    }&plot=full`
  )

  const data = await resp.json()
  movie.value = data
})
</script>
<template>
  <div class="movie-detail" v-if="Object.keys(movie).length > 0">
    <h2>{{ movie.Title }}</h2>
    <p class="year">{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-image" />
    <span
      class="ratings"
      v-for="(rating, index) in movie.Ratings"
      :key="rating.Source"
    >
      {{ `${rating.Source} : ${rating.Value}` }}
    </span>
    <span class="ratings">{{ 'IMDB : ' + movie.imdbRating }}</span>
    <p class="plot">{{ movie.Plot }}</p>
  </div>
</template>

<style lang="scss">
.movie-detail {
  @apply p-4 text-white text-center;

  h2 {
    @apply text-white text-2xl font-semibold mb-4 text-center;
  }

  .featured-image {
    @apply block max-w-5xl mb-4 mx-auto;
  }

  .year {
    @apply text-white text-base leading-6 text-center mb-2 mt-2;
  }

  .plot {
    @apply text-white text-lg leading-6 text-center mb-2 mt-2;
  }

  .ratings {
    @apply mx-2 font-semibold;
  }
}
</style>
