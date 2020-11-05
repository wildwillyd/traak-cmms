<template>
    <v-layer>
        <v-rect
          v-for="item in list"
          :key="item.id"
          :config="{
            x : item.x, y: item.y, width: 100, height: 100, fill: 'red',
          }"></v-rect>

    </v-layer>

</template>

<script>
const width = window.innerWidth;
const height = window.innerHeight;

export default {
  data() {
    return {
      list: [{ x: 100, y: 100, width: 100, height: 100, fill: 'blue' }],
      stageSize: {
        width: width,
        height: height
      }
    };
  },
  methods: {
    handleClick(evt) {
      const stage = evt.target.getStage();
      const pos = stage.getPointerPosition();
      this.list.push(pos);

      this.save();
    },

    load() {
      const data = localStorage.getItem('storage') || '[]';
      this.list = JSON.parse(data);
    },

    save() {
      localStorage.setItem('storage', JSON.stringify(this.list));
    }
  },
  mounted() {
    this.load();
  }
};
</script>