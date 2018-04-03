<template>
  <div id="app">
    <top-navigation />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  background-color: #f6f9fc;

  min-height: 100%;
}

html, body {
  min-height: 100%;
}

* {
  font-family: 'Open Sans', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Comfortaa', cursive !important;
}

a {
  color: hsl(0, 0%, 13%);
  text-decoration: underline;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

</style>
