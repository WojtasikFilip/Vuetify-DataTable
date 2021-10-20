<template>
  <v-app>
    <v-app-bar app color="blue-grey lighten-5">
      <div class="d-flex align-center">
        <v-img class="mr-2 mt-10" src="../public/Camera.png" width="100" />

        <h1>Movies</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://www.imdb.com/movies-in-theaters/" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
