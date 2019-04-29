<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("tearGas.h1") }}</h1>
          <h1>{{ $t("tearGas.h2") }}</h1>
          <br>
          <hr>
          <br>
        </div>
      </div>
      <h2>{{ $t('tearGas.itcVenom') }}</h2>
      <div class="row">
        <a-product
          :title="$t('tearGas.sprays.itc.50.title')"
          image="/static/sprays/itc-venom/front_50ml.png"
          columnSize="4"
          :backgroundStyle="{
            backgroundColor: '#ffac81',
            backgroundImage: 'linear-gradient(315deg, #BBDBBE 0%, #F5E3E6 74%)',
          }"
        >{{ $t('tearGas.sprays.itc.50.description') }}</a-product>
        <a-product
          :title="$t('tearGas.sprays.itc.75.title')"
          image="/static/sprays/itc-venom/front_100ml.png"
          columnSize="4"
          :backgroundStyle="{
            backgroundColor: '#ffac81',
            backgroundImage: 'linear-gradient(315deg, #BBDBBE 0%, #DEEBDD 74%)',
          }"
        >{{ $t('tearGas.sprays.itc.75.description') }}</a-product>
      </div>
      <br>
      <br>
      <h2>{{ $t("tearGas.ocExtremeHeat") }}</h2>
      <div class="row">
        <a-product
          title="Aérosol 15ml"
          image="/static/sprays/oc-extreme-heat/front_15ml.png"
          columnSize="12"
          :backgroundStyle="{
            backgroundColor: '#f39f86',
            backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)',
          }"
        >{{ $t('tearGas.sprays.oceh.15.description') }}</a-product>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTearGas from '@/molecules/ProductTearGas';

export default {
  name: 'RawMaterials',
  components: {
    'a-product': ProductTearGas,
  },
};
</script>

<style scoped>
h2 {
  font-size: 29px;
}
</style>

<!--

OC VIPER

      <h2>{{ $t("tearGas.ocViper") }}</h2>
       <div class="row">
        <a-product
          :title="$t('tearGas.sprays.oc.25.title')"
          image="/static/sprays/oc-viper/front_25ml.png"
          columnSize="6"
          :backgroundStyle="{
            backgroundColor: '#ffac81',
            backgroundImage: 'linear-gradient(315deg, #ffac81 0%, #ff928b 74%)',
          }"
        >
          {{ $t('tearGas.sprays.oc.25.description') }}
        </a-product>
        <a-product
          :title="$t('tearGas.sprays.oc.50.title')"
          image="/static/sprays/oc-viper/front_50ml.png"
          columnSize="6"
          :backgroundStyle="{
            backgroundColor: '#ffac81',
            backgroundImage: 'linear-gradient(315deg, #ff928b 0%, #ffac81 74%)',
          }"
        >
          {{ $t('tearGas.sprays.oc.50.description') }}
        </a-product>
      </div>
      <br /><br />
*/


-->
