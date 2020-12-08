<template>
    <div style="margin-right: 60px;">
        <a-tree
        :show-line="showLine"
        :show-icon="showIcon"
        :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
        @select="onSelect"
        >
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0">
                <a-icon slot="icon" type="border-outer" style="color: #1890ff" />
                <span slot="title" >Equipment</span>

                <a-tree-node key="0-0-0" >
                <a-icon slot="icon" type="carry-out" />
                <span slot="title" >HVAC</span>
                    <a-tree-node key="0-0-0-0" >
                        <a-icon slot="icon" type="border" style="color: red" />
                        <span slot="title" >Heat Pump 101</span>
                    </a-tree-node>

                    <a-tree-node key="0-0-0-1" >
                        <a-icon slot="icon" type="border" style="color: red" />
                        <span slot="title" >Heat Pump 102</span>
                    </a-tree-node>

                    <a-tree-node key="0-0-0-2" >
                        <a-icon slot="icon" type="border" style="color: red" />
                        <span slot="title" >Heat Pump 103</span>
                    </a-tree-node>
                </a-tree-node>

                <a-tree-node key="0-0-1">
                    <a-icon slot="icon" type="border" style="color: blue" />
                    <span slot="title" >Electrical</span>

                    <a-tree-node key="0-0-1-0">
                        <a-icon slot="icon" type="border" style="color: blue" />
                        <span slot="title" >Ballasts</span>
                    </a-tree-node>
                </a-tree-node>

                <a-tree-node key="0-0-2">
                    <a-icon slot="icon" type="border" style="color: green"/>
                    <span slot="title" >Plumbing</span>

                    <a-tree-node key="0-0-2-0">
                        <a-icon slot="icon" type="border" style="color: green" />
                        <span slot="title" >Drain Access</span>
                    </a-tree-node>

                    <a-tree-node key="0-0-2-1">
                        <a-icon slot="icon" type="border" style="color: green" />
                        <span slot="title" >Fixtures</span>
                    </a-tree-node>
                </a-tree-node>
            </a-tree-node>
        </a-tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLine: false,
            showIcon: true,
        };
    },
  
    methods: {
        onSelect(selectedKeys, info) {
            console.log('selected', selectedKeys, info);
        },
    },
};
</script>