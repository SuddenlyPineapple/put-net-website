<template>
  <v-app-bar app dark inverted-scroll color="grey darken-4">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <img
      :src="putNetLogo"
      height="36"
      contain
      class="hidden-sm-and-down ml-10"
    />
    <v-img :src="putNetLogo" height="36" contain class="hidden-md-and-up" />
    <div class="flex-grow-1 hidden-sm-and-down"></div>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="(route, i) in routes"
        :key="i"
        :href="route.to"
        class="ml-0 hidden-sm-and-down"
        color="grey darken-4"
        falt
      >
        {{ route.text }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    putNetLogo: require("../assets/logo-ico.png")
  }),
  computed: {
    ...mapGetters(["routes"])
  },
  methods: {
    ...mapMutations(["toggleDrawer"])
  }
};
</script>
