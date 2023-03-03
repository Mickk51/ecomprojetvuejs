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
</template>

<script>

import TopNavBar from "./components/Top-nav-bar.vue"

export default {
  name: 'App',
  components: {
    TopNavBar,
  }
}
</script>

<style>

</style>
