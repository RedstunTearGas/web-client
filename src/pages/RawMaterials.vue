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
          image="src/assets/icons/china.svg"
          columnSize="four"
        />
        <a-product
          title="Pure Capsaicin"
          :desc="
            ['origin India', 'purity > 98%']
          "
          image="src/assets/icons/india.svg"
          columnSize="four"
        />
        <a-product
          title="OC Resin"
          :desc="
            [
              'origin India',
              'various Major Capsaicinoid content available',
              'water soluble or solvent soluble',
            ]
          "
          image="src/assets/icons/india.svg"
          columnSize="four"
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
