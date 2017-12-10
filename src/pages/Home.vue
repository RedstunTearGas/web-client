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
    <div class="safety-sheet-container">
      <safety-sheet />
    </div>
    <bottom-footer />
  </div>
</template>

<script>

import MainPresentation from '@/components/MainPresentation';
import Videos from '@/components/Videos';
import Specs from '@/components/Specs';
import SafetySheet from '@/components/SafetySheet';

export default {
  name: 'Home',
  components: {
    'main-presentation': MainPresentation,
    'test-videos': Videos,
    'specs-list': Specs,
    'safety-sheet': SafetySheet,
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

  .safety-sheet-container {
    background-color: #F5F1ED;
    margin-top: 5rem;
    padding-bottom: 5rem;
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
