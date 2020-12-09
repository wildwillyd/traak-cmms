/*

PASTEBIN RULES:
1.) Your code should always be contained within the blocks shown at the top and bottom of the example
2.) Always describe the behavior and parameters of the code you're writing. The goal is for someone else in the group
        to be able to copy/paste the block of code into their file and understand the code well enough from your description
        that they don't need to contact you for help implementing.
3.) You may add dividers, as shown in the example, to show multiple iterations or versions of the same code or to make
        your code more readable.
4.) Do not use any block comment syntax. The entire document is one big block comment, you'll break it. :)







I left some templates below for less work :D










=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

import math from "math"

mult2 (foo) {


_______________________________________________________________________________________________________________________
a code divider for dramatic effect (I did this with the underscore character)
_______________________________________________________________________________________________________________________


    bar = foo * 2
    //inline comments are left intact, because the entire code block can be copied from the center
        without having to uncomment anything.
    return(bar)

}

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
CSV and JSON conversion
    This code will allow conversion from CSV to JSON and JSON to CSV.
Parameter List
    source - the source file to be converted or written to
Dependency List
    CSVtoJSON  - CSV to JSON conversion library
    JSONtoCSV  - JSON to CSV conversion library
    FileSystem - Filesystem access library
=======================================================================================================================

// const CSVtoJSON = require("csvtojson");
// const JSONtoCSV = require("json2csv").parse;
// const FileSystem = require("fs");

//CSV to JSON push and conversion
CSVtoJSON().fromFile("./sourcefile.csv").then(source => {
  console.log(source);
  source.push({
    //whatever columns we have in the CSV
    //format
    //"column": "value"
});


  //Converstion back to CSV
  const csv = JSONtoCSV(source, {fields: [column, column, column]});
  FileSystem.writeFileSync("./newcsvname.csv", csv);
});

=======================================================================================================================

=======================================================================================================================






=======================================================================================================================
Doms Shitty Vendor Page Code - becuase it needed to go somewhere
=======================================================================================================================
<!-- Below is currently working 
<template>
    <div>
        <a-table :columns="vendorColumns" :dataSource="searchedVendorData">
            <span slot="title"> 
                <a-row>
                    <a-col :span="8">
                        <a-input-search placeholder="Search Vendor" :style="{width: '200px'}" @search="searchVendors"/> 
                    </a-col>
                    <a-col :span="8" :offset="8">
                        <a-button-group>
                            <template v-if="editing">
                                <a-button @click="handleCancel"> Cancel </a-button>
                                <a-button > Save </a-button>
                            </template>
                            <a-button v-else @click="edit"> Edit </a-button>
                        </a-button-group>
                    </a-col>
                </a-row>
            </span>
            <span slot="name" slot-scope="text">
                <a-input v-if="editing" style="margin: -5px 0" :value="text" @change="e => handleChange(e.target.value, record.key, col)" />
                <a v-else @click="vendorModalVisible = true"> {{text}} </a>
            </span>
            <a-table slot="expandedRowRender" :columns="itemColumns" :dataSource="itemData" :pagination="false">

            </a-table>
        </a-table>
        <VendorModal @closeModal="vendorModalVisible = false" :visible="vendorModalVisible" />
    </div>
</template>


<script>

import VendorModal from '@/components/VendorComponents/VendorModal.vue';

const vendorColumns = [
    { title: "Vendor Name", dataIndex: "vendorName", scopedSlots: {customRender: 'name'},
        sorter: (a, b) => a.vendorName.localeCompare(b.vendorName), sortDirection: ['Ascend', 'Descend'] },
    { title: "Location", dataIndex: "location",
        sorter: (a, b) => a.location.localeCompare(b.location), sortDirection: ['Ascend', 'Descend'] },
    { title: "Main Contact", dataIndex: "mainContact",
        sorter: (a, b) => a.mainContact.localeCompare(b.mainContact)},
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

    components: {
        VendorModal
    },

    data() {
        return {
            vendorColumns,
            itemColumns,
            vendorData,
            itemData,
            editing: false,
            vendorModalVisible: false,
            searchedVendorData: vendorData
        };
    },

    methods: {
        searchVendors(value){
            if (value == "") {
                this.searchedVendorData = vendorData;
                return;
            }
            this.searchedVendorData = this.vendorData.filter(vendor => vendor.vendorName === value);
        },
        edit(){
            const newData = [...this.vendorData];
            this.vendorData = newData;
            this.editing = true;
        },
        handleCancel(){
            this.editing = false;
        }
    },
}
</script>

<style scoped>
</style>-->
=======================================================================================================================
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================






=======================================================================================================================
Header Block Example Title
    This is a short description of the code contained within this block. Here I describe the full functionality of the
    code below, which multiplies a given input by two and then returns the value to the parent module.
Parameter List
    foo - the input for the given code. It will be multiplied by two before being returned.
    bar - the product of foo and 2, which is returned to parent module
Dependency List
    math - multiplication logic required from math library
=======================================================================================================================

=======================================================================================================================
Footer Block Example
    This space is for any additional notes about the code. Even if you have no notes, please leave a blank space
    in the center so that it's clear your code block is finished.
=======================================================================================================================







*/