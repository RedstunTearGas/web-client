<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ $t("rawMaterials.h1") }}</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <a-product
          :title="$t('rawMaterials.cs.title')"
          :desc="
            [
              $t('rawMaterials.cs.description[0]'),
              $t('rawMaterials.cs.description[1]'),
            ]
          "
          image="/static/icons/cs.png"
          columnSize="4"
        />
        <a-product
          :title="$t('rawMaterials.capsaicin.title')"
          :desc="
            [
              $t('rawMaterials.capsaicin.description[0]'),
              $t('rawMaterials.capsaicin.description[1]'),
            ]
          "
          image="/static/icons/capsaicin.svg"
          columnSize="4"
        />
        <a-product
          :title="$t('rawMaterials.oc.title')"
          :desc="
            [
              $t('rawMaterials.oc.description[0]'),
              $t('rawMaterials.oc.description[2]'),
              $t('rawMaterials.oc.description[1]'),
            ]
          "
          image="/static/icons/barrel.svg"
          columnSize="4"
        />
      </div>
      <div class="info">
        <p>{{ $t("rawMaterials.agentInfo.1") }}<b><a target="_blank" href="http://www.southernspices.co.in">{{ $t("rawMaterials.agentInfo.2") }}</a></b>{{ $t("rawMaterials.agentInfo.3") }}</p>
      </div>
    </div>
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

  .info {
    border-left: 1px solid #70798C;
    padding-left: 8px;
    margin-top: 3rem;

    font-size: 16px;
  }

  .info p {
    margin: 0;
  }

</style>
