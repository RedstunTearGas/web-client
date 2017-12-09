<template>
  <div class="container main">
    <div class="row">
      <div class="twelve columns headline">
        <h2>Safety Sheet</h2>
      </div>
    </div>
    <div class="row">
      <div class="twelve columns download-container">
        <a href="/static/safetysheets/spray-itc-venom-eng.pdf" target="_blank">
          <button>
            download
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SafetySheet',
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

.download-container {
  text-align: center;
}

</style>
