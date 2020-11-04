<template>
  <div style="margin-right: 40px;">
    <a-tree
    theme="dark"
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <a-icon slot="icon" type="carry-out" />
      <a-tree-node key="0-0">
        <a-icon slot="icon" type="border-outer" style="color: #1890ff" />
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node key="0-0-0" title="parent 1-0">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-0-0" title="leaf">
            <a-icon slot="icon" type="border" style="color: #1890ff" />
          </a-tree-node>
          <a-tree-node key="0-0-0-1" title="leaf">
            <a-icon slot="icon" type="border" style="color: red" />
          </a-tree-node>
          <a-tree-node key="0-0-0-2" title="leaf">
            <a-icon slot="icon" type="border" style="color: green" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-1" title="parent 1-1">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-1-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-2" title="parent 1-2">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-2-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-2-1" title="leaf">
            <a-icon slot="icon" type="carry-out" />
            <a-icon slot="switcherIcon" type="form" />
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