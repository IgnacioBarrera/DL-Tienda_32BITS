  
<template>
  <div>
      <div class="card text-center mt-5">
            <div class="card-header">
                PRODUCTOS CON STOCK
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <footer class="blockquote">Total: <cite title="Source Title">{{cantidadProductos.length}}</cite></footer>
                </blockquote>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StockProductos',
    computed: {
        ...mapGetters(['cantidadProductos'])
    },
}
</script>

<style scoped>
</style>