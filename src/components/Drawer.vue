<template>
  <div>
    <a-drawer
      title="Equipment List"
      placement="right"
      :closable="true"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
        <List />
    </a-drawer>
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
    name: "Drawer",
    components: {
        List
    },
    data() {
        return {
            //visible: false,
        };
    },
    props: ['visible'],
    methods: {
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.$emit('closeDrawer');
        },
    },
    computed: {
      isVisible(){
        return this.visible;
      },
    },
    
};
</script>