<template>
<header>
   <nav class="navbar navbar-expand-md p-0 fixed-top">
        <div class="bgshadow container-fluid">
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-0 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/" >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/items">Les produits</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/about" >La marque</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/about" >Contact</router-link>
                </li>
            </ul>
                <router-link to="/administration-page"><p>admin</p></router-link>
                <router-link to="/connexion"><i class="fa-regular fa-user icon-connexion"></i></router-link>
            </div>
        </div>
    </nav> 
</header>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style scoped>
    .navbar {
        background-color: #e5e5dbcf;
    }
    .bgshadow {
        box-shadow: 1px 1px 10px white;
    }
    
</style>