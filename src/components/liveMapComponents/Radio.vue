<template>
<div id=radio>
  <a-radio-group v-model="value" @change="onChange">
    <a-radio :value="1">
      K-12 Building Floor 1
    </a-radio>
    <a-radio :value="2">
      K-12 Building Floor 2
    </a-radio>
    <a-radio :value="3">
      Nature Observatory
    </a-radio>
    <a-radio :value="4">
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