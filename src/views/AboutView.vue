<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Compteur />
  </div>
</template>

<script>

import Compteur from '@/components/compteur.vue'

export default {
  name: 'AboutView',
  components: {
    Compteur
  }
}

</script>