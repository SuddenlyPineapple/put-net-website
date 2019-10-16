<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="px-5">
        <v-img :src="prelectionsImage" aspect-ratio="2" />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap px-5"
      >
        <div class="flex-column">
          <h1>Prelekcje</h1>
          <p>
            Nasze Koło dzieli się na cztery sekcje, które prowadzą niezależne
            prelekcje:
          </p>
          <h3 class="red--text">
            WebDev 💻
            <span class="grey--text"> - poniedziałek, tydzień nieparzysty</span>
          </h3>
          <h3 class="yellow--text">
            GameDev 🎮
            <span class="grey--text"> - czwartek, tydzień nieparzysty</span>
          </h3>
          <h3 class="green--text">
            Mobile&Iot 📱
            <span class="grey--text"> - czwartek, tydzień parzysty</span>
          </h3>
          <h3 class="pink--text">
            Innovations ☁️
            <span class="grey--text"> - wtorek, tydzień parzysty</span>
          </h3>
          <p class="pt-3">
            Wszystkich zainteresowanych serdecznie zapraszamy 💪 <br />
            (więcej infromacji znajdziesz na naszym FB)
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Prelections",
  data() {
    return {
      prelectionsImage: require("../assets/prelections.jpg")
    };
  }
};
</script>
