<template>
  <div class="reinssurance-element-template">
    <div class="first-element element">
        <i class="fa-solid fa-leaf reinssurance-icon"></i>
        <p class="reinssurance-text">Des produits 100 % Bio</p>
        <p class="reinssurance-second-text">Parce qu'on est soucieux de la nature, et que l'on veut le meilleurs pour vous ;)    </p>
    </div>
    <div class="second-element element">
        <i class="fa-solid fa-hands-holding-circle reinssurance-icon"></i>
        <p class="reinssurance-text">Fabrication à la main & made in France</p>
        <p class="reinssurance-second-text">Pour favoriser la croissance Française évidemment !</p>

    </div>
    <div class="third-element element">
        <i class="fa-solid fa-truck-fast reinssurance-icon"></i>
        <p class="reinssurance-text">Livraison en moins de 5 jours</p>
        <p class="reinssurance-second-text">Afin de vous faire profiter de nos produit le plus vite possible !</p>
    </div>
    <div class="fourth-element element">
        <i class="fa-solid fa-lock  reinssurance-icon"></i>
        <p class="reinssurance-text">Paiement 100% sécurisé</p>
        <p class="reinssurance-second-text">La protection de vos données bancaire est une priorité !</p>
    </div>   
  </div>
</template>

<script>
export default {

}
</script>

<style>
.reinssurance-element-template {
    display: flex;
    justify-content: space-around;
    background-color: rgba(42, 42, 42, 0.934);
    padding: 30px 0 60px 0;
    color: white;
}
.reinssurance-text {
    font-size: 1.8em;
    width: 70%;
    margin: auto;
}
.reinssurance-second-text {
    width: 60%;
    margin: auto;
    font-style: italic;
    color: rgb(160, 160, 160);
}
.reinssurance-icon {
    font-size: 5em;
}
.element {
    text-align: center;
}

</style>