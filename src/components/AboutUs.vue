<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap px-5"
      >
        <div class="flex-column">
          <h1 align="center">O nas!</h1>
          <p class="text-right">
            Grupa PUT.NET to studenckie Koło naukowe działające na Wydziale
            Informatyki oraz Wydziale Elektrycznym Politechniki Poznańskiej.
            Tworzą je osoby pasjonujące się różnymi technologiami. Ponadto
            interesują nas też inne zagadnienia powiązane z sektorem IT i
            najnowszymi technologiami oraz przedsiębiorczością w start-up’ach.
            Organizujemy otwarte prelekcje i warsztaty, w trakcie których
            uczestnicy dzielą się wiedzą i doświadczeniem. Staramy się na
            bieżąco zdobywać wiedzę by następnie przekazywać ją uczniom,
            studentom i pasjonatom. Projekty realizowane przez nas odnoszą
            sukcesy w konkursach krajowych i międzynarodowych. Wygrywamy też
            często hackatony jak i zapraszamy ekspertów z IT na nasze spotkania.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="px-5">
        <v-img :src="conferenceImage" aspect-ratio="2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      conferenceImage: require("../assets/team.jpg")
    };
  }
};
</script>
