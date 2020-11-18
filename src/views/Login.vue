<template>
    <div>
        <a-form>
            <a-form-item>
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
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
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
                placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>