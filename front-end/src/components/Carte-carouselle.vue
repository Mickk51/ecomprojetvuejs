<template>
  <div class="carte-bg">
    <div class="carte-container">
      <p class="nom-item">Baume à barbe Corsaire</p>
      <img class="img-item" src="../assets/baume.png" alt="" />
      <p class="description-item">
        Ce baume vous assurera une hydratation optimale avec son parfum frais !
      </p>
      <p class="prix-item">15 €</p>
      <button class="ajouter-panier">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      
    },
};
</script>

<style scoped>
.carte-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: rgb(255, 255, 255);
  width: 400px;
  height: 500px;
  border-radius: 20px;
}
.ajouter-panier {
  width: auto;
  margin: auto auto 50px;
  background: #b4464cbd;
  border: none;
  border-radius: 40px;
  box-shadow: 1px 1px 10px;
  padding: 10px 40px;
  font-weight: bold;
  cursor: pointer;
}
.description-item {
  width: 80%;
  margin: auto;
}
.prix-item {
  text-align: center;
}
.carte-bg {
  border: 2px solid;
  background-image: url("../assets/bg2.webp");
}
.img-item {
  display: flex;
  width: 200px;
  margin: auto;
}
.nom-item {
  font-size: 2.1em;
  text-align: center;
}
</style>
