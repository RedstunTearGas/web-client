<template>
  <div :class="`${columnSize} columns product-container`">
    <div class="product">
      <br />
      <h2 class="product-name">
        {{title}}
      </h2>
      <img
        :src="image"
        alt="product-icon"
      />
      <div v-for="description in desc">
        <small>{{description}}</small>
      </div>
      <br />
      <div class="button-container">
        <router-link to="/contact">
          <button>Price on demand</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['title', 'desc', 'image', 'columnSize'],
};
</script>

<style scoped>

.product-container {
  padding-top: 15px;
  padding-bottom: 15px;
}

.product {
  background-color: #FFF;
  border: 1px solid #70798C;

  text-align: center;

  min-height: 39rem;

  position: relative;
}

.button-container {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
}

img {
  max-width: 30%;
  max-height: 220px;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

</style>
