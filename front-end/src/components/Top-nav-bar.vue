<template>
<header>
   <nav class="navbar navbar-expand-md p-0">
        <div class="bgshadow container-fluid">
            <a class="navbar-brand" href="#">
                <img class="logo" src="../assets/logo2.png" alt="">
            </a>  
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-0 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/" >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/Produits">Les produits</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/About" >La marque</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/About" >Contact</router-link>
                </li>
            </ul>
                <router-link to="/connexion"><i class="fa-regular fa-user icon-connexion"></i></router-link>
            </div>
        </div>
    </nav> 
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bgshadow {
        box-shadow: 1px 1px 10px white;

    }
    .logo {
        position: absolute;
        right: 50%;
        max-width: 150px;
        transform: translateX(75px);
   }
</style>