<template>
      <v-image :config="{
            image: image,
            width:900,
            height:900
          }"/>
</template>

<script>
import store from "../../store/index.js"

const width = window.innerWidth;
const height = window.innerHeight;

let items= [
      {path: '../../assets/liveMapAssets/A701-1.png'},
      {path: '../../assets/liveMapAssets/A801-1.png'},
      {path: '../../assets/liveMapAssets/A802-1.png'},
      {path: '../../assets/liveMapAssets/A803-1.png'},
      {path: '../../assets/liveMapAssets/A804-1.png'},
      {path: '../../assets/liveMapAssets/A805-1.png'},
      {path: '../../assets/liveMapAssets/A806-1.png'}
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
    //let item = items[this.AreaNo];
    //image.src = require(items[getCurrentMap()]); // replace with item.path to revert
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  },
  computed: {
    getCurrentMap(){
    return store.getters.getMapState;
    }
  }
};
</script>