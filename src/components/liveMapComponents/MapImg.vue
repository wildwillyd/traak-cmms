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
      },
      image: null
    };
  },
  created() {
      const image = new window.Image();
      image.src = items[this.$store.getters.getMapState].path;
      image.onload = () => {
        //set image only when it is loaded
        this.image = image;
      };
      
  },

  computed: {
    mapImage(){
      const image = new window.Image();
      image.src = items[this.$store.getters.getMapState].path;
      image.onload = () => {
        //set image only when it is loaded
        console.log("Image loaded")
        this.image = image;
      };
      console.log("returning image");
      return image;
    }
  }
};
</script>