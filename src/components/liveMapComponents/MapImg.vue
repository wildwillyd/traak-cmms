<template>
      <v-image :config="{
            image: image
          }"/>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      stageSize: {
        width: width,
        height: height
      },
      image: null
    };
  },
  created() {
    const image = new window.Image();
    image.src = require('../../assets/liveMapAssets/floorplan.jpg');
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  }
};
</script>