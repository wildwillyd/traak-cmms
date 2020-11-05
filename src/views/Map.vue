<template>

     <a-layout>

     <a-layout-content>
      <LiveMap/>
     </a-layout-content>

     <a-layout-sider width="250" >
       <div style="margin: 0;
                            position: absolute;
                            top: 50%;
                          -ms-transform: translateY(-50%);
                          transform: translateY(-50%);">

      <div style="border:">
       Facilities
      </div>

       <radio/>

      <div style="padding:100px"/>

       Selected Facility Equipment:
       
       <tree/>
      </div>
     </a-layout-sider>
     </a-layout>

</template>

<script>
import Radio from '../components/liveMapComponents/Radio.vue'
import LiveMap from '../components/liveMapComponents/LiveMap.vue'
import Tree from '../components/liveMapComponents/Tree.vue'

export default {
  components: {
    Radio,
    LiveMap,
    Tree
  }
}
</script>

<style lang="less">
</style>
