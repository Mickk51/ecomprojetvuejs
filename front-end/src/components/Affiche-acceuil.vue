<template>
    <div id="affiche-container">
        <div id="logo-container" class="zoom-in-zoom-out"><img class="logo-header" src="@/assets/logo-transparent.png" alt=""></div>
        <img id="affiche" src="../assets/bg.jpg" alt="">
    <div class="preuve-confiance">
        <div id="give-trust-proof-frensh-manufacturing">
            <p class="give-trust-proof-text">Des produits 100% <em>français</em></p>
            <img class="give-trust-proof-img" src="../assets/drapeau.png" alt="icone du drapeau français">
        </div>
        <div id="give-trust-proof-handmade">
            <p class="give-trust-proof-text"><em>Fabrication à la main</em></p>
            <img class="give-trust-proof-img-resized" src="../assets/faitmain.png" alt="icone certification fait à la main">
        </div>
        <div id="give-trust-proof-quality">
            <p class="give-trust-proof-text"><em>Qualité</em> garantie !</p>
        <img class="give-trust-proof-img-resized" src="../assets/iconebarbe.png" alt="icone barbe">
        </div>
    </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>
    @keyframes zoom {
    0% {
    transform: scale(1, 1);
    }
    50% {
    transform: scale(-1, 1);
    }
    100% {
    transform: scale(1, 1);
    }}

    .zoom-in-zoom-out {
        animation: zoom 3s ease-in-out infinite;
    }
    #give-trust-proof-frensh-manufacturing:hover {
        transform: translateX(-500px);
        transition: 0.5s ease;
    }
    #give-trust-proof-handmade:hover {
        transform: translateX(-500px);
        transition: 0.5s ease;
    }
    #give-trust-proof-quality:hover {
        transform: translateX(-500px);
        transition: 0.5s ease;
    }

    #give-trust-proof-frensh-manufacturing {
        position: absolute;
        top: 50px;
        right: -280px;
        display: flex;
        flex-direction: row-reverse;
        width: 350px;
        justify-content: space-between;
        box-shadow: 5px 5px 20px;
        padding: 5px 20px 5px 5px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    }
    #give-trust-proof-handmade {
        position: absolute;
        top: 215px;
        right: -230px;
        display: flex;
        flex-direction: row-reverse;
        width: 300px;
        justify-content: space-between;
        box-shadow: 5px 5px 20px;
        padding: 5px 20px 5px 5px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    }
    #give-trust-proof-quality {
        position: absolute;
        top: 380px;
        right: -180px;
        display: flex;
        flex-direction: row-reverse;
        width: 250px;
        justify-content: space-between;
        box-shadow: 5px 5px 20px;
        padding: 5px 20px 5px 5px;
        border-radius: 20px;
        backdrop-filter: blur(20px);
    }
    .give-trust-proof-img {
        width: 80px;
        vertical-align: middle;
    }
    .give-trust-proof-img-resized {
        width: 60px;
        margin-left: 10px;
    }
    .give-trust-proof-text {
        font-size: 1.2em;
        font-weight: bold;
    }
    #logo-container {
        border: 5px double;
        border-radius: 500px;
        position: absolute;
        top: 90px;
        left: 170px;
        width: 300px;
        height: 300px;
        box-shadow: 0px 0px 100px rgb(0, 0, 0);
        backdrop-filter: blur(15px);
        z-index: 2;

    }
    .logo-header {
        width: 180px;
        height: auto;
        position: relative;
        top: 66px;
        left: 60px;
    }
    #affiche-container {
        height: 500px;
        overflow: hidden;
        position: relative;
    }
    #affiche {
        width: 110%;
        height: auto;
        margin: auto;
        text-align: center;
        position: absolute;
        top: -200px;
        filter: opacity(90%) sepia(20%);
    }
</style>