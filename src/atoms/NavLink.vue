<template>
  <li><router-link class="nav-link" v-bind:to="to">{{label}}</router-link></li>
</template>

<script>
export default {
  name: 'NavLink',
  props: ['label', 'to'],
};
</script>

<style scoped>

a {
  text-decoration: none;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-bow-align: center;
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
