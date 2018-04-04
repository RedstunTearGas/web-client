<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12 nav-links">
          <ul>
            <nav-link :label="$t('footer.legal')" to="/legal" />
            <nav-link :label="$t('footer.contact')" to="/contact" />
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

  margin-top: 5rem;

  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-bottom: 3px solid #C20114;
  background: #FFF;

  font-size: 16px;
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
