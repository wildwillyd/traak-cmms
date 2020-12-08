<template>
    <a-menu mode="inline"  >
        <template v-for="item in navigationItems">
            <a-menu-item :key="item.key" @click="() => changeMap(item.key)">
                <span> {{item.spanText}} </span>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script>

export default {
    name: "MapSelect",
    data () {
        return {
            //Eventually return these from a store via a computed value
            navigationItems: [
                {key: 1, spanText: "k-12 Building", link: "0"},
                {key: 2, spanText: "Elementary & Admin", link: '1'},
                {key: 3, spanText: "2nd Floor Elementary", link: "2"},
                {key: 4, spanText: "High School", link: "3"},
                {key: 5, spanText: "2nd Floor High School", link: "4"},
                {key: 6, spanText: "Gymnasium", link: "5"},
                {key: 7, spanText: "Cafeteria & Music", link: "6"},
            ],
        }
    },
    methods: {
        changeMap(key){
            console.log("Change map ran " + key);
            this.$store.commit('changeMap', key);
        }
    }
}
</script>

<style scoped>

</style>