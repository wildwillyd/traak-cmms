<template>
    <a-layout-sider collapsible
    breakpoint="md"
    :collapsed-width="collapsedWidth"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
    :zeroWidthTriggerStyle='sidebarIconStyle'>
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
            collapsedWidth: 80,
            sidebarIconStyle: {
                position: 'absolute',
                left: '0px',
                top: '80vh'
                //If we ever implement swipe gestures this is how we would hide the sidebar icon on phones
                //visibility: "hidden"
            }
        };
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
                this.$store.commit('changeCollapsed', true);
            }
            else {
                this.collapsedWidth = 80;
                this.$store.commit('changeCollapsed', false);
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