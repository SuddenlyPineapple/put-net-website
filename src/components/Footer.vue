<template>
  <v-footer dark>
    <v-card flat tile class="grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="link in socialMedia"
          :key="link.icon"
          class="mx-4 white--text"
          icon
          :href="link.link"
        >
          <v-icon size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-row>
        <v-col cols="12" md="9" class="px-5">
          <v-card-text class="white--text pt-0 text-left"
            >Koło naukowe PUT.NET na Wydziale Informatyki działa od 2004 roku, a
            na Wydziale Elektrycznym od roku 2005. Serdecznie zapraszamy na
            nasze spotkania, eventy i prelekcje!</v-card-text
          >
        </v-col>
        <v-col cols="12" md="3" class="max-height pt-0">
          <v-img
            :src="ppLogo"
            alt="Politechnika Poznańska Logo"
            height="80"
            contain
          />
        </v-col>
      </v-row>

      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>&copy;Wojciech Kasperski </strong
        ><a
          href="mailto:wojciech.kasperski97@gmail.com"
          class="font-weight-light white--text"
          >&lt;wojciech.kasperski97@gmail.com&gt;</a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    socialMedia: [
      { icon: "mdi-facebook", link: "https://www.facebook.com/put.net/" },
      { icon: "mdi-twitter", link: "" },
      { icon: "mdi-google-plus", link: "" },
      { icon: "mdi-linkedin", link: "" },
      { icon: "mdi-instagram", link: "" }
    ],
    ppLogo: require("../assets/PolitechnikaPoznanska.png")
  })
};
</script>
