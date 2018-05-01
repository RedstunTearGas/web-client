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
          image="/static/icons/radish.svg"
          :buttonLabel="$t('additives.itc.button')"
          :backgroundStyle="{
            backgroundColor: '#70b2d9',
            backgroundImage: 'linear-gradient(315deg, #70b2d9 0%, #39e5b6 74%)',
          }
          "
        >
          <ul>
            <li v-for="desc in $t('additives.itc.description')" :key="desc">{{desc}}</li>
          </ul>
        </a-product>
        <a-product
          :title="$t('additives.cs.title')"
          image="/static/icons/cs.svg"
          :buttonLabel="$t('additives.cs.button')"
        >
          <ul>
            <li v-for="desc in $t('additives.cs.description')" :key="desc">{{desc}}</li>
          </ul>
        </a-product>
      </div>
    </div>
  </div>
</template>

<script>

import ProductAdditives from '@/molecules/ProductAdditives';

export default {
  name: 'Additives',
  components: {
    'a-product': ProductAdditives,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
