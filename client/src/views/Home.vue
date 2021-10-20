<template> 
<div>
  {{this.movies}}
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      movies: [],
    };
  },
  components: {},

  methods: {
    async getMovies() {
      const { data } = await axios({
        url: 'http://localhost:3000/movies',
        method: 'GET',
      });
      this.movies = data;
    },
  },
  created() {
    this.getMovies();
  },
};
</script>
