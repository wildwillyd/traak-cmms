<template>
    <a-layout-sider collapsible
    breakpoint="md"
    :collapsed-width="collapsedWidth"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint" >
        <div>
            <img class="logo" src="../assets/TraakLogoV2.png" alt="Company Logo">
        </div>
        <NavItem />
    </a-layout-sider>
</template>

<script>
import NavItem from './NavItem'

export default {
    name: "Sidebar",
    data () {
        return {
            collapsed: false,
            collapsedWidth: 80
        }
    },
    components: {
        NavItem,
    },
    methods: {
        onCollapse(collapsed, type) {
            console.log(collapsed, type);
        },
        onBreakpoint(broken) {
            console.log(broken);
            if (broken) {
                this.collapsedWidth = 0;
            }
            else {
                this.collapsedWidth = 80;
            }
        },
    },
}
</script>

<style scoped>
.logo {
    height: 32px;
    /* background: rgba(255, 255, 255, 0.2); */
    margin: 16px;
}
</style>