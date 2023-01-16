<template>
    <div>
        <h3>Nos meilleur produits, pour vous :</h3>
        <div class="carousel">
            <div class="carte"><CarteCarouselle /></div>
        </div>
    </div>
</template>

<script>
import CarteCarouselle from './Carte-carouselle.vue'
import items from '../assets/Items.json'
export default {
        data : () => {
      return {
        items
      }
    },
    components: {
        CarteCarouselle
    }
}
</script>


<style scoped>
.carte {
    display: flex;
    justify-content: space-around;
}
h3 {
    text-align: center;
    font-size: 3em;
    margin: 30px 0 50px 0;
}
</style>