<template>
    <div>
        <afficheAcceuil />
        <BestSellers />
        <hr>
        <aPropos />
        <hr>
    </div>
</template>

<script>
    import AfficheAcceuil from '@/components/Affiche-acceuil.vue'
    import BestSellers from "@/components/Best-sellers.vue"
    import aPropos from '@/components/A-propos.vue'

export default {
  components: {
    AfficheAcceuil,
    BestSellers,
    aPropos,
  }
}
</script>

<style scoped>
  .best-sellers {
    border: 1px solid;

  }
  hr {
    width: 80%;
    margin: 100px auto;
  }
</style>