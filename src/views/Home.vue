<template>
  <div class="home">
    <Header />
    <AboutUs id="onas" />
    <v-divider />
    <Prelections id="prelekcje" />
    <v-divider />
    <Awards id="nagrody" />
    <v-divider />
    <Contact id="kontakt" />
    <v-divider />
    <FAQ id="faq" />
    <template>
      <v-parallax :src="teamworkImage" height="100">
        <h1 align="center">💪 Siła! 💪</h1>
      </v-parallax>
    </template>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutUs from "@/components/AboutUs.vue";
import Prelections from "@/components/Prelections.vue";
import Awards from "@/components/Awards.vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";

export default {
  name: "home",
  components: {
    Awards,
    Header,
    AboutUs,
    Prelections,
    Contact,
    FAQ
  },
  data() {
    return {
      teamworkImage: require("@/assets/code-1839406_1920.jpg")
    };
  }
};
</script>
