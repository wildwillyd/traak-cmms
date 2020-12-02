<template>
    <div id="something">
        <a-card :style="{height: '100%'}">
            <a-row id="top-row" type="flex" justify="start" align="middle">
                <a-col :flex="1">
                    <img id="logo" alt="Equipment Image" src="../assets/logo.png"/>
                </a-col>
                <a-col :flex="10" style="{textAlign: left;}">
                    <h1> <strong> {{equipmentName}} </strong> </h1>
                    <p> This is an Item description </p>
                </a-col>
                <a-col :flex="1">
                    <a-button type="primary" @click="openDrawer"> Equipment </a-button>
                </a-col>
            </a-row>
            <!--<a-divider orientation="left"> Current Tab </a-divider>-->
            
            <!-- I think content of tabs are lazy loaded so we shouldn't run into a performance hit? -->
            <a-tabs type="card" tab-position="top">
                <a-tab-pane key="1" tab="Logs"> <LogTab /> </a-tab-pane>
                <a-tab-pane key="2" tab="Parts"> <PartTab /> </a-tab-pane>
                <a-tab-pane key="3" tab="Schedule"> <ScheduleTab /> </a-tab-pane>
                <a-tab-pane key="4" tab="Docs"> <DocumentTab /> </a-tab-pane>
            </a-tabs>
        </a-card>
        
    </div>
</template>

<script>
import LogTab from '@/components/EquipmentTabs/LogTab.vue'
import PartTab from '@/components/EquipmentTabs/PartTab.vue'
import ScheduleTab from '@/components/EquipmentTabs/ScheduleTab.vue'
import DocumentTab from '@/components/EquipmentTabs/DocumentTab.vue'


export default {
    name: "ItemInfo",
    components: {
        LogTab,
        PartTab,
        ScheduleTab,
        DocumentTab
    },
    props: {
    },
    methods: {
        openDrawer(){
            this.$emit('openDrawer');
        }
    },
    computed: {
        equipmentName(){
            return this.$store.getters.getEquipmentName;
        }
    }
}
</script>

<style scoped>
img#logo{
    max-height: 100px;
    max-width: 100px;
}
#top-row{
    padding-bottom: 8px;
}
</style>