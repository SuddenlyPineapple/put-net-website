<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="px-5 center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.1631663339854!2d16.946907215803165!3d52.40371897979235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b13735ceb35%3A0x9804598c2b48cc91!2sPiotrowo%202%2C%2060-965%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1569964957035!5m2!1spl!2spl"
          width="95%"
          height="400"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex align-content-center flex-wrap px-5"
      >
        <div class="flex-column">
          <h1 class="pb-4">Kontakt</h1>
          <p>
            <v-icon class="white--text">mdi-email</v-icon>
            Email:
            <a href="mailto:kontakt@putnet.onmicrosoft.com" class="white--text">
              kontakt@putnet.onmicrosoft.com
            </a>
          </p>
          <p>
            <v-icon class="white--text">mdi-map-marker</v-icon>
            Adres:
            <a
              href="https://l.facebook.com/l.php?u=http%3A%2F%2Fshare.here.com%2Fr%2Fmylocation%2Fe-eyJuYW1lIjoiR3J1cGEgLk5FVCBQb2xpdGVjaG5pa2EgUG96bmFcdTAxNDRza2EiLCJhZGRyZXNzIjoidWwuIFBpb3Ryb3dvIDIsIFBvem5hXHUwMTQ0IiwibGF0aXR1ZGUiOjUyLjQwMzQ3NDUyMTU3NCwibG9uZ2l0dWRlIjoxNi45NDk5NDE4MTM2MjcsInByb3ZpZGVyTmFtZSI6ImZhY2Vib29rIiwicHJvdmlkZXJJZCI6MjcyNjU4MzQ5NDM1NTM0fQ%3D%3D%3Flink%3Ddirections%26fb_locale%3Dpl_PL%26ref%3Dfacebook%26fbclid%3DIwAR3K87uYOll5T27LkWZk34yCJ-7NMZoDB-Op_LsirfGmPYWLc997eSoqAr0&h=AT0YI_MH71VHJxX3Lv9iNvpAxwYWfWElwOSKA9ynydaAe47x0kvEdOOvGZkl9x61v5E1aIv7yCghoGztZV2x3M-kHRp2zagqk197vz4md0rZ6cT0HwGvfhKDARl0TFmIzRlU3Gv1bEgVe3_zXYJSHJwiMWxQpE5m9GTFzfLjqUNVspP-SDru3w9ARSXHH5vng2mWCE_LnyxpKmc5j7fgNKBPl1jYXaTy3LtCWumn0uvS5-su7gw8Y1Z0GXvUKwuE6j9sU44plClFurmMsDUCpKPN2ETdKCKFEcbn_O9FQiDVEwJAgt-sOvOBbEwONd_BlmHq9TX-zIYLSLrRxwpIOEm9KVRz8A_mgZJwNSSlkikTpJyryyIwE-2REEEtz-QQtj-oXluw-vrbbeFodIIJ9LV_41PtwM9ICfMC7dppKtDinOoAHoCtxlNVXktE4uhPeGl7hP8oj7zImoEkSmyGEFTiinuJKiylLy0CCrQOGLOxAMCRXhLJJFO4wEUFK-EwuHRNO-u-xnZCC9ONXaoIKOzZbxlq0CDaeIBY-z90in10PmdhzJzm6iha3U_c1wVZtEgpwPxHsb-A"
              class="white--text"
            >
              ul. Piotrowo 2, 60-965 Poznań
            </a>
          </p>
          <p>
            <v-icon class="white--text">mdi-facebook-messenger</v-icon>
            Messenger:
            <a href="https://m.me/put.net" class="white--text">
              m.me/put.net
            </a>
          </p>
          <p>
            <v-icon class="white--text">mdi-facebook</v-icon>
            Facebook:
            <a href="https://www.facebook.com/put.net" class="white--text">
              https://www.facebook.com/put.net
            </a>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  }
};
</script>
