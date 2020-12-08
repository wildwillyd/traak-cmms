<template>
    <div>
        <a-table :columns="vendorColumns" :dataSource="vendorData">
            <span slot="title"> 
                <a-row>
                    <a-col :span="8">
                        <a-input-search placeholder="Search Name" :style="{width: '200px'}" /> 
                    </a-col>
                    <a-col :span="8" :offset="8">
                        <a-button-group>
                            <a-button> Sort </a-button>
                            <a-button> Edit </a-button>
                        </a-button-group>
                    </a-col>
                </a-row>
            </span>
            <a-table slot="expandedRowRender" :columns="itemColumns" :dataSource="itemData" :pagination="false">
                
            </a-table>
        </a-table>
    </div>
</template>

<script>

const vendorColumns = [
    { title: "Vendor Name", dataIndex: "vendorName"},
    { title: "Location", dataIndex: "location"},
    { title: "Main Contact", dataIndex: "mainContact"},
];

const itemColumns = [
    { title: "Part No", dataIndex: "partNo"},
    { title: "Name", dataIndex: "name"},
    { title: "Order Every", dataIndex: "orderEvery"},
    { title: "Qty", dataIndex: "quantity"},
];

const vendorData = [
    {key: "1", vendorName: "Home Depot", location: "123 Main St", mainContact: "Domimic Ferrante", children: []},
    {key: "2", vendorName: "Gales", location: "321 College Ave", mainContact: "Wayne Geissinger", children: []},
    {key: "3", vendorName: "Menards", location: "6542 Johnson St", mainContact: "Brian Rexroth", children: []},
    {key: "4", vendorName: "Lowes", location: "999 Dummy Rd", mainContact: "Will Davis", children: []},
    {key: "5", vendorName: "Keiths", location: "9001 Willow Blvd", mainContact: "Dr. Vemuru", children: []},
    {key: "6", vendorName: "Walmart", location: "8990 Moon St", mainContact: "Dr. D", children: []},
];

const itemData = [
    {key: "1", partNo: "INV001", name: "Part 1", orderEvery: "30 Days", quantity: "50 pieces"},
    {key: "2", partNo: "INV002", name: "Part 2", orderEvery: "50 Days", quantity: "50 pieces"},
    {key: "3", partNo: "INV003", name: "Part 3", orderEvery: "2 years", quantity: "50 pieces"},
    {key: "4", partNo: "INV004", name: "Part 4", orderEvery: "5 years", quantity: "50 pieces"},
];

export default {
    name: "Vendor",
    data() {
        return {
            vendorColumns,
            itemColumns,
            vendorData,
            itemData,
        };
    }
}
</script>

<style scoped>
</style>