<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/TraakLogoV1.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld
  }
}
</script>
