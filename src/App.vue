<template>
  <div id="app">
    <top-navigation />
    <router-view/>
    <bottom-footer />
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

  background-color: #FFF;
}

html, body, #app, .page-container {
  min-height: 100%;
}

.body {
  height: 100%;
}

html, body {
  font-size: 15px !important;
  color: rgba(0, 0, 0, 0.84);
  font-weight: normal;
  line-height: 28px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  display: block;
}

* {
  font-family: 'Open Sans', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Comfortaa', cursive !important;
}

@media (min-width: 550px) {}

a {
  color: hsl(0, 0%, 13%);
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

.page-container {
  padding-top: 5rem;
  min-height: 90vh;
}

</style>
