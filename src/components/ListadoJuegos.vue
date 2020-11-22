<template>
  <div class="container lista">
    <ul>
        <li v-for="item in listadodelosProductos" :key="item.id" :class="item.color">{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}} | {{item.precio}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ListadoJuegos',
    computed: {
        ...mapGetters(['listadodelosProductos']),
    }
}
</script>

<style scope>
    ul {
        inline-size: max-content;
    }
    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }
    .yellow {
        background-color: yellow;
    }
    .lista {
        margin-left: 35%;
    }
</style>