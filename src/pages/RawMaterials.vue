<template>
  <div>
    <top-navigation />

    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>Raw Materials</h1>
        </div>
      </div>
      <div class="row">
        <a-product
          title="CS Crystals"
          :desc="
            ['origin China', 'purity > 98%']
          "
          image="/static/icons/cs.png"
          columnSize="four"
        />
        <a-product
          title="Pure Capsaicin"
          :desc="
            [
              'purity > 98%',
              'origin India',
            ]
          "
          image="/static/icons/capsaicin.svg"
          columnSize="four"
        />
        <a-product
          title="OC Resin"
          :desc="
            [
              'various Major Capsaicinoid content available',
              'water soluble or solvent soluble',
              'origin India',
            ]
          "
          image="/static/icons/barrel.svg"
          columnSize="four"
        />
      </div>
      <div class="info">
        <p>Redstun is the agent of the company Southern Spices for Europe</p>
        <a href="http://www.southernspices.co.in">Link to website</a>
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

  .info {
    border-left: 1px solid #70798C;
    padding-left: 2rem;
    margin-top: 3rem;
  }

  .info p {
    margin: 0;
  }

</style>
