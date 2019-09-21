<template>
  <v-navigation-drawer floating fixed v-model="drawer" dark temporary>
    <v-container>
      <v-flex xs12 class="text-xs-center">
        <v-img :src="putNetLogo" height="140" contain />
        <h1 align="center" class="display-3">put.net</h1>
      </v-flex>
    </v-container>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(route, i) in routes"
        :key="i"
        :href="route.to"
        @click="onClick($event, route)"
      >
        <v-list-item-title v-text="route.text" />
      </v-list-item>
    </v-list>
    <h1 class="absolute-logo white--text">
      PUT<span class="red--text">.</span>NET
    </h1>
  </v-navigation-drawer>
</template>

<script lang="js">
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Drawer',
  data: () => ({
    putNetLogo: require("../assets/logo-ico.png")
  }),
  computed: {
    ...mapGetters(['routes']),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to === '/') {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }
      this.setDrawer(false);
      if (item.to || !item.href) { return; }
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>

<style lang="scss">
.absolute-logo {
  position: absolute;
  bottom: 5%;
  left: 20px;
}

.v-list-item--active {
  color: white !important;
  caret-color: white !important;
}
.center {
  text-align: center;
}
</style>
