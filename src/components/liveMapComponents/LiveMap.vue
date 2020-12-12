<template>
  <div>
  <PolygonLayer CurrentAreaNo = this.CurrentAreaNo></PolygonLayer>
  </div>
</template>

<script>
import PolygonLayer from './PolygonLayer.vue';

export default {

  components: {
    PolygonLayer
  }
  
};
</script>