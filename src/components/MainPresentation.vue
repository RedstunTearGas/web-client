<template>
  <div class="container main">
    <div class="row">
      <div class="six columns">
        <h1>ITC VENOM</h1>
        <h2>(Iberverin Gel)</h2>
        <div>
          <p>The most powerful &amp; innovative tear gas in the world.</p>
          <br />
          <ul>
            <li>Radish/Broccoli extract</li>
            <li>CS Free</li>
            <li>OC Free</li>
            <li>High irritation power</li>
            <li>Immediate stopping action</li>
            <li>Fast recovery (10 min.)</li>
          </ul>
          <p>Made in France</p>
          <p><b>Patent pending</b></p>
        </div>
      </div>
      <div class="six columns">
        <img
          src="../assets/itc-venom.png"
          alt="redstun tear gas"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPresentation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
 height: 100%;
}



.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;

  height: 100%;
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

</style>
