<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("itc.h1") }}</h1>
          <hr />
        </div>
      </div>
      <h2>{{ $t('tearGas.itcVenom') }}</h2>
      <div class="row">
        <a-product
          :title="$t('tearGas.sprays.itc.25.title')"
          image="/static/sprays/itc-venom/front_25ml.png"
          columnSize="4"
        >
          {{ $t('tearGas.sprays.itc.25.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.itc.50.title')"
          image="/static/sprays/itc-venom/front_50ml.png"
          columnSize="4"
        >
          {{ $t('tearGas.sprays.itc.50.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.itc.75.title')"
          image="/static/sprays/itc-venom/front_100ml.png"
          columnSize="4"
        >
          {{ $t('tearGas.sprays.itc.75.description') }}
        </a-product>
      </div>
    </div>
  </div>
</template>

<script>

import Product from '@/molecules/ProductTearGas';

export default {
  name: 'ITC Tear Gas',
  components: {
    'a-product': Product,
  },
};
</script>

<style scoped>

h2 {
  font-size: 29px;
}

</style>
