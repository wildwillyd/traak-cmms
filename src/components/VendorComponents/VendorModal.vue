<template>
    <a-modal :visible="visible" title="Vendor Information" @ok="handleOK" @cancel="handleCancel">
        Oh, Hello There
    </a-modal>
</template>
<script>
export default {
    name: "VendorModal",

    props: ['visible'],

    methods: {
        handleOK(){
            console.log("OK was pressed");
            this.$emit('closeModal');
        },
        handleCancel(){
            console.log("Cancel was pressed");
            this.$emit('closeModal');
        }
    }
}
</script>