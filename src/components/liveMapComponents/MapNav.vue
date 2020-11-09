<template>
    <a-menu mode="inline" :inline-collapsed="collapsed" theme="dark">
        <template v-for="item in navigationItems">
            <a-menu-item :key="item.key">
                <router-link :to="item.link" replace>
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
                {key: 1, iconType: "Building", spanText: "k-12 Building", link: "/MapImg", AreaNo: "0"},
                {key: 2, iconType: "Building", spanText: "Admin & Elementary", link: "/MapImg", AreaNo: "1"},
                {key: 3, iconType: "Building", spanText: "High School", link: "/MapImg", AreaNo: "2"},
                {key: 4, iconType: "Building", spanText: "Gymnasium", link: "/MapImg", AreaNo: "3"},
                {key: 5, iconType: "Building", spanText: "Music & Cafeteria", link: "/MapImg", AreaNo: "4"},
                {key: 6, iconType: "Building", spanText: "Admin & Elementary 2nd Floor", link: "/MapImg", AreaNo: "5"}, 
                {key: 7, iconType: "Building", spanText: "High School 2nd Floor", link: "/MapImg", AreaNo: "6"}, 
            ],
            collapsed: false
        }
    }
}
</script>

<style scoped>

</style>