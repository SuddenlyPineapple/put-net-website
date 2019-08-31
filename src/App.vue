<template>
  <div id="app">
    <Header />
    <AboutUs />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "put-net-website",
  components: {
    Header,
    AboutUs,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Monda", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
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
