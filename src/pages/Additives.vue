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
          title="ITC Additive"
          :desc="
            ['(Iberverin gel)', 'aimed to be mixed at a rate of 5% in water', 'for Police water-cannons only']
          "
          image="/static/icons/radish.svg"
          columnSize="six"
        />
        <a-product
          title="CS Additive"
          :desc="
            ['aimed to be mixed at a rate of 5% in water', 'for Police water-cannons only']
          "
          image="/static/icons/cs.png"
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
  name: 'Additives',
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
