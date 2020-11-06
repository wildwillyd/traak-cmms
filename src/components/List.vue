<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta
        :description="item.text"
      >
        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
        <a-avatar
          slot="avatar"
          src="../assets/logo.png"
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
const data = [
  {
    title: 'Ant Design Title 1',
    text: 'Equipment1'
  },
  {
    title: 'Ant Design Title 2',
    text: 'Equipment2'
  },
  {
    title: 'Ant Design Title 3',
    text: 'Equipment3'
  },
  {
    title: 'Ant Design Title 4',
    text: 'Equipment4'
  },
];
export default {
    name: "List",
  data() {
    return {
      data,
    };
  },
};
</script>
<style></style>