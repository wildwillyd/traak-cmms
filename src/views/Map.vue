<template>
    <a-layout>
        <a-layout-header :theme="light">
            Here is the header
        </a-layout-header>
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

let AreaNo = 0;

//import Radio from '../components/liveMapComponents/Radio.vue'
import LiveMap from '../components/liveMapComponents/LiveMap.vue'
//import Tree from '../components/liveMapComponents/Tree.vue'

export default {
    components: {
        //Radio,
        LiveMap,
        //Tree
    },
    data() {
        return{
            AreaNo
        }
    },
    created(){
        //this.AreaNo = Radio.CurrentAreaNo;
    }
}
</script>

<style lang="less">

</style>
