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
            <nav-link label="Buy" to="/buy" />
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

.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

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
  color: #C20114;
}

.nav-links {
  text-align: right;
}

@media screen and (max-width: 768px){
  .row {
    flex-direction: column;
  }

  .brand {
    padding: 1rem;
    margin-top: 3rem;
  }

  .nav-links {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 90%;
    -webkit-text-size-adjust: 100%;
    text-align: left;
    margin-bottom: 3rem;
  }
}

a {
  text-decoration: none;
}

</style>
