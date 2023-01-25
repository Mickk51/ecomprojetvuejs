<template>
  <div>
    <header>
      <TopNavBar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
    </footer>
  </div>
  
  
    <!-- <TopBar />
    <NavBar />
    <router-view />
    <Footer /> -->
</template>

<script>

import TopNavBar from "./components/Top-nav-bar.vue"
// import NavBar from "./components/Nav-bar.vue"
// import TopBar from "./components/Top-bar.vue"
// import Footer from "./components/Footer-comp.vue"


export default {
  name: 'App',
  components: {
    TopNavBar,
    // NavBar,
    // TopBar,
    // Footer
  }
}
</script>

<style>

</style>
