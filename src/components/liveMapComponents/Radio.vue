<template>
    <a-menu mode="inline" :inline-collapsed="collapsed" theme="dark">
        <template v-for="item in navigationItems">
            <a-menu-item :key="item.key">
                <a-icon :type="item.iconType" />
                <span> {{item.spanText}} </span>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let CurrentAreaNo = 0;

export default {
    name: "NavItem",
    data () {
        return {
            //Eventually return these from a store via a computed value
            navigationItems: [
                {key: 1, iconType: "building", spanText: "k-12 Building", link: "0"},
                {key: 2, iconType: "building", spanText: "Elementary & Admin", link: '1'},
                {key: 3, iconType: "building", spanText: "2nd Floor Elementary", link: "2"},
                {key: 4, iconType: "building", spanText: "High School", link: "3"},
                {key: 5, iconType: "building", spanText: "2nd Floor High School", link: "4"},
                {key: 6, iconType: "building", spanText: "Gymnasium", link: "5"},
                {key: 7, iconType: "building", spanText: "Cafeteria & Music", link: "6"},
            ],
            collapsed: false
        }
    }
}
</script>

<style scoped>

</style>