<template>
    <div>
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
            {title: "Heat Pumps", key: '0-0-0'},
            {title: "Ducting", key: '0-0-1'},
            {title: "Air Conditioners", key: '0-0-2'}
        ]
    },
    {
        title: "Electrical", key: '0-1',
        children: [
            {title: "Ballasts", key: '0-1-0'},
            {title: "Power Pannels", key: '0-1-0'},
        ]
    },
    {
        title: "Plumbing", key: '0-2',
        children: [
            {title: "Toilettes", key: '0-2-0'},
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