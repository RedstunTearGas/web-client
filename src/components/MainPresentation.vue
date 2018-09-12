<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h1>{{ $t("home.mainPresentation.h1") }}</h1>
        <h2>{{ $t("home.mainPresentation.h2") }}</h2>
        <div>
          <p>{{ $t("home.mainPresentation.description") }}</p>
          <br />
          <ul>
            <li>{{ $t("home.mainPresentation.features[0]") }}</li>
            <li>{{ $t("home.mainPresentation.features[1]") }}</li>
            <li>{{ $t("home.mainPresentation.features[2]") }}</li>
            <li>{{ $t("home.mainPresentation.features[3]") }}</li>
            <li>{{ $t("home.mainPresentation.features[4]") }}</li>
            <li>{{ $t("home.mainPresentation.features[5]") }}</li>
          </ul>
          <p>{{ $t("home.mainPresentation.description2") }}</p>
          <p><b>{{ $t("home.mainPresentation.description3") }}</b></p>
          <a href="https://www.youtube.com/watch?v=EkWe4oNDAmA" target="_blank">
            <button class="watch-video">WATCH VIDEO</button>
          </a>
          <button v-on:click="pay">Acheter</button>
        </div>
      </div>
      <div class="col-md-5 illustration">
        <img
          src="../assets/iberverin.png"
          alt="redstun tear gas"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import getClient from '@/lib/stripe';

export default {
  name: 'MainPresentation',
  created: () => {
    getClient();
  },
  methods: {
    pay: async () => {
      const stripeClient = await getClient();
      stripeClient.open({
        description: 'Bombe Lacry',
        amount: 108 * 100,
        token: async token => {
          console.log('lol', token);
          const result = await axios.post('http://localhost:1323/charge', {
            token,
          });
          console.log('result', result);
        },
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  min-height: 100%;
}

@media (max-width: 768px) {
  .container {
    padding-top: 2rem;
  }
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;

  min-height: 100%;
}

img {
  display: block;
  margin: 0 auto;
  width: 100%;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

.watch-video {
  padding: 1rem;
  float: right;
}


@media (max-width: 768px) {
  .container {
    padding-top: 0;
  }
  .row {
    flex-direction: column-reverse;
  }
  .illustration {
    display: block;
    padding-right: 0;
    padding-left: 0;
  }
  .watch-video {
    float: inherit;
    text-align: center;
    margin: 0 auto;
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}

</style>
