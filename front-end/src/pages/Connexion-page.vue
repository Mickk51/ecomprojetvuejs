<template>
<div class="page-connexion">
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
  .page-connexion {
    display: flex;
    justify-content: space-around;
    margin: 80px 250px;
  }
</style>