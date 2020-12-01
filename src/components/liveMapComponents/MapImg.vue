<template>
      <v-image :config="{
            image: mapImage, 
            width: 900,
            height: 900
          }"/>
</template>

<script>

const width = window.innerWidth;
const height = window.innerHeight;

let items= [
      {path: require('../../assets/liveMapAssets/A701-1.png')},
      {path: require('../../assets/liveMapAssets/A801-1.png')},
      {path: require('../../assets/liveMapAssets/A802-1.png')},
      {path: require('../../assets/liveMapAssets/A803-1.png')},
      {path: require('../../assets/liveMapAssets/A804-1.png')},
      {path: require('../../assets/liveMapAssets/A805-1.png')},
      {path: require('../../assets/liveMapAssets/A806-1.png')}
    ]

export default {
  data() {
    return {
      items,
      stageSize: {
        width: width,
        height: height
      }
    };
  },
  created() {
    
  },
  computed: {
    path(){
      return items[this.$store.getters.getMapState].path;
    },
    mapImage(){
      const image = new window.Image();
      image.src = this.path;
      //image.onload = () => {
        // set image only when it is loaded
        //this.image = image;
      //};
      return image;
    }
  }
};
</script>