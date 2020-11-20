<template>
    <div >
        <ItemInfo @openDrawer="visible = true"/>
        <Drawer @closeDrawer="visible = false" :visible="calcVisible"/>
    </div>
</template>

<script>
import Drawer from '@/components/Drawer.vue';
import ItemInfo from '@/components/ItemInfo.vue';


export default {
    name: 'Equipment',
    data(){
        return {
            visible: false
        }
    },
    components: {
        Drawer,
        ItemInfo
    },
    computed: {
        calcVisible() {
            return this.visible;
        }
    }
}
</script>

<style scoped>

</style>