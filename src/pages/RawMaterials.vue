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
          image="/static/icons/cs.svg"
          columnSize="4"
          :backgroundStyle="{
            backgroundColor: '#f6f6f6',
            backgroundImage: 'linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%)',
          }"
        >
          <ul>
            <li v-for="desc in $t('rawMaterials.cs.description')" :key="desc">{{desc}}</li>
          </ul>
        </a-product>
        <a-product
          :title="$t('rawMaterials.capsaicin.title')"
          image="/static/icons/capsaicin.svg"
          columnSize="4"
          :backgroundStyle="{
            backgroundColor: '#eb4511',
            backgroundImage: 'linear-gradient(315deg, #eb4511 0%, #b02e0c 74%)',
          }"
        >
          <ul>
            <li v-for="desc in $t('rawMaterials.capsaicin.description')" :key="desc">{{desc}}</li>
          </ul>
        </a-product>
        <a-product
          :title="$t('rawMaterials.oc.title')"
          image="/static/icons/barrel.svg"
          columnSize="4"
          :backgroundStyle="{
            backgroundColor: '#feae96',
            backgroundImage: 'linear-gradient(315deg, #feae96 0%, #fe0944 74%)',
          }
          "
        >
          <ul>
            <li v-for="desc in $t('rawMaterials.oc.description')" :key="desc">{{desc}}</li>
          </ul>
        </a-product>
      </div>
      <div class="info">
        <p>{{ $t("rawMaterials.agentInfo.1") }}<b><a target="_blank" href="http://www.southernspices.co.in">{{ $t("rawMaterials.agentInfo.2") }}</a></b>{{ $t("rawMaterials.agentInfo.3") }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import ProductRawMaterials from '@/molecules/ProductRawMaterials';

export default {
  name: 'RawMaterials',
  components: {
    'a-product': ProductRawMaterials,
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
