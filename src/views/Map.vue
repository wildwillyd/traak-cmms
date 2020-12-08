<template>
    <a-layout>
        <a-layout-header :style="{backgroundColor: 'lightgray'}">
            <a-row>
                <a-col :offset="22" :span="2">
                    <a-button type="primary" @click="mapDrawerVisible = true"> Drawer </a-button>
                </a-col>
            </a-row>
        </a-layout-header>
        <MapDrawer :visible="mapDrawerVisible" @closeDrawer="mapDrawerVisible = false" />
        <a-layout-content>
            <LiveMap :CurrentAreaNo="AreaNo" />
        </a-layout-content>
        <!--
        <a-layout-sider width="250" >
            <div style="margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);">
                <div>
                    Facilities
                </div>

                <Radio/>

                <div style="padding:50px"/>
                    Selected Facility Equipment:
                <Tree/>
            </div>
        </a-layout-sider>
        -->
    </a-layout>
</template>

<script>
import LiveMap from '../components/liveMapComponents/LiveMap.vue'
import MapDrawer from '@/components/liveMapComponents/MapDrawer.vue'

let AreaNo = 0;

export default {
    components: {
        LiveMap,
        MapDrawer,
    },
    data() {
        return{
            AreaNo,
            mapDrawerVisible: false,
        }
    },
    created(){
        //this.AreaNo = Radio.CurrentAreaNo;
    }
}
</script>

<style lang="less">

</style>
