<template>
  <div class="col-md-4">
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
  flex-direction: column;

  align-content: center;
  align-items: center;

  background-color: #FFF;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;

  padding: 0;
  margin-top: 1rem;
}

.product-name {
  font-size: 15px;
  font-weight: 700;
  color: hsl(0, 0%, 13%);
}

.product {
  text-align: left;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-content: stretch;

  width: 100%;
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

.img {
  flex: 1;
  width: 100%;

  background-color: #7cffcb;
  background-image: linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);

  background-color: #63a4ff;
  background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);

  height: 250px;

  display: flex;
  align-content: center;
  align-items: center;
}
img {
  margin: 0 auto;
  display: block;
  height: 80%;
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
