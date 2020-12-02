<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-list-item-meta :description="item.text" >
        <a slot="title" @click="e => equipmentClicked(e, item.equipID)"> 
          {{ item.title }} 
        </a>
        <a-avatar
          slot="avatar"
          :src="item.image" 
          @loadError=loadFailed
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
const data = [
  {
    equipID: '0001',
    title: 'Ant Design Title 1',
    text: 'Equipment1',
    image: require('../assets/logo.png')
  },
  {
    equipID: '0002',
    title: 'Ant Design Title 2',
    text: 'Equipment2',
    image: require('../assets/logo.png')
  },
  {
    equipID: '0003',
    title: 'Ant Design Title 3',
    text: 'Equipment3',
    image: require('../assets/logo.png')
  },
  {
    equipID: '0004',
    title: 'Ant Design Title 4',
    text: 'Equipment4',
    image: require('../assets/logo.png')
  },
];

export default {
    name: "List",
    data() {
        return {
            data,
        };
    },
    methods: {
        loadFailed(){
            console.log("The image load failed");
        },
        equipmentClicked(e, id){
            console.log(id + " was clicked");
        }
    }
};
</script>