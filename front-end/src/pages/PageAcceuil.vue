<template>
    <div>
        <!-- <router-link to="/pagetest"><button>Test page</button></router-link> -->
        <BanniereHome />
        <hr>
        <aPropos />
        <hr>
    </div>
</template>

<script>
  import BanniereHome from "@/components/Banniere-home.vue"
    import aPropos from '@/components/A-propos.vue'

export default {
  components: {
    aPropos,
    BanniereHome
  }
}
</script>

<style scoped>

</style>