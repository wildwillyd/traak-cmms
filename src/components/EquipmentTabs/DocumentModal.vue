<template>
    <a-modal title="Add Document" :visible="visible" @ok="handleOK" @cancel="handleCancel" >
        <a-form :form="newDocumentForm">
            <a-form-item label="Document Name">
                <a-input placeholder="Document Name" 
                    v-decorator="[
                        'documentName',
                        {
                            rules: [{
                                required: true
                            }]
                        }
                    ]"
                />
            </a-form-item>
            <a-form-item label="File Upload">
                <div class="dropbox">
                    <a-upload-dragger
                        v-decorator="[
                            'dragger',
                            {
                                rules: [{
                                    required: true
                                }]
                            }
                        ]"
                        :multiple="false" 
                        name="files"
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
    name: "DocumentModal",
    data() {
        return {
            newDocumentForm: this.$form.createForm(this, {name: 'new_document_form'}),
        };
    },
    props: ['visible'],
    methods: {
        handleOK(){
            console.log("OK was clicked");
            this.newDocumentForm.validateFields((err, values) => {
                if(!err) {
                    console.log(values);
                    this.$emit('closeModal');
                }
            });
        },
        handleCancel(){
            console.log("Cancel was clicked");
            this.$emit("closeModal");
        }
    }
}
</script>