<template>
    <div>
        <h1>Super Compteur</h1>
        <p @click="increment">Vous avez cliqué {{ total }} fois</p>
        <hr>
        <p>Le total général depuis VueX est {{ totalGeneral }}</p>
        <p>Le double du total est {{ DoubleDuTotal }}</p>
    </div>
</template>

<script>
export default {
    name: 'Compteur',
    data() {
        return {
            total: 0 
        }
    },
    computed: {
        totalGeneral(){
            return this.$store.state.TotalFromVueX
        },
        DoubleDuTotal(){
            return this.$store.getters.DoubleDuTotal
        }
    },
    methods: {
        increment(){
            this.total ++
            this.$store.commit('setTotalFromVueX', this.totalGeneral += 1)
        }
    },
}
</script>

<style scoped>
    
</style>