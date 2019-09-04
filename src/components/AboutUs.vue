<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="px-5">
        <h1 align="center">O nas!</h1>
        <p class="text-right">
          Bacon ipsum dolor amet meatloaf beef ribs short loin, alcatra shoulder
          brisket pork chop cupim buffalo burgdoggen tongue. Kevin tail pork
          bresaola, cupim drumstick pork loin shankle turkey picanha ball tip.
          Cow beef ribs sirloin burgdoggen, filet mignon frankfurter tail
          fatback porchetta ground round chuck. Rump doner boudin shankle tail
          fatback jowl. Burgdoggen jowl corned beef t-bone beef ribs boudin pork
          loin picanha kevin frankfurter ribeye cow short loin andouille
          chicken. Tenderloin chuck brisket ham hock. Meatball drumstick ribeye
          frankfurter.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="px-5">
        <v-img :src="conferenceImage" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      conferenceImage: require("../assets/office.jpg")
    };
  }
};
</script>
