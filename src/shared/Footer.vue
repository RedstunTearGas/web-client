<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="two columns brand">
          More ...
        </div>
        <div class="ten columns nav-links">
          <ul>
            <nav-link label="about" to="/about" />
            <nav-link label="legal" to="/legal" />
            <nav-link label="contact" to="/contact" />
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

  margin-top: 3rem;
  border-top: 1px dashed #252323;
}

ul, li {
  margin-bottom: 0;
}

ul {
  display: inline-flex;
  flex-wrap: nowrap;
  z-index: 999;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;
}

ul li + li {
  margin-left: 1.5rem;
}

.brand {
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Poiret One', cursive !important;
}

.nav-links {
  text-align: right;
}

.nav-link {
  flex-grow: 1;
  -webkit-box-flex: 1;
  white-space: nowrap;

  text-transform: uppercase;
  padding: 0;
  opacity: .6;
}

</style>
