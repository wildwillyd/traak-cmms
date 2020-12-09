<template>
    <a-drawer 
    :title="title"
    placement="right"
    :closable="true"
    :visible="visible"
    @close="onClose"
    >
        <MapFilter v-if="type == false"/>
        <MapItems v-else />
    </a-drawer>
</template>

<script>
import MapFilter from '@/components/liveMapComponents/MapFilter.vue'
import MapItems from '@/components/liveMapComponents/MapItems.vue'

export default {
    name: "MapDrawer",
    props: ['visible', 'type'],
    components: {
        MapFilter,
        MapItems
    },
    computed: {
        title(){
            if (!this.type) return "Filter";
            return "All Items";
        }
    },
    methods: {
        onClose(){
            this.$emit('closeDrawer');
        }
    }
}
</script>