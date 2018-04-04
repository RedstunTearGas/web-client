<template>
  <div class="container main">
    <div class="row">
      <div class="col-md-12 headline">
        <h2>{{ $t("home.specs.h2") }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/fireproof.svg"
            alt="fireproof-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.nonFlammable.title") }}</h5>
          <p>
            {{ $t("home.specs.nonFlammable.subtitle") }}
          </p>
        </div>
      </div>
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/anise.svg"
            alt="anise-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.pleasantOdor.title") }}</h5>
          <p>{{ $t("home.specs.pleasantOdor.subtitle") }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/subway.svg"
            alt="subway-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.indoor.title") }}</h5>
          <p>{{ $t("home.specs.indoor.subtitle") }}</p>
        </div>
      </div>
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/washing-machine.svg"
            alt="washing-machine-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.washable.title") }}</h5>
          <p>{{ $t("home.specs.washable.subtitle") }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/chili-pepper.svg"
            alt="chili-pepper-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.strong.title") }}</h5>
          <p>{{ $t("home.specs.strong.subtitle") }}</p>
        </div>
      </div>
      <div class="col-md-6 column">
        <div>
          <img
            src="../assets/icons/france.svg"
            alt="france-icon"
          />
        </div>
        <div>
          <h5>{{ $t("home.specs.madeInFrance.title") }}</h5>
          <p>{{ $t("home.specs.madeInFrance.subtitle") }}</p>
        </div>
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

img {
  width: 100%;
  height: 50px;
}

.headline {
  padding-top: 7rem;
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

h5 {
  text-align: left;
}

.column {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;
}

</style>
