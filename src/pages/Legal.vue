<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t('legal.h1') }}</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="twelwe columns">
          <h2>Redstun SAS</h2>
          <div>
            <p>6 rue des Camélias</p>
            <p>F-72300 Auvers-le-Hamon</p>
            <p>FRANCE</p>
          </div>

          <br />

          <div>
            <p>Société par Action Simplifiée, au capital de 10.000 euros.</p>
          </div>
          <br />

          <div>
            <table>
              <tbody>
                <tr>
                  <td>RCS</td>
                  <td>830 248 233 R.C.S. LE MANS</td>
                </tr>
                <tr>
                  <td>Code NAF</td>
                  <td>2540Z  - Fabrication d'armes et de munitions</td>
                </tr>
                <tr>
                  <td>TVA intracommunautaire</td>
                  <td>FR 51830248233</td>
                </tr>
                <tr>
                  <td>Agrément armurier</td>
                  <td>Arrêté du 27 mars 2017 - Préfecture de la Sarthe.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Legal',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  table {
    width: 100%;
  }

  p {
    margin: 0;
  }

</style>
