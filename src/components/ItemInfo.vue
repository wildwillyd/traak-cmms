<template>
    <div id="something">
        <a-card :style="{height: '95vh'}">
            <a-row type="flex" justify="start">
                <a-col :flex="1">
                    <img id="logo" alt="Equipment Image" src="../assets/logo.png"/>
                </a-col>
                <a-col :flex="10" style="{textAlign: left;}">
                    <h1> <strong> Item Name </strong> </h1>
                    <p> This is an Item description </p>
                </a-col>
                <a-col :flex="1">
                    <a-button type="primary" @click="changeDrawerVisible"> Equipment </a-button>
                </a-col>
            </a-row>
            <!--<a-divider orientation="left"> Current Tab </a-divider>-->
            
            <!-- I think content of tabs are lazy loaded so we shouldn't run into a performance hit? -->
            <a-tabs type="card" tab-position="top">
                <a-tab-pane key="1" tab="Reports"> Reports Here </a-tab-pane>
                <a-tab-pane key="2" tab="Parts"> Parts Here </a-tab-pane>
                <a-tab-pane key="3" tab="Schedule"> Schedule Here </a-tab-pane>
                <a-tab-pane key="4" tab="Docs"> Documents Here </a-tab-pane>
            </a-tabs>
        </a-card>
        
    </div>
</template>

<script>
export default {
    name: "ItemInfo",
}
</script>

<style scoped>
img#logo{
    max-height: 100px;
    max-width: 100px;
}
</style>