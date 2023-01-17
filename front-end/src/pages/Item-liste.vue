<template>
<div class="liste-produit-container">
  <MenuFiltrant />
  <div class="liste-items">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </div>

  </div>
</template>

<script>
import MenuFiltrant from '../components/menu-filtrant.vue'
import ItemCard from "../components/Item-Card.vue"

export default {
  components: {
    MenuFiltrant,
    ItemCard
  }
}
</script>

<style scoped>
  .liste-produit-container {
    margin: 50px;
  }
  .liste-items {
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
</style>