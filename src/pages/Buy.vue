<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ $t("buy.h1") }}</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 partner">
          <a target="_blank" href="https://www.europarm.fr/en/produit-12091-Aerosol-incapacitant-ITC-Venom-50-ml-Police"><h2>EuropArm</h2></a>
          <div>
            <p>{{ $t("buy.europarm.info1") }}</p>
            <p>{{ $t("buy.europarm.info2") }}</p>
            <p>BP 10025, 72200 La Flèche</p>
            <p>+33 (0)2 43 48 50 00</p>
          </div>
        </div>
        <div class="col-md-6 partner">
          <h2>Armurerie Dune</h2>
          <div>
            <p>76 Avenue des Champs-Elysées</p>
            <p>Arcades du lido</p>
            <p>75008 Paris</p>
            <p>France</p>
            <p>+33 (0)1 53 76 05 51</p>
          </div>
        </div>
        <div class="col-md-6 partner">
          <a target="_blank" href="http://tir1000.eu/defense/1777-bombe-lacrymogene-itc-venom-venom-police.html"><h2>Armurerie Tir 1000</h2></a>
          <div>
            <p>90 Rue Jeanne d'Arc</p>
            <p>75013 Paris</p>
            <p>France</p>
            <p>+33 (0) 1 45 83 34 41</p>
          </div>
        </div>
        <div class="col-md-6 partner">
          <a target="_blank" href="https://www.flconseilsparis.com/bombe-lacrymogene-itc-venom-50-ml"><h2>FL Conseils</h2></a>
          <div>
            <p>13 Rue de Palestro</p>
            <p>75002 Paris</p>
            <p>France</p>
            <p>+33 (0)1 40 41 99 61</p>
          </div>
        </div>
        <div class="col-md-6 partner">
          <h2>Imbach Boutique</h2>
          <div>
            <p>16 PLACE LOUIS IMBACH</p>
            <p>49100 ANGERS</p>
            <p>FRANCE</p>
          </div>
        </div>
      </div>
    </div>
    <bottom-footer />
  </div>
</template>

<script>

export default {
  name: 'Buy',
};
</script>

<style scoped>

  .partner {
    margin-top: 2rem;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: underline;
  }

</style>
