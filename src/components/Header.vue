<template>
  <video-bg :sources="['source_code.mp4']">
    <div class="logo-container">
      <div>
        <img alt="PutNet logo" src="../assets/logo.svg" class="logo" />
        <h1>Koło naukowe Politechniki Poznańskiej</h1>
      </div>
    </div>
  </video-bg>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.logo {
  width: 70%;
  vertical-align: middle;
}
.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
