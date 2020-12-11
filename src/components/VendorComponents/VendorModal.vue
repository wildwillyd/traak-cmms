<template>
    <a-modal :visible="visible" @ok="handleOK" @cancel="handleCancel" footer="" width="75%">
        <span slot="title">
            <img id="logo" alt="Equipment Image" src="../../assets/logo.png"/>
            {{vendorName}}
        </span>
        <a-layout >
            <a-layout-content :style="{backgroundColor: '#fff'}">
                 IDK What to put here
            </a-layout-content>
            <a-layout-sider :style="{backgroundColor: '#fff'}">
                <a-list size="small" :pagination="pageNumber" :data-source="contactList">
                    <span slot="header"> 
                        <strong> Contacts </strong>
                    </span>
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-row type="flex" justify="space-around" align="middle" style="width: 100%">
                            <a-col :span="22">
                              {{item.name}} <br/> {{item.phone}}
                            </a-col>
                            <a-col :span="2"> 
                                <a-icon type="star" :theme="item.mainContact" @click="() => setMainContact(item.key)"/>
                            </a-col>
                        </a-row>
                    </a-list-item>
                </a-list>
            </a-layout-sider >
        </a-layout>
    </a-modal>
</template>

<script>
let contactList = [];
contactList[0] = {key: 0, name: "Wayne Geissinger", phone: "(519)-222-1121", mainContact: 'filled'};
for (let i = 1; i < 15; i++){
    contactList.push({key: i, name: "Dominic Ferrante", phone: "(440)-552-4565", mainContact: 'outlined'});
}

export default {
    name: "VendorModal",

    props: ['visible', 'vendorName'],
    data() {
        return {
            pageNumber : {
                pageSize: 6,
            },
            contactList,
        }
    },

    methods: {
        handleOK(){
            console.log("OK was pressed");
            this.$emit('closeModal');
        },
        handleCancel(){
            console.log("Cancel was pressed");
            this.$emit('closeModal');
        },
        setMainContact(key){
            //Brute Force Method
            console.log(key);
            this.contactList.forEach(c => {
                c.mainContact = "outlined";
            })
            this.contactList[key].mainContact = "filled";
        }
    }
}
</script>

<style scoped>
img#logo{
    max-height: 70px;
    max-width: 70px;
    padding-right: 20px;
}
</style>