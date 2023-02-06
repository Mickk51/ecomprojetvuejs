<template>
    <div>
        <!-- <router-link to="/pagetest"><button>Test page</button></router-link> -->
        <BanniereHome />
        <ReinssuranceElements />
        <CarouselProduits />
        <hr>
        <UsersReviews />
        <hr>
        <RecettesHome />
        <FooterComponent />
    </div>
</template>

<script>
  import BanniereHome from "@/components/Banniere-home.vue"
  import CarouselProduits from "@/components/Carousel-produits.vue"
  import ReinssuranceElements from "@/components/Reinssurance-elements.vue"
  import RecettesHome from "@/components/Recettes-home.vue"
  import FooterComponent from "@/components/Footer-component.vue"
  import UsersReviews from "@/components/Users-reviews.vue"

export default {
  components: {
    BanniereHome,
    CarouselProduits,
    ReinssuranceElements,
    RecettesHome,
    FooterComponent,
    UsersReviews,
  }
}
</script>

<style scoped>
  hr {
    width: 70%;
    margin: auto;
    color: rgb(171, 171, 171);
  }
</style>