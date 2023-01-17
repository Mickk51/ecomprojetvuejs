<template>
    <div>
        <h3>Nos meilleur produits, pour vous :</h3>
        <div class="carousel">
            <Item-Card />
            <Item-Card />
            <Item-Card />
        </div>
    </div>
</template>

<script>
import ItemCard from './Item-Card.vue'
import items from '../assets/Items.json'
export default {
        data : () => {
      return {
        items
      }
    },
    components: {
        ItemCard
    }
}
</script>


<style scoped>
.carousel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 85%;
    margin: auto;
    gap: 30px;
}
h3 {
    text-align: center;
    font-size: 3em;
    margin: 30px 0 50px 0;
}
</style>