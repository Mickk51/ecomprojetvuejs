<template>
  <div class="carte-bg">
    <div class="carte-container">
      <p class="nom">Baume à barbe Corsaire</p>
      <img class="img-item" src="../assets/baume.png" alt="" />
      <p class="description">
        Ce baume vous assurera une hydratation optimale avec son parfum frais !
      </p>
      <p class="prix-item">15 €</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carte-container {
  margin: 10px;
  background: rgb(255, 255, 255);
  width: 400px;
  border-radius: 20px;
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
.nom {
  font-size: 2.1em;
  text-align: center;
}
</style>
