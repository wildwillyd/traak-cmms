<template>
<div id=radio>
  <a-radio-group v-model="value" @change="onChange">
    <a-radio :value="1" style="color:white">
      K-12 Building Floor 1
    </a-radio>
    <a-radio :value="2" style="color:white">
      K-12 Building Floor 2
    </a-radio>
    <a-radio :value="3" style="color:white">
      Nature Observatory
    </a-radio>
    <a-radio :value="4" style="color:white">
      Athletics Building
    </a-radio>
  </a-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
    };
  },
  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>

<style lang="less">
</style>