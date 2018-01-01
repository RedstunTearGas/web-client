<template>
  <div id="app">
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
}

* {
  font-family: 'Open Sans', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poiret One', cursive !important;
}

a {
  color: #70798C;
  text-decoration: underline;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

</style>
