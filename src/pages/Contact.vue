<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("contact.h1") }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="twelwe columns">
          <h2>Redstun SAS</h2>
          <div>
            <p>17 rue Pasteur</p>
            <p>F-72300 Sablé-sur-Sarthe</p>
            <p>FRANCE</p>

            <p>office@redstun.com</p>
            <p>+33 (0)7 83 07 18 27</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  table {
    width: 100%;
  }

  p {
    margin: 0;
  }

</style>
