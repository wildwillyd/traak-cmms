<template>
    <div>
        <div id="buttonHolder" :style="{paddingBottom: '10px'}">
            <a-button type="primary" @click="addDocument"> 
                Add Document 
            </a-button>
        </div>
        <a-table :columns="columns" :data-source="data">
            <template v-for="col in ['document']" :slot="col" slot-scope="text, record">
                <div :key="col">
                    <a-input v-if="record.editable" style="margin: -5px 0" :value="text" @change="e => handleChange(e.target.value, record.key, col)" />
                    <template v-else>
                        <a :href="record.href"> 
                            {{ text }} 
                        </a>
                    </template>
                </div>
            </template>
            <span slot="tags" slot-scope="tags, record">
                <a-tag :closable="record.editable" @close="e => removeTag(e, e.target.value, record.key)" v-for="tag in tags" :key="tag" :color="tag === 'helpful' ? 'green' : 'blue'">
                    {{tag.toLowerCase()}}
                </a-tag>
                
                <!-- If in Edit mode -->
                <template v-if="record.editable">
                    <a-popover title="Add Tag" trigger="click" v-model="tagPopoverVisible">
                        <span slot="content">
                            <a-row>
                                <a-col>
                                    <a-input v-model="newTagName" @pressEnter="e => addTag(e.target.value, record.key)"> </a-input>
                                    <!--<a click="addTag"> Add </a>-->
                                </a-col>
                            </a-row>
                        </span>
                        <a @click="addTagPopover">
                            <a-icon type="plus-square" />
                        </a> 
                    </a-popover>
                </template>
            </span>
            <template slot="action" slot-scope="text, record">
                <div class="editable-row-operations">
                    <span v-if="record.editable">
                        <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                            <a>
                                Cancel
                            </a>
                        </a-popconfirm>
                        <a @click="() => save(record.key)">
                            Save
                        </a>
                        <a-popconfirm title="This can not be undone?" @confirm="() => onDelete(record.key)">
                            <a>
                                Delete
                            </a>
                        </a-popconfirm>
                    </span>
                    <span v-else>
                        <a :disabled="editingKey !== ''" @click="() => edit(record.key)">
                            Edit
                        </a>
                    </span>
                </div>
            </template>
        </a-table>
    </div>
</template>

<script>

const columns = [
    {title: "Document", dataIndex: "document", scopedSlots: {customRender: 'document'}},
    {title: "Tags", dataIndex: "tags", scopedSlots: {customRender: 'tags'}, align: 'right'},
    {title: "Action", dataIndex: "action", scopedSlots: {customRender: 'action'}, align: 'right', width: '178px'},
];

const data = [
    {key: "1", document: "User Manual", tags: ['helpful', 'Manual'], href: 'https://www.antdv.com/'},    
    {key: "2", document: 'Part List', tags: ['helpful'], href: 'https://www.antdv.com/'},    
    {key: "3", document: 'Warrenty', tags: ['vendor'], href: 'https://www.antdv.com/'},
];

export default {
    data() {
        this.cacheData = data.map(item => ({ ...item }));
        return {
            data,
            columns,
            editingKey: '',
            tagPopoverVisible: false,
            newTagName: ""
        };
    },

    methods: {
        handleChange(value, key, column) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target[column] = value;
                this.data = newData;
            }
        },

        edit(key) {
            //Create 'newData' from all the data that is declared
            const newData = [...this.data];
            //target = data at index key
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = key;
            if (target) {
                //Changes reactivity to show text box
                target.editable = true;
                //Populates textboxs with the data?
                this.data = newData;
            }
        },

        save(key) {
            const newData = [...this.data];
            const newCacheData = [...this.cacheData];
            const target = newData.filter(item => key === item.key)[0];
            const targetCache = newCacheData.filter(item => key === item.key)[0];
            if (target && targetCache) {
                delete target.editable;
                this.data = newData;
                Object.assign(targetCache, target);
                this.cacheData = newCacheData;
            }
            this.editingKey = '';
        },

        cancel(key) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = '';
            if (target) {
                Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
                delete target.editable;
                this.data = newData;
            }
        },

        onDelete(key) {

            let newData = [...this.data];
            const remaining = newData.filter(item => key !== item.key);
            this.data = remaining;
            this.editingKey = '';
        },

        addTagPopover() {
            this.tagPopoverVisible = true;
        },

        /* ---- Currently Tags are not able to be 'Saved' or 'Cancelled'
                I think this is fine but should be discussed ---------*/
                
        addTag(value, key) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target.tags.push(value);
                this.data = newData;
                this.newTagName = "";
            }
        },

        removeTag(e, value, key) {
            //Stops the default 'remove' of the tag
            e.preventDefault();
            //Actually remove the tag from the list
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                const index = target.tags.indexOf(value);
                target.tags.splice(index, 1);
                this.data = newData;
            }
        },

        addDocument(){
            
        }
    },
};
</script>

<style scoped>
.editable-row-operations a {
    margin-right: 8px;
}
</style>