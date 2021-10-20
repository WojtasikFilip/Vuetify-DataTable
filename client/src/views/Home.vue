<template>
  <div class="ml-15 mr-15">
    <v-alert color="blue-grey" dark class="ma-10">
      Rent selected movies: {{ selectedMovie.toString() }}
    </v-alert>
    <v-data-table
      v-model="selectedItem"
      :headers="headers"
      :items="movies"
      :items-per-page="6"
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
      show-select
      class="elevation-1 text-center"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      selectedItem: [],
      headers: [
        { text: 'Title', align: 'start', value: 'title', class: 'blue-grey lighten-5' },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'main_genre', class: 'blue-grey lighten-5' },
        { text: 'Year', value: 'year', width: 100, class: 'blue-grey lighten-5' },
        { text: 'Rated', value: 'rated', width: 100, class: 'blue-grey lighten-5' },
        { text: 'Plot ', value: 'plot' },
      ],
    };
  },

  methods: {
    async getMovies() {
      const { data } = await axios({
        url: 'http://localhost:3000/movies',
        method: 'GET',
      });
      this.movies = data;
    },
  },

  computed: {
    selectedMovie() {
      return this.selectedItem.map((el) => el.title);
    },
  },

  created() {
    this.getMovies();
  },
};
</script>
