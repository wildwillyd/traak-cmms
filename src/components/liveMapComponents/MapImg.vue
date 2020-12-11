<template>
    <v-image :config="configImg"/>
</template>

<script>

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
            image: null,
            height: null,
            width: null
        };
    },
    created() {
        const image = new window.Image();
        image.src = items[this.$store.getters.getMapState].path;
        image.onload = () => {
            //set image only when it is loaded
            this.image = image;
            this.width = image.width;
            this.height = image.height;
            this.$emit('stageSize', this.width, this.height);
        };
    },

    computed: {
        configImg: function() {
            return {
                x: 0,
                y: 0,
                image: this.image,
                width: this.width,
                height: this.height
            }
        },
    },

    mounted() {
        this.image.src = (items[this.$store.getters.getMapState].path);
    }
};
</script>