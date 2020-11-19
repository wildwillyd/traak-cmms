<template>
    <div>
        <h1>
            This is the Equipment Page
        </h1>
        <ItemInfo/>
        <Drawer />
    </div>
</template>

<script>
import Drawer from '@/components/Drawer.vue';
import ItemInfo from '@/components/ItemInfo.vue';

export default {
    name: 'Equipment',

    components: {
        Drawer,
        ItemInfo
    }
}
</script>

<style scoped>

</style>