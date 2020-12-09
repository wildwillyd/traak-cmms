<template>
    <div style="margin-right: 60px;">
        <a-tree :checkable="true"
        v-model="checkedKeys"
        :tree-data="treeData"
        />
    </div>
</template>

<script>

const treeData = [
    {
        title: 'HVAC', key: '0-0',
        children: [
            {title: "Heat Pump 1", key: '0-0-0'},
            {title: "Heat Pump 2", key: '0-0-1'},
            {title: "Heat Pump 3", key: '0-0-2'}
        ]
    },
    {
        title: "Electrical", key: '0-1',
        children: [{title: "Ballasts", key: '0-1-0'}]
    },
    {
        title: "Plumbing", key: '0-2',
        children: [
            {title: "Drain Access", key: '0-2-0'},
            {title: "Drain Access", key: '0-2-1'}
        ]
    }
];

export default {
    name: "MapFilter",
    data() {
        return {
            checkedKeys: [],
            treeData
        };
    },

    //This function watches to see if the checkedKey model has changed
    watch: {
        checkedKeys(val){
            this.onChecked(val);
        }
    },
  
    methods: {
        onChecked(cKeys){
            console.log("The checked keys are " + cKeys);
            this.checkedKeys = cKeys;
        },
    },
};
</script>