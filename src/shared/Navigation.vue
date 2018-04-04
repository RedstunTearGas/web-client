<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="two columns brand">
          <router-link to="/">Redstun</router-link>
        </div>
        <div class="ten columns nav-links">
          <ul>
            <nav-link :label="$t('nav.sprays')" to="/tear-gas-sprays" />
            <nav-link :label="$t('nav.additives')" to="/additives" />
            <nav-link :label="$t('nav.rawMaterials')" to="/raw-materials" />
            <nav-link :label="$t('nav.buy')" to="/buy" />
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
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  background-color: #FFF;

  box-shadow: 0 1px 3px 0 hsla(0, 0%, 0%, 0.1);
  border-top: 3px solid #C20114;

  margin-bottom: 0;

  z-index: 10;
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
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Comfortaa', cursive !important;
  color: #C20114;
}

.nav-links {
  text-align: right;
  font-size: 15px;
}

@media screen and (max-width: 768px){
  .row {
    flex-direction: column;
    align-items: initial;
  }

  .brand {
    padding: 1rem;
  }

  .nav-links {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    -webkit-text-size-adjust: 100%;
    text-align: left;
  }

  .nav-links ul {
    flex-direction: column;
    width: 100%;
  }

  .nav-links li {
    margin-top: 1rem;
    width: 100%;
  }

  .nav-links li + li {
    margin-left: 0;
  }

  .container {
    padding-top: 0;
  }
}

a {
  text-decoration: none;
}

</style>
