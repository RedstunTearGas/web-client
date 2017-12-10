<template>
  <div>
    <top-navigation />

    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Contact-us !</h1>
        </div>
      </div>
      <div class="row">
        <div class="twelwe columns">
          <h2>Redstun SAS</h2>
          <div>
            <p>17 rue Pasteur</p>
            <p>F-72300 Sablé-sur-Sarthe</p>
            <p>FRANCE</p>
          </div>

          <br />

          <div>
            <p>Société par Action Simplifiée, au capital de 10.000 euros.</p>
            <p>office@redstun.com</p>
            <p>+33 (0)7 83 07 18 27</p>
          </div>

          <br />

          <div>
            <table>
              <tbody>
                <tr>
                  <td>RCS</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>RM</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>TVA intracommunautaire</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>Nr. agrément armurier</td>
                  <td>XXX</td>
                </tr>
                <tr>
                  <td>Nr. autorisation préfectorale</td>
                  <td>XXX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
  name: 'Legal',
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
