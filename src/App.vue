<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-black">
      <ul class="lista-titulo my-0">
        <h1 class="tienda-titulo">32 Bits</h1>
        <h2 class="tienda-subtitulo">Juegos de PC y consolas</h2>
      </ul>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-5 active">
            <router-link :to="{name: 'Inicio'}">Inicio</router-link>
          <li class="nav-item mx-5">
            <router-link :to="{name: 'Busquedas'}">Búsquedas</router-link>
          </li>
          <li class="nav-item mx-5">
            <router-link :to="{name: 'Ventas'}">Ventas</router-link>
          </li>
          <li class="nav-item mx-5">
            <router-link :to="{name: 'Total'}">Total</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style scoped>
  .navbar {
    background-color: black;
  }
  a {
    color: #fff;
  }
  .tienda-titulo{
    color: #fff;
    font-size: 30px;
  }
  .tienda-subtitulo{
    color: #fff;
    font-size: 10px;
  }
  .lista-titulo{
    list-style-type: none;
    text-align: center;
  }
</style>
