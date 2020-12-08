<template>
    <v-image :config="configImg"/>
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
    name: "MapImg",
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
        configImg: function() {
            return {
                x: 0,
                y: 0,
                image: this.image,
                width: 900,
                height: 900
            }
        },
    },

    mounted() {
        this.image.src = require(items[this.$store.getters.getMapState].path);
    }
};
</script>