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
    image.src = "https://i.paste.pics/2cb1ebd121196d95a69a6b94a5feef16.png?trs=f16399b783099d2f0c5b6abc9466e9f44c5850bd30d34a6bc4a38a128c9c386e";
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
  }
};
</script>