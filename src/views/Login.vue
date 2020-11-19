<template>
    <div>
        <a-form id="login-form" class="spaced" @submit="handleSubmit" :form="form">
            <img id="logo-image" class="spaced" alt="Vue logo" src="../assets/TraakLogoV1.png">
            <a-form-item :style="{paddingTop: '20px'}">
                <a-input v-decorator="[
                    'userName',
                    {
                        rules: [{
                            required: true,
                            message: 'Username goes here'
                        }]
                    }
                ]"
                placeholder="Username">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,1)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="[
                    'password',
                    {
                        rules: [{
                            required: true,
                            message: 'Password goes here'
                        }]
                    }
                ]"
                type="password"
                placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,1)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-decorator="[
                    'remember',
                    {
                        valuePropName: 'checked',
                        initialValue: false
                    }
                ]">
                Remember Username
                </a-checkbox>
            </a-form-item>
            <a id="login-forgot" href=""> Forgot Password </a>
            <a-button id="login-submit" type="primary" html-type="submit"> Log In </a-button>
        </a-form>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        this.form = this.$form.createForm(this, {name:'normal_login'});
    },
    methods:{
        handleSubmit(e){
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if(!err){
                    console.log('Sending: ', values);
                }
            })
        }
    }
}
</script>

<style scoped>
.spaced{
    padding-top: 20px;
}
#login-form {
    max-width: 300px;
    margin: auto;
    padding-top: 20px;
}
#logo-image{
    max-width: 300px
}
#login-forgot {
    float: right;
}
#login-submit {
    width: 100%;
}
</style>