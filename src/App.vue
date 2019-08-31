<template>
  <div id="app">
    <video-bg :sources="['source_code.mp4']">
      <div class="logo-container">
        <div>
          <img alt="PutNet logo" src="./assets/put-net-logo.svg" class="logo" />
          <h1>Koło naukowe Politechniki Poznańskiej</h1>
        </div>
      </div>
    </video-bg>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Monda", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  padding: 0;
  margin: 0;
}
.logo {
  width: 100%;
  vertical-align: middle;
}
.logo-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
