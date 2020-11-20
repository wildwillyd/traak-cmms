<template>
    <div>
        <ItemInfo/>
        <Drawer />
    </div>
</template>

<script>
import Drawer from '@/components/Drawer.vue';
import ItemInfo from '@/components/ItemInfo.vue';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        drawerVisible: false,
    },
    mutations: {
        changeDrawerVisible: () => {
            return this.drawerVisible ? this.drawerVisible = false : this.drawerVisible = true;
        }
    }
});

export default {
    name: 'Equipment',
    components: {
        Drawer,
        ItemInfo
    },
    methods: {
        flip(){
            store.commit('changeDrawerVisible');
        }
    },
    computed: {
        drawerVisible(){
            return store.state.drawerVisible;
        }
    }
}
</script>

<style scoped>

</style>