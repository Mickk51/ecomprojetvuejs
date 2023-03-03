<template>
<div class="page-connexion-template">
    <SeConnecter />
  <CreerCompte />
</div>
</template>

<script>
import SeConnecter from "@/components/Se-connecter.vue"
import CreerCompte from "@/components/Create-account.vue"

export default {
  components : {
    SeConnecter,
    CreerCompte,
  }
}
</script>

<style scoped>
  .page-connexion-template {
    display: flex;
    justify-content: space-around;
    margin: 250px 200px;
  }
</style>