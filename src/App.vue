<template>
  <v-app id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "put-net-website",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Monda", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #424242;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  padding: 0;
  margin: 0;
}
</style>
