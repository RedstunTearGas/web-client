<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="two columns brand">
          <router-link to="/">Redstun</router-link>
        </div>
        <div class="ten columns nav-links">
          <ul>
            <nav-link label="Sprays" to="/tear-gas-sprays" />
            <nav-link label="Additives" to="/additives" />
            <nav-link label="Raw Materials" to="/raw-materials" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script type = "text/javascript">
export default {
  name: 'Navigation',
  props: [],
};
</script>

<style scoped>

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;
}

nav {
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  height: 64px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  z-index: 999;
}

ul, li {
  margin-bottom: 0;
}

ul {
  display: inline-flex;
  flex-wrap: nowrap;
  z-index: 999;
}

ul li + li {
  margin-left: 1.5rem;
}

.brand a {
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Poiret One', cursive !important;
}

.nav-links {
  text-align: right;
}


</style>
