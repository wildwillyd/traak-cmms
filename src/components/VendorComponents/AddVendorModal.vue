<template>
    <a-modal :visible="visible" title="New Vendor Details" @ok="handleOK" @cancel="handleCancel">
        <a-form :form="newVendorForm">
          <a-form-item label="Vendor Name">
                <a-input placeholder="Vendor Name" 
                    v-decorator="[
                        'vendorName',
                        {
                            rules: [{
                                required: true
                            }]
                        }
                    ]"
                />
            </a-form-item>
            <a-form-item label="Location">
                <a-input placeholder="Location" 
                    v-decorator="[
                        'location',
                    ]"
                />
            </a-form-item>
            <a-form-item label="Contacts">
                <a-input-group>
                    <a-row :gutter="12">
                        <a-col span="12">
                            <a-input v-model="contactName" placeholder="Full Name"></a-input>
                        </a-col>
                        <a-col span="8">
                            <a-input v-model="contactPhone" placeholder="Phone Number"></a-input>
                        </a-col>
                        <a-col span="4">
                            <a-button type="primary" @click="addContact"> 
                                Add 
                            </a-button>
                        </a-col>
                    </a-row>
                </a-input-group>
                <a-list size="small" bordered :data-source="contactList">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-row style="width: 100%">
                            <a-col :span="16">
                                {{item.name}}
                            </a-col>
                            <a-col :span="8">
                                {{item.phone}}
                            </a-col>
                        </a-row>
                        <a-icon @click="() => deleteIcon(index)" type="delete"/>
                    </a-list-item>
                </a-list>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
export default {
    name: "AddVendorModal",
    props: ['visible'],
    data() {
        return {
            newVendorForm: this.$form.createForm(this, {name: 'new_vendor_form'}),
            contactList: [],
            contactName: '',
            contactPhone: '',
        }
    },
    methods: {
        handleOK(){
            console.log("OK was selected");
        },
        handleCancel(){
            console.log("Cancel was selected");
            this.$emit('closeModal');
        },
        addContact(){
            let newUser = {name: this.contactName, phone: this.contactPhone};
            this.contactList.push(newUser);
            this.contactName = "";
            this.contactPhone = "";
        },
        deleteIcon(key){
            this.contactList.splice(key, 1);
        }
    },
}
</script>