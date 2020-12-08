<template>
    <a-drawer 
    title="Filter"
    placement="right"
    :closable="true"
    :visible="visible"
    @close="onClose"
    >
        Facilities
        <div :style="{paddingBottom: '50px'}">
        <MapSelect />
        </div>
        
        Selected Facility Equipment:
        <Tree />
    </a-drawer>
</template>

<script>
import Tree from '@/components/liveMapComponents/Tree.vue'
import MapSelect from '@/components/liveMapComponents/MapSelect.vue'

export default {
    name: "MapDrawer",
    props: ['visible'],
    components: {
        Tree,
        MapSelect
    },
    methods: {
        onClose(){
            this.$emit('closeDrawer');
        }
    }
}
</script>