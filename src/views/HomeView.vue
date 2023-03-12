<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Compteur />
  </div>
</template>

<script>
// @ is an alias to /src
import Compteur from '@/components/compteur.vue'

export default {
  name: 'HomeView',
  components: {
    Compteur
  }
}
</script>
