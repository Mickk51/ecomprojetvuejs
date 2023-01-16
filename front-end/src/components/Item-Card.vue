<template>
        <!-- <div v-for="(item, index) in items" :key="index" class="items"> -->
    <div class="card-container">
        <div class="bg-container">
            <img class="bg" src="../assets/bg2.webp" alt="">
        </div>
        <p class="nom-produit"> produit </p>
        <img class="img-item" src="../assets/baume.png" alt="">
        <p class="description-produit">dzdzdd</p>
        <p class="prix-produit">prix</p>
        <button>Voir plus...</button>
        <img class="ajouter-panier" src="../assets/add-panier.png" alt="ajouter au panier">
    </div>
        
</template>

<script>
import items from '../assets/Items.json'

export default {
    data() {
        return {
            items
        }
    },
}
</script>

<style scoped>
    .card-container {
        border: 1px solid;
        overflow: hidden;
    }
    .bg {
        position: absolute;
        width: inherit;
    }
    .bg-container {
        border: 2px solid;
        width: 80%;
    }
</style>