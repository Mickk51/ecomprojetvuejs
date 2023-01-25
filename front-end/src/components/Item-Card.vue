<template>
    <div class="card-container" v-for="item in items" v-bind:key="item.index">
        <div class="bg-contain">
            <img class="bg" src="../assets/bg2.webp" alt="image du produit">
        </div>
        <p class="nom-produit">{{item.nom}}</p>
        <div class="card-text">
                <router-link to="FicheProduit"><img class="img-item" v-bind:src="item.image" alt=""></router-link>                
            <p class="description-produit">{{ item.description }}</p>
            <p class="prix-produit">{{ item.prix }} €</p>
            <div class="btn">
                <router-link class="link" to="FicheProduit"><p class="voir-plus">Voir plus...</p></router-link><img class="ajouter-panier"  src="../assets/add-panier.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import items from '../assets/Items.json'

export default {
    data() {
        return {
            items,
        }
    }
}
</script>

<style scoped>
    .link {
        text-decoration: none;
        color: black;
    }
    .img-item {
        width: 80%;
        max-height: 250px;
        margin: auto;       
    }
    .ajouter-panier {
        width: 40px;
        border: 1px solid;
        border-radius: 70px;
        padding: 15px 20px 15px 15px;
    }
    .btn {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .voir-plus {
        width: 100%;
        background-image: url("../assets/bg2.webp");
        padding: 10px 20px;
        border-radius: 50px;
        box-shadow: 1px 1px 20px;
        font-size: 1.3em;
        font-weight: bold;
        text-shadow: 1px 1px 10px white;
    }
    .card-text {
        width: 90%;
        margin: auto;
        text-align: center;
    }
    .nom-produit {
        position: relative;
        top: -60px;
        text-align: center;
        font-size: 2.5em;
        margin: 0;
    }
    .card-container {
        overflow: hidden;
        border-radius: 50px;
        box-shadow: 1px 1px 10px grey;
        padding-bottom: 20px;

    }
    .bg {
        position: relative;
        opacity: 80%;
        margin: 0;
    }
    .bg-contain {
        overflow: hidden;
        position: relative;
        height: 70px;
    }

</style>