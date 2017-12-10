<template>
  <div>
    <top-navigation />

    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Tear Gas Sprays</h1>
        </div>
      </div>
      <h2>ITC Venom</h2>
      <div class="row">
        <a-product
          title="25ml"
          image="/static/sprays/itc-venom/front_25ml.png"
          columnSize="four"
        />
        <a-product
          title="50ml"
          image="/static/sprays/itc-venom/front_50ml.png"
          columnSize="four"
        />
        <a-product
          title="75ml"
          image="/static/sprays/itc-venom/front_100ml.png"
          columnSize="four"
        />
      </div>
      <br /><br />
      <h2>OC Viper</h2>
      <div class="row">
        <a-product
          title="25ml"
          image="/static/sprays/oc-viper/front_25ml.png"
          columnSize="six"
        />
        <a-product
          title="50ml"
          image="/static/sprays/oc-viper/front_50ml.png"
          columnSize="six"
        />
      </div>
    </div>
    <bottom-footer />
  </div>
</template>

<script>

import Product from '@/molecules/Product';

export default {
  name: 'RawMaterials',
  components: {
    'a-product': Product,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

</style>
