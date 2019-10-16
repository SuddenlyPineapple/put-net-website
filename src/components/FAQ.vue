<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="12"
        class="d-flex flex-column align-content-center flex-wrap px-5"
      >
        <h1 align="center" class="mb-5">
          🤔 Frequenlty Asked Questions 🤔
        </h1>
        <v-expansion-panels inset dark>
          <v-expansion-panel v-for="(item, i) in questions" :key="i">
            <v-expansion-panel-header>
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import questionsData from "@/data/faq.json";

export default {
  name: "FAQ",
  data() {
    return {
      questions: questionsData
    };
  }
};
</script>
