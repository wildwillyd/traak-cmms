<template>
    <a-layout>
        <a-layout-header :style="{backgroundColor: 'lightgray'}">
            <a-row>
                <a-col :span="4">
                    <MapSelect />
                </a-col>
                <a-col :offset="15" :span="5">
                    <a-button-group>
                        <a-button type="primary" @click="mapDrawerVisible = true; drawerType = false"> Filter </a-button>
                        <a-button type="primary" @click="mapDrawerVisible = true; drawerType = true"> All Items </a-button>
                    </a-button-group>
                </a-col>
            </a-row>
        </a-layout-header>
        <MapDrawer :visible="mapDrawerVisible" :type="drawerType" @closeDrawer="mapDrawerVisible = false" />
        <a-layout-content>
            <LiveMap />
        </a-layout-content>
    </a-layout>
</template>

<script>
import LiveMap from '../components/liveMapComponents/LiveMap.vue'
import MapDrawer from '@/components/liveMapComponents/MapDrawer.vue'
import MapSelect from '@/components/liveMapComponents/MapSelect.vue'

export default {
    components: {
        LiveMap,
        MapDrawer,
        MapSelect
    },
    data() {
        return{
            mapDrawerVisible: false,
        }
    },
}
</script>

<style lang="less">

</style>
