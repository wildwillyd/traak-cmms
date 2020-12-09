<template>
    <div>
        <a-table :columns="vendorColumns" :data-source="data" bordered>
            <span slot="title"> 
                    <a-row>
                        <a-col :span="8">
                            <a-input-search placeholder="Search Vendor" :style="{width: '200px'}" @search="searchVendors"/> 
                        </a-col>
                        <!--
                        <a-col :span="8" :offset="8">
                            <a-button-group>
                                <template v-if="editing">
                                    <a-button @click="handleCancel"> Cancel </a-button>
                                    <a-button > Save </a-button>
                                </template>
                                <a-button v-else @click="edit"> Edit </a-button>
                            </a-button-group>
                        </a-col> 
                        -->
                    </a-row>
                </span>
            <template
            v-for="col in ['vendorName', 'location', 'mainContact']"
            :slot="col"
            slot-scope="text, record"
            >
            <div :key="col">
                <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template v-else>
                    <template v-if="col == 'vendorName'">
                        <a @click="vendorModalVisible = true"> {{text}} </a>
                    </template>
                    <template v-else>
                        {{ text }}
                    </template>
                </template>
            </div>
            </template>
            <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                    <span v-if="record.editable">
                        <a @click="() => save(record.key)">Save</a>
                        <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                            <a>Cancel</a>
                        </a-popconfirm>
                    </span>
                    <span v-else>
                        <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
                    </span>
                </div>
            </template>
            <a-table slot="expandedRowRender" :columns="itemColumns" :dataSource="itemData" :pagination="false" />
        </a-table>
        <VendorModal @closeModal="vendorModalVisible = false" :visible="vendorModalVisible" />
    </div>
</template>

<script>
import VendorModal from '@/components/VendorComponents/VendorModal.vue';

const vendorColumns = [
    {
        title: 'Vendor Name',
        dataIndex: 'vendorName',
        width: '25%',
        scopedSlots: { customRender: 'vendorName' },
        sorter: (a, b) => a.vendorName.localeCompare(b.vendorName), 
        sortDirection: ['Ascend', 'Descend']
    },
    {
        title: 'Location',
        dataIndex: 'location',
        width: '15%',
        scopedSlots: { customRender: 'location' },
        sorter: (a, b) => a.location.localeCompare(b.location), 
        sortDirection: ['Ascend', 'Descend']
    },
    {
        title: 'Main Contact',
        dataIndex: 'mainContact',
        width: '40%',
        scopedSlots: { customRender: 'mainContact' },
        sorter: (a, b) => a.mainContact.localeCompare(b.mainContact), 
        sortDirection: ['Ascend', 'Descend']
    },
    {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
    },
];

const predata = [
    {key: "1", vendorName: "Home Depot", location: "123 Main St", mainContact: "Domimic Ferrante"},
    {key: "2", vendorName: "Gales", location: "321 College Ave", mainContact: "Wayne Geissinger"},
    {key: "3", vendorName: "Menards", location: "6542 Johnson St", mainContact: "Brian Rexroth"},
    {key: "4", vendorName: "Lowes", location: "999 Dummy Rd", mainContact: "Will Davis"},
    {key: "5", vendorName: "Keiths", location: "9001 Willow Blvd", mainContact: "Dr. Vemuru"},
    {key: "6", vendorName: "Walmart", location: "8990 Moon St", mainContact: "Dr. D"},
];

const itemColumns = [
    { title: "Part No", dataIndex: "partNo"},
    { title: "Name", dataIndex: "name"},
    { title: "Order Every", dataIndex: "orderEvery"},
    { title: "Qty", dataIndex: "quantity"},
];

const itemData = [
    {key: "1", partNo: "INV001", name: "Part 1", orderEvery: "30 Days", quantity: "50 pieces"},
    {key: "2", partNo: "INV002", name: "Part 2", orderEvery: "50 Days", quantity: "50 pieces"},
    {key: "3", partNo: "INV003", name: "Part 3", orderEvery: "2 years", quantity: "50 pieces"},
    {key: "4", partNo: "INV004", name: "Part 4", orderEvery: "5 years", quantity: "50 pieces"},
];

export default {
    data() {
        this.cacheData = predata.map(item => ({ ...item }));
        return {
            predata,
            data: predata,
            vendorColumns,
            itemColumns,
            itemData,
            vendorModalVisible: false,
            editingKey: '',
        };
    },
    components: {
        VendorModal
    },
    methods: {
        searchVendors(value){
            if (value == "") {
                this.data = predata;
                return;
            }
            this.data = this.predata.filter(vendor => vendor.vendorName === value);
        },
        handleChange(value, key, column) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            if (target) {
                target[column] = value;
                this.data = newData;
            }
        },
        edit(key) {
            const newData = [...this.data];
            const target = newData.filter(item => key === item.key)[0];
            this.editingKey = key;
            if (target) {
                target.editable = true;
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
    },
};
</script>

<style scoped>
    .editable-row-operations a {
    margin-right: 8px;
    }
</style>