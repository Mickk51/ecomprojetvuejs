<template>
<div class="liste-produit-container">
  <MenuFiltrant />
  <ItemCard />
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

<style>

</style>