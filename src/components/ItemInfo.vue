<template>
    <div id="something">
        <a-card>
            <a-row type="flex" justify="center">
                <a-col :flex="1">
                    <img id="logo" src="../assets/logo.png"/>
                </a-col>
                <a-col :flex="10" >
                    <h1> <strong> Item Name </strong> </h1>
                    <p> This is an Item description </p>
                </a-col>

            </a-row>
            <a-divider></a-divider>
        </a-card>
    </div>
</template>

<script>
export default {
    name: "ItemInfo",
}
</script>

<style scoped>
#logo{
    max-height: 100px;
    max-width: 100px;
}
</style>