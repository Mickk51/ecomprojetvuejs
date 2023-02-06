<template>
    <div class="banner-container">
        <img class="banner" src="../assets/bg-new.jpg" alt="">
        <img class="logo" src="../assets/logo2.png" alt="">
        <div class="text-container">
            <div class="text">
                <h2 class="title-banner">En ce moment seulement !</h2>
                <p class="text">Retrouvez la sélection de nos meilleurs produits jusqu'a -70% !</p>
            </div>
            <div class="btn-container d-flex justify-content-end mt-5">
                <button class="btn btn-primary">En profiter !</button>
            </div>    
        </div>        
    </div>
</template>

<script>
export default {

}
</script>

<style>
.logo {
        position: absolute;
        right: 50%;
        top: 2%;
        max-width: 200px;
        transform: translateX(50%);
        z-index: 10;
   }
    .banner-container {
        position: relative;
        height: 700px;
        overflow: hidden;
    }
    .banner {
        width: 110%;
        position: absolute;
        top: -180px;
    
    }
    .text-container {
        position: absolute;
        top: 40%;
        left: 5%;
    }
    .title-banner {
        font-size: 3em;
    }
    .text {
        font-size: 1.2em;
    }
    .btn  {
    
    }

</style>