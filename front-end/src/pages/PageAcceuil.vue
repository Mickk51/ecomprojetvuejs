<template>
    <div>
        <TopBar />
        <NavBar />
        <afficheAcceuil />
        <BestSellers />
    </div>
</template>

<script>
    import TopBar from "@/components/Top-bar.vue"
    import AfficheAcceuil from '@/components/Affiche-acceuil.vue'
    import NavBar from '@/components/Nav-bar.vue'
    import BestSellers from "@/components/Best-sellers.vue"

export default {
  components: {
    TopBar,
    AfficheAcceuil,
    NavBar,
    BestSellers
  }
}
</script>

<style scoped>
  .best-sellers {
    border: 1px solid;

  }
</style>