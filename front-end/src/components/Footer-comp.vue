<template>
  <div class="footer-container">
    <div class="logo-container"><img class="logo" src="../assets/logo-transparent.png" alt=""></div>
    <ul class="pages-liste">
        <li class="titre-liste">Section</li>
        <li>Page d'acceuil</li>
        <li>Les produits</li>
        <li>Nouveautés</li>
        <li>Mon compte</li>
        <li>Panier</li>
    </ul>
    <ul class="element-liste">
        <li class="titre-liste">Section</li>
        <li>Conditions générale de vente</li>
        <li>Charte</li>
        <li>Commandes</li>
        <li>Retour</li>
        <li>Réclamation</li>
    </ul>
    <ul class="socials">
        <li><img src="../assets/instagram.png" alt=""></li>
        <li><img src="../assets/twitter.png" alt=""></li>
        <li><img src="../assets/facebook.png" alt=""></li>
        <li><img src="../assets/snapchat.png" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-container {
        display: flex;
        justify-content: center;
    }
    .pages-liste {
        margin-left: 200px;
    }
    .logo-container {
        display: flex;
        align-items: center;
    }
    .logo {
        width: 200px;
        height: auto;
    }
    li {
        font-size: 1em;
        margin: 20px auto;
        font-weight: normal;
        list-style-type: none;
    }
    .titre-liste {
        font-size: 1.8em;
        font-weight: bold;
    }
    .element-liste {
        margin-left: 150px;
    }
    .socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 150px;
    }
    .socials li img {
        align-items: center;
        width: 30px;
        
    }
    li {
        padding: 0 10px;
    }

</style>