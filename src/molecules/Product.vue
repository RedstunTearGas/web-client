<template>
  <div :class="`${columnSize} columns product-container`">
    <div class="product">
      <br />
      <h2 class="product-name">
        {{title}}
      </h2>
      <div class="img">
        <img
          v-img
          :src="image"
          alt="product-icon"
        />
      </div>
      <div v-for="description in desc">
        <small>{{description}}</small>
      </div>
      <br />
      <div class="button-container">
        <router-link to="/contact">
          <button v-if="buttonLabel">{{buttonLabel}}</button>
          <button v-else>Price on demand</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['title', 'desc', 'image', 'columnSize', 'buttonLabel'],
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

  min-height: 42rem;

  position: relative;
}

.button-container {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
}

img {
  max-width: 80%;
  max-height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.img {
  height: 150px;
  margin-bottom: 3rem;
}

</style>
