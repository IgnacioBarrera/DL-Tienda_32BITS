<template>
  <div>
      <TotalProductos/>
      <ListadoJuegos/>
      <StockProductos/>
  </div>
</template>

<script>

import StockProductos from '../components/StockProductos.vue';
import TotalProductos from '../components/TotalProductos.vue';
import ListadoJuegos from '../components/ListadoJuegos.vue';

export default {
    name: 'Busqueda',
    components: {
      TotalProductos,
      StockProductos,
      ListadoJuegos,
    }
}
</script>

<style scoped>

</style>