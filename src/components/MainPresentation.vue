<template>
  <div class="container main">
    <div class="row">
      <div class="seven columns">
        <h1>{{ $t("home.mainPresentation.h1") }}</h1>
        <h2>{{ $t("home.mainPresentation.h2") }}</h2>
        <div>
          <p>{{ $t("home.mainPresentation.description") }}</p>
          <br />
          <ul>
            <li>{{ $t("home.mainPresentation.features[0]") }}</li>
            <li>{{ $t("home.mainPresentation.features[1]") }}</li>
            <li>{{ $t("home.mainPresentation.features[2]") }}</li>
            <li>{{ $t("home.mainPresentation.features[3]") }}</li>
            <li>{{ $t("home.mainPresentation.features[4]") }}</li>
            <li>{{ $t("home.mainPresentation.features[5]") }}</li>
          </ul>
          <p>{{ $t("home.mainPresentation.description2") }}</p>
          <p><b>{{ $t("home.mainPresentation.description3") }}</b></p>
        </div>
      </div>
      <div class="five columns">
        <img
          src="../assets/itc-venom.png"
          alt="redstun tear gas"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPresentation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
 height: 100%;
}



.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;

  height: 100%;
}

img {
  display: block;
  margin: 0 auto;
  width: 100%;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

</style>
