<template>
    <div>
        <a-table :columns="columns" :dataSource="data">
        <span  slot="title"> 
            <a-input-search placeholder="Search Name" :style="{width: '200px', float: 'left'}" /> 
            <div id="buttonHolder">
                <a-button type="primary"> Sort </a-button>
                <a-button type="primary"> Edit </a-button>
            </div>
        </span>
        </a-table>
    </div>
</template>

<script>

const columns = [
    {
        title: "Vendor Name",
        dataIndex: "vendorName",
    },
    {
        title: "Show Parts",
        dataIndex: "showParts",
    },
    {
        title: "Location",
        dataIndex: "location",
    },
    {
        title: "Main Contact",
        dataIndex: "mainContact",
    },
];

const data = [
    {key: "1", vendorName: "Home Depot", location: "123 Main St", mainContact: "Domimic Ferrante", children: []},
    {key: "2", vendorName: "Gales", location: "321 College Ave", mainContact: "Wayne Geissinger", children: []},
    {key: "3", vendorName: "Menards", location: " 6542 Johnson St", mainContact: "Brian Rexroth", children: []},
    {key: "4", vendorName: "Lowes", location: "999 Dummy Rd", mainContact: "Will Davis", children: []},
    {key: "5", vendorName: "Keiths", location: "9001 Willow Blvd", mainContact: "Dr. Vemuru", children: []},
    {key: "6", vendorName: "Walmart", location: "8990 Moon St", mainContact: "Dr. D", children: []},
];

export default {
    name: "Vendor",
    data() {
        return {
            columns,
            data
        };
    }
}
</script>

<style scoped>
.header {
    width: 200px;
    float: left;
}

.buttonHolder {
    width: auto;
    float: right;
}



</style>