<template>

     <a-layout>
     <a-layout-sider>
       <radio/>
     </a-layout-sider>

     <a-layout-content>
      <Map/>
     </a-layout-content>

     <a-layout-sider>
       <tree/>
     </a-layout-sider>
     </a-layout>

</template>

<script>
import Radio from '../components/liveMapComponents/Radio.vue'
//import Map from '../components/liveMapComponents/Konva.vue'
//stand-in for line above
import Map from '../components/liveMapComponents/HelloWorld.vue'
import Tree from '../components/liveMapComponents/Tree.vue'

export default {
  components: {
    Radio,
    Map,
    Tree
  }
}
</script>

<style lang="less">
</style>
