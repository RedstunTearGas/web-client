<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <h1>{{ $t("bigOne.title") }}</h1>
          <hr />
        </div>
      </div>
      <h2>{{ $t('tearGas.itcVenom') }}</h2>
      <div class="row">
        <a-product
          :title="$t('tearGas.sprays.itc.25.title')"
          image="/static/sprays/itc-venom/front_25ml.png"
        >
          {{ $t('tearGas.sprays.itc.25.description') }}
        </a-product>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 form-group">
                <div class="form-group-title">Contact information</div>
                <label for="name">Name</label>
                <input name="name" type="text">
                <label for="company">Company</label>
                <input name="company" type="text">
                <label for="phone">Phone</label>
                <input name="phone" type="phone">
              </div>
              <div class="col-md-12 form-group">
                <div class="form-group-title">Shipping details</div>
                <div class="row">
                  <div class="col-md-12">
                    <label for="street">Street</label>
                    <input name="street" type="text">
                  </div>
                  <div class="col-md-4">
                    <label for="zipcode">Zipcode</label>
                    <input name="zipcode" type="text">
                  </div>
                  <div class="col-md-4">
                    <label for="city">City</label>
                    <input name="city" type="text">
                  </div>
                  <div class="col-md-4">
                    <label for="country">Country</label>
                    <input name="country" type="text">
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <button v-on:click="pay">Buy</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import getClient from '@/lib/stripe';

import Product from '@/molecules/ProductTearGas';

export default {
  name: 'ITC-Tear-Gas',
  components: {
    'a-product': Product,
  },
  created: () => {
    getClient();
  },
  methods: {
    pay: async () => {
      const stripeClient = await getClient();
      stripeClient.open({
        description: 'Bombe Lacry',
        amount: 108 * 100,
        token: async (token) => {
          const result = await axios.post('http://localhost:1323/charge', {
            token,
          });
        },
      });
    }
  }
};
</script>

<style scoped>

.form-group {
  margin-bottom: 2rem;
}
.form-group-title {
  border-bottom: 2px solid rgba(0,0,0,0.08);
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: .5rem;
}

label {
  display: block;
  margin: 0 .5rem;
  margin-top: .5rem;
}

input, button {
  width: 100%;
  margin: 0;
  border-radius: 2px;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.08);
  padding: 5px 9px 0;
}

button {
  background-color: #38b7a6;
  color: #ffffffDD;
  font-weight: bolder;
  padding: .5rem;
  border: none;
}


</style>
