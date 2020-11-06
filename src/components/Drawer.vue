<template>
  <div>
    <a-button type="primary" @click="showDrawer">
      Open
    </a-button>
    <a-drawer
      title="Equipment List"
      placement="right"
      :closable="true"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
        <List />
      <!--<p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>-->
    </a-drawer>
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
    name: "Drawer",

    data() {
        return {
            visible: false,
        };
    },
    methods: {
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    },
    components: {
        List
    }
};
</script>