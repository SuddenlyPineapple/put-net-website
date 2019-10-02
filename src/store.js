import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    routes: [
      {
        text: "Home",
        to: "#"
      },
      {
        text: "O nas",
        to: "#onas"
      },
      {
        text: "Prelekcje",
        to: "#prelekcje"
      },
      {
        text: "Hall of Fame",
        to: "#nagrody"
      },
      {
        text: "Kontakt",
        to: "#kontakt"
      },
      {
        text: "FAQ",
        to: "#faq"
      }
    ]
  },
  getters: {
    routes: state => {
      return state.routes;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {}
});
