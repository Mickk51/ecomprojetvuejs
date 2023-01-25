<template>
<div class="nav-container">
    <div class="bg-container"><img class="bg2" src="../assets/bg2.webp" alt=""></div>
  <nav>
    <router-link class="link" to="/"><li>Acceuill</li></router-link>
    <router-link class="link" to="Produits"><li>Items</li></router-link>
    <router-link class="link" to="About"><li>A propos</li></router-link>
    <router-link class="link" to="/Connexion"><li>Mon compte</li></router-link>
    <router-link class="link" to="/Panier"><li>Panier</li></router-link>
  </nav>
  <div class="bg-container2"><img class="bg2" src="../assets/bg2.webp" alt=""></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .link {
        text-decoration: none;
        color: black;
    }
    li:hover {
        font-size: 2.2em;
        background: rgba(255, 255, 255, 0.355);
        transition: 0.5s ease;
    }

    .bg-container {
        position: absolute;;
        width: 95%;
        height: 50px;
        overflow: hidden;
        margin: auto;
    }

    .nav-container {
        margin: 20px auto;
        width: 95%;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    li {
        list-style-type: none;
        font-size: 1.8em;
        padding-left: 40px;
        padding-right: 40px;
        backdrop-filter: blur(3px);
        border-radius: 20px;
        font-weight: bold;
    }
    nav {
        display: flex;
        justify-content: space-around;  
    }
</style>