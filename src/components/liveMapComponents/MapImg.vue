<template>
      <v-image :config="{
            image: image
          }"/>
</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  props: ['CurrentAreaNo'],
  data() {
    /* eslint-disable no-unused-labels */
    items: [
      {path: '../../assets/liveMapAssets/A701-1.png'},
      {path: '../../assets/liveMapAssets/A801-1.png'},
      {path: '../../assets/liveMapAssets/A802-1.png'},
      {path: '../../assets/liveMapAssets/A803-1.png'},
      {path: '../../assets/liveMapAssets/A804-1.png'},
      {path: '../../assets/liveMapAssets/A805-1.png'},
      {path: '../../assets/liveMapAssets/A806-1.png'}
    ]
    /* eslint-enable no-unused-labels */
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
    image.src = require(this.items.path[this.CurrentAreaNo]);
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  }
};
</script>