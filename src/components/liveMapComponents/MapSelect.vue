<template>
    <div>
        <a-select :defaultValue="this.$store.getters.getMapState" style="width: 240px" @change="changeMap">
            <template v-for="map in maps">
                <a-select-option :key="map.key" :value="map.key">
                    {{map.value}}
                </a-select-option>
            </template>
        </a-select>
    </div>
</template>

<script>

const maps = [
    {key: 1, value: "k-12 Building", link: "0"},
    {key: 2, value: "Elementary & Admin", link: '1'},
    {key: 3, value: "2nd Floor Elementary", link: "2"},
    {key: 4, value: "High School", link: "3"},
    {key: 5, value: "2nd Floor High School", link: "4"},
    {key: 6, value: "Gymnasium", link: "5"},
    {key: 7, value: "Cafeteria & Music", link: "6"},
];

export default {
    name: "MapSelect",
    data () {
        return {
            maps
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