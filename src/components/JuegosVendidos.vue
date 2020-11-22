<template>
    <div class="container">
        <h1>Listado de ventas registradas</h1>
        <h2>{{ventasRegistradas}}</h2>
        <h1>Monto total de ventas</h1>
        <h2>$ {{totalVentas}}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'JuegosVendidos',
    computed: {
        ...mapGetters(['ventasRegistradas','totalVentas'])
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        margin-top: 30px;
    }
    h2 {
        text-align: center;
    }
</style>