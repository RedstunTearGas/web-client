<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("tearGas.h1") }}</h1>
          <hr />
        </div>
      </div>
      <h2>{{ $t('tearGas.itcVenom') }}</h2>
      <div class="row">
        <a-product
          :title="$t('tearGas.sprays.itc.25.title')"
          image="/static/sprays/itc-venom/front_25ml.png"
          columnSize="four"
        >
          {{ $t('tearGas.sprays.itc.25.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.itc.50.title')"
          image="/static/sprays/itc-venom/front_50ml.png"
          columnSize="four"
        >
          {{ $t('tearGas.sprays.itc.50.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.itc.75.title')"
          image="/static/sprays/itc-venom/front_100ml.png"
          columnSize="four"
        >
          {{ $t('tearGas.sprays.itc.75.description') }}
        </a-product>
      </div>
      <br /><br />
      <h2>{{ $t("tearGas.ocViper") }}</h2>
       <div class="row">
        <a-product
          :title="$t('tearGas.sprays.oc.25.title')"
          image="/static/sprays/oc-viper/front_25ml.png"
          columnSize="six"
        >
          {{ $t('tearGas.sprays.oc.25.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.oc.50.title')"
          image="/static/sprays/oc-viper/front_50ml.png"
          columnSize="six"
        >
          {{ $t('tearGas.sprays.oc.50.description') }}
        </a-product>
      </div>
      <br /><br />
      <h2>{{ $t("tearGas.ocExtremeHeat") }}</h2>
      <div class="row">
        <a-product
          title="Aérosol 15ml"
          image="/static/sprays/oc-extreme-heat/front_15ml.png"
          columnSize="twelve"
        >
          {{ $t('tearGas.sprays.oceh.15.description') }}
        </a-product>
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

<style scoped>

h2 {
  font-size: 29px;
}

</style>
