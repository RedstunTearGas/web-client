<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("tearGas.h1") }}</h1>
          <hr />
        </div>
      </div>
      <h2>{{ $t("tearGas.itcVenom") }}</h2>
      <div class="row">
        <a-product
          title="Aérosol 25ml"
          image="/static/sprays/itc-venom/front_25ml.png"
          columnSize="four"
        />
        <a-product
          title="Aérosol 50ml"
          image="/static/sprays/itc-venom/front_50ml.png"
          columnSize="four"
        />
        <a-product
          title="Aérosol 75ml"
          image="/static/sprays/itc-venom/front_100ml.png"
          columnSize="four"
        />
      </div>
      <br /><br />
      <h2>{{ $t("tearGas.ocViper") }}</h2>
       <div class="row">
        <a-product
          title="Aérosol 25ml"
          image="/static/sprays/oc-viper/front_25ml.png"
          columnSize="six"
        />
        <a-product
          title="Aérosol 50ml"
          image="/static/sprays/oc-viper/front_50ml.png"
          columnSize="six"
        />
      </div>
      <br /><br />
      <h2>{{ $t("tearGas.ocExtremeHeat") }}</h2>
      <div class="row">
        <a-product
          title="Aérosol 15ml"
          image="/static/sprays/oc-extreme-heat/front_15ml.png"
          columnSize="twelve"
          :desc="
            [
              $t('tearGas.ocExtremeHeatDescription[0]'),
              $t('tearGas.ocExtremeHeatDescription[1]'),
              $t('tearGas.ocExtremeHeatDescription[2]'),
            ]
          "
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

<style scoped>

h2 {
  font-size: 29px;
}

</style>
