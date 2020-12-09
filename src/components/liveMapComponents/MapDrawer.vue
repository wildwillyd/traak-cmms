<template>
    <a-drawer 
    :title="title"
    placement="right"
    :closable="true"
    :visible="visible"
    @close="onClose"
    >
        <MapFilter v-if="type == false"/>
        <p v-else> Alternate Content </p>
    </a-drawer>
</template>

<script>
import MapFilter from '@/components/liveMapComponents/MapFilter.vue'

export default {
    name: "MapDrawer",
    props: ['visible', 'type'],
    components: {
        MapFilter,
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