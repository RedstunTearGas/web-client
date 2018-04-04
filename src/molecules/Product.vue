<template>
  <div :class="`col-md-${columnSize}`">
    <div class="product-container">
      <div class="img">
        <img
          v-img
          :src="image"
          alt="product-icon"
        />
      </div>
      <div class="product">
        <h2 class="product-name">
          {{title}}
        </h2>
        <div class="description">
          <slot />
        </div>
        <br />
        <div class="button-container">
          <router-link to="/contact">
            <button v-if="buttonLabel">{{buttonLabel}}</button>
            <button v-else>{{ $t('product.priceOnDemand' )}}</button>
          </router-link>
        </div>
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
  display: flex;
  flex-direction: row;

  align-content: center;
  align-items: center;

  background-color: #FFF;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);

  height: 200px;

  padding: 0;
  margin-top: 1rem;
}

.product-name {
  font-size: 15px;
  font-weight: 700;
  color: hsl(0, 0%, 13%);
}

.product {
  flex: 4;

  text-align: left;

  position: relative;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-content: stretch;

  height: 200px;
}

.button-container {
  display: flex;
  text-align: right;
  align-self: flex-end;
}


.description {
  flex: 1;
  font-size: 15px;
}
img {
  max-height: 80%;
  max-width: 80%;
  margin: auto auto;
}

.img {
  flex: 1;

  display: flex;
  align-content: center;

  background:hsl(0, 0%, 13%);
  min-width: 56px;
  height: 100%;
}

button {
  border-radius: 0;
  margin-bottom: 0;
  margin-left: 1rem;
  margin-right: 1rem;

  font-size: 15px;

  background: #FFF;
  border: 1px solid hsl(0, 0%, 7%);
}

button:hover {
  border: 1px solid hsl(0, 0%, 13%);
}

</style>
