<template>
  <div class="home">
    <Header />
    <AboutUs />
    <Prelections />
    <Awards />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";
import Prelections from "@/components/Prelections.vue";
import Awards from "@/components/Awards.vue";

export default {
  name: "home",
  components: {
    Awards,
    Header,
    AboutUs,
    Prelections,
    Footer
  }
};
</script>
