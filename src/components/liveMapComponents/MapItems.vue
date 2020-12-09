<template>
    <div>
        <a-tree
        showLine="true"
        :tree-data="treeData"
        selectedKeys="selectedKeys"
        @select="onSelect"
        />
    </div>
</template>

<script>

const treeData = [
    {
        title: 'Tractors', key: '0-0',
        children: [
            {title: "Tractor 1", key: '0-0-0'},
            {title: "Tractor 2", key: '0-0-1'},
            {title: "Tractor 3", key: '0-0-2'}
        ]
    },
    {
        title: "Heat Pumps", key: '0-1',
        children: [
            {title: "Heat Pump 1", key: '0-1-0'},
            {title: "Heat Pump 2", key: '0-1-1'},
            {title: "Heat Pump 3", key: '0-1-2'},
            {title: "Heat Pump 4", key: '0-1-3'},
            {title: "Heat Pump 5", key: '0-1-4'},
        ]
    },
    {
        title: "Toilettes", key: '0-2',
        children: [
            {title: "Toilette 1", key: '0-2-0'},
            {title: "Toilette 2", key: '0-2-1'}
        ]
    }
];

export default {
    name: "MapItems",
    data() {
        return {
            treeData,
            selectedKeys: []
        }
    },
    methods: {
        onSelect(sKeys, info){
            console.log(info);
            this.selectedKeys = sKeys;
        }
    },
    
}
</script>