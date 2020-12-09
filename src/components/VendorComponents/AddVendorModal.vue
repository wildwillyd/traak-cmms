<template>
    <a-modal :visible="visible" title="New Vendor Details" @ok="handleOK" @cancel="handleCancel">
        Hello
    </a-modal>
</template>

<script>
export default {
    name: "AddVendorModal",
    props: ['visible'],
    methods: {
        handleOK(){
            console.log("OK was selected");
        },
        handleCancel(){
            console.log("Cancel was selected");
            this.$emit('closeModal');
        }
    },
}
</script>