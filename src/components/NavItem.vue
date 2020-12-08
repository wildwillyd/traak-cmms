<template>
    <a-menu mode="inline" :inline-collapsed="collapsed" theme="dark">
        <template v-for="item in navigationItems">
            <a-menu-item :key="item.key">
                <router-link :to="item.link">
                    <a-icon :type="item.iconType" />
                    <span> {{item.spanText}} </span>
                </router-link>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script>
export default {
    name: "NavItem",
    data () {
        return {
            //Eventually return these from a store via a computed value
            navigationItems: [
                {key: 1, iconType: "home", spanText: "Home", link: "/"},
                {key: 2, iconType: "environment", spanText: "Map", link: '/Map'},
                {key: 3, iconType: "inbox", spanText: "Equipment", link: "/Equipment"},
                {key: 4, iconType: "key", spanText: "Inventory", link: "/Inventory"},
                {key: 5, iconType: "form", spanText: "Reports", link: "/Report"},
                {key: 6, iconType: "copy", spanText: "Documents", link: "/Document"},
                {key: 7, iconType: "read", spanText: "Vendors", link: "/Vendor"},
                {key: 8, iconType: "file-add", spanText: "Upload", link: "/Upload"},
            ],
            collapsed: false
        }
    }
}
</script>

<style scoped>

</style>