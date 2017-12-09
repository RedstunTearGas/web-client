<template>
  <div class="container main">
    <div class="row">
      <div class="twelve columns headline">
        <h2>Specs</h2>
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <div>
          <img
            src="../assets/icons/fireproof.svg"
            alt="fireproof-icon"
          />
        </div>
        <h5>Non-flammable</h5>
        <p>
          Fire-proof.
        </p>
      </div>
      <div class="six columns">
        <img
          src="../assets/icons/anise.svg"
          alt="anise-icon"
        />
        <h5>Pleasent odor</h5>
        <p>Smells Good. Aniseed.</p>
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <img
          src="../assets/icons/subway.svg"
          alt="subway-icon"
        />
        <h5>Indoor</h5>
        <p>Only the target will be stunned.</p>
      </div>
      <div class="six columns">
        <img
          src="../assets/icons/washing-machine.svg"
          alt="washing-machine-icon"
        />
        <h5>Washable</h5>
        <p>You can wash it away easily from clothes.</p>
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <img
          src="../assets/icons/chili-pepper.svg"
          alt="chili-pepper-icon"
        />
        <h5>Strong</h5>
        <p>5.5 millions SHU. Powerful.</p>
      </div>
      <div class="six columns">
        <img
          src="../assets/icons/france.svg"
          alt="france-icon"
        />
        <h5>Made in France</h5>
        <p>Top. Notch. Quality.</p>
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
  text-align: center;
}

</style>
