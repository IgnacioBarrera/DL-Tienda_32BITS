<template>
  <div class="container">
    <h1>{{msg1}}</h1>
    <h2>{{msg2}}</h2>
  </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: 'Inicio',
  components: {
    
  },
  computed: {
    ...mapState(["msg1", "msg2"])
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
    margin-top: 100px;
  }
</style>
