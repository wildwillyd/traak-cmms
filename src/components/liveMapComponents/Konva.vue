<template>
  <div>
    <v-stage ref="stage" :config="stageSize">
        <Map/>
    </v-stage>
  </div>
</template>

<script>

import Map from './Map.vue'

const width = window.innerWidth;
const height = window.innerHeight;

export default {
  components: {
    Map
  },
  data() {
    return {
      stageSize: {
        width: width,
        height: height
      }
    };
  }
};
</script>