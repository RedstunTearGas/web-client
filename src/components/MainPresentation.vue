<template>
  <div class="container main">
    <div class="row">
      <div class="six columns">
        <h1>ITC VENOM</h1>
        <div>
          <p>Most powerful &amp; convenient tear gas in the world.</p>
          <p>100% Made in France</p>
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

</style>
