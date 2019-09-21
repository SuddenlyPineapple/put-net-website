<template>
  <v-app id="app">
    <Toolbar />
    <Drawer />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "put-net-website",
  components: {
    Toolbar: () => import("@/components/Toolbar.vue"),
    Drawer: () => import("@/components/Drawer.vue"),
    Footer: () => import("@/components/Footer.vue")
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Monda", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #424242;
  height: 100%;
}
v-navigation-drawer {
  min-height: 200px;
}
</style>
