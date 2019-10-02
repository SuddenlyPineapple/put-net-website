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
            Grupa PUT.NET to studenckie koło naukowe działające na Wydziale
            Informatyki oraz Wydziale Elektrycznym Politechniki Poznańskiej.
            Tworzą ją osoby pasjonujące się różnymi technologiami. Ponadto
            interesują nas też inne tematy powiązane z sektorem IT i najnowszymi
            technologiami oraz przedsiębiorczością w start-up’ach. Organizujemy
            otwarte prelekcje i warsztaty, w trakcie których uczestnicy nabywają
            wiedzy z profesjonalnego źródła. Projekty realizowane przez nas
            odnoszą sukcesy na wysokich szczeblach. Staramy się na bieżąco
            zdobywać wiedzę by następnie przekazywać ją uczniom, studentom i
            pasjonatom. Uczestniczymy też w wszelkiego rodzaju konkursach
            programistycznych z których duzej ilości wychodzimy zwycięzko.
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
