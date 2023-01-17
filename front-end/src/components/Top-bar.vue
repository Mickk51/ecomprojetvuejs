<template>
  <div id="entete">
    <form action="">
      <div class="search-bar-container">
        <input type="search" id="search-bar" placeholder="Entrez votre recherche...">
        <img class="icon-loupe" src="../assets/icon-loupe.png" alt="">
      </div>
    </form>
    <div class="icon-user-container">
      <router-link to="/Connexion"><img  class="icon-user" src="@/assets/icon-connexion.png" alt=""></router-link>
      <router-link to="/Panier"><img class="icon-user" src="@/assets/icon-panier.png" alt=""></router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },

}
</script>

<style scoped>

  .search-bar-container {
    margin-top: 5px;
    display: flex;
  }
  #search-bar {
    border-radius: 100px;
    border: none;
    box-shadow: 1px 1px 5px #334E77;
    height: 30px;
    width: 300px;
    padding: 10px;
  }
  .icon-user {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 40px;
    margin-left: 20px;
    padding: 5px;
  }
  #entete {
    margin: 5px 0px 5px 0px;
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
  }
  .icon-loupe {
    width: 30px;
    height: auto;
    background: rgba(210, 210, 210, 0.734);
    border-radius: 20px;
    margin-left: 10px;
  }
</style>