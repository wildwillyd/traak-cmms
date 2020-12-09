<template>
    <a-modal :visible="visible" title="Add New Log" @ok="handleOK" @cancel="handleCancel">
        <a-form :form="newLogForm">
            <a-form-item label="Summary">
                <a-input placeholder="Summary" 
                    v-decorator="[
                        'Summary',
                        {
                            rules: [{
                                required: true
                            }]
                        }
                    ]"
                />
            </a-form-item>
            <a-form-item label="Description">
                <a-input type="textarea" placeholder="Description" style="height: 125px"
                    v-decorator="[
                        'Description',
                        {
                            rules: [{
                                required: true
                            }]
                        }
                    ]"
                />
            </a-form-item>
            <a-form-item label="Image Upload">
                <div class="dropbox">
                    <a-upload-dragger
                    v-decorator="[
                        'dragger',
                    ]"
                    :multiple="false" 
                    name="image"
                    action="/upload.do"
                    >
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">
                            Click or drag your document
                        </p>
                    </a-upload-dragger>
                </div>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
export default {
    name: "LogModal",
    data() {
        return {
            newLogForm: this.$form.createForm(this, {name: 'new_log_form'}),
        }
    },
    props: ['visible'],
    methods: {
        handleOK(){
            console.log("OK was selected");
            this.newLogForm.validateFields((err, values) => {
                if(!err) {
                    console.log(values);
                    this.$emit('closeModal');
                }
            });
        },
        handleCancel(){
            console.log("Cancel was selected");
            this.$emit('closeModal')
        }
    },

}
</script>