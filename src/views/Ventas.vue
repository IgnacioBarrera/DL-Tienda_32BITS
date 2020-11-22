<template>
  <div>
      <h1>Ventas</h1>
      <StockProductos/>
      <ListadoVentas/>
  </div>
</template>

<script>

import StockProductos from '../components/StockProductos.vue';
import ListadoVentas from '../components/ListadoVentas.vue'

export default {
    name: 'Ventas',
    components: {
        StockProductos,
        ListadoVentas,
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>