<template>
    <div id="content">
        <div id="buttonHolder">
            <a-button type="primary" @click="addLogModal = true"> 
                Add New Log
            </a-button>
            <LogModal :visible="addLogModal" @closeModal="addLogModal = false" />
        </div>
        <a-list item-layout="vertical" size="default" :pagination="pagination" :data-source="listData">
            <a-list-item id="list-item" slot="renderItem" key="item.index" slot-scope="item" :style="{textAlign: alignment}">
                <template v-for="{ type, text } in actions" slot="actions">
                    <span :key="type">
                        <a-icon :type="type" style="margin-right: 8px" />
                        {{ text }}
                    </span>
                </template>
                <a-list-item-meta :description="item.user + ' - ' + item.date">
                    <a slot="title" :href="item.href">
                        {{ item.description }}
                    </a>
                    <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{ item.content }}
                
                <img v-show="item.index % 2 == 0"
                slot="extra"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
import LogModal from '@/components/EquipmentTabs/LogModal.vue'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
        index: i,
        href: 'https://www.antdv.com/',
        user: `Firstname Lastname ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'A Summary of the Maintenance that happened',
        date:
            Date(),
        content:
            'The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  The Ticket Contents  -  ',
  });
}

export default {
    name: "LogTab",
    data() {
        return {
            listData,
            //All the config for pagination goes here
            pagination: {
                pageSize: 8,
                position: "both"
            },
            actions: [
                { type: 'message', text: '2' },
            ],
            addLogModal: false,
        };
    },
    components: {
        LogModal
    },
    computed: {
        alignment(){
            if(this.$store.getters.getCollapsed) {
                return "center";
            }
            else {
                return "left";
            }
        }
    }
};
</script>

<style scoped>

</style>