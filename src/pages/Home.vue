<template>
  <div>
    <top-navigation />
    <header>
      <main-presentation />
    </header>
    <div class="videos-container">
      <test-videos />
    </div>
    <div class="spec-container">
      <specs-list />
    </div>
    <bottom-footer />
  </div>
</template>

<script>

import MainPresentation from '@/components/MainPresentation';
import Videos from '@/components/Videos';
import Specs from '@/components/Specs';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    'main-presentation': MainPresentation,
    'test-videos': Videos,
    'specs-list': Specs,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header {
    height: 100vh;
    background-color: #F5F1ED;
  }

  .videos-container {
    margin-top: 5rem;
  }

  .spec-container {
    /* background-color: #DAD2BC; */
    margin-top: 5rem;
  }

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
