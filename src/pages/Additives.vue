<template>
  <div>
    <top-navigation />

    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("additives.h1") }}</h1>
        </div>
      </div>
      <div class="row">
        <a-product
          :title="$t('additives.itc.title')"
          :desc="
            [
              $t('additives.itc.description[0]'),
              $t('additives.itc.description[1]'),
              $t('additives.itc.description[2]'),
            ]
          "
          image="/static/icons/radish.svg"
          columnSize="six"
          :buttonLabel="$t('additives.itc.button')"
        />
        <a-product
          :title="$t('additives.cs.title')"
          :desc="
            [
              $t('additives.cs.description[0]'),
              $t('additives.cs.description[1]'),
            ]
          "
          image="/static/icons/cs.png"
          columnSize="six"
          :buttonLabel="$t('additives.cs.button')"
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
