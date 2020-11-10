<template>

  <PolygonLayer CurrentAreaNo = this.CurrentAreaNo></PolygonLayer>

</template>

<script>
import PolygonLayer from './PolygonLayer.vue';

export default {
  props:
    ['CurrentAreaNo'],
  components: {
    PolygonLayer
  }
};
</script>