<template>
    <div class="container">
        <h4>Cantidad de juegos en stock: {{stockJuegos}}</h4>
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Vender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in traerStock" :key="index">
                    <td>{{item.codigo}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.stock}}</td>
                    <td>$ {{item.precio}}</td>
                    <td><button class="btn btn-danger" @click="vender(index)">Vender</button></td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'ListaVentas',
    computed: {
        traerStock(){
            return this.$store.getters.cantidadProductos;
        },
        stockJuegos(){
            return this.$store.getters.totalProductos;
        },
    },
    methods: {
        ...mapActions(['vender'])
    },
}
</script>

<style>
</style>
