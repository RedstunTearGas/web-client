<template>
  <div class="container main">
    <div class="row">
      <div class="twelve columns headline">
        <h2>{{ $t("home.videos.h2") }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="four columns">
        <h3>{{ $t("home.videos.testInFrance") }}</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/pQXfhqRwfbw?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="four columns">
        <h3>{{ $t("home.videos.testInBrazil") }}</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2ggmCJXT87s?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="four columns">
        <h3>{{ $t("home.videos.testInRiga") }}</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/G_4ZVvyt3-w?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
};
</script>

<style scoped>

.headline {
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;

  height: 100%;
}

</style>
