<template>
  <div>
    <TopBar />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>

  import NavBar from "./components/Nav-bar.vue"
  import TopBar from "./components/Top-bar.vue"
  import Footer from "./components/Footer-comp.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    TopBar,
    Footer
  }
}
</script>

<style>

</style>
