<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ $t("additives.h1") }}</h1>
          <hr />
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
          columnSize="6"
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
          columnSize="6"
          :buttonLabel="$t('additives.cs.button')"
        />
      </div>
    </div>
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
</style>
