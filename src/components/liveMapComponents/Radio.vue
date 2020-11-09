<template>
<div id=radio>
  <a-radio-group v-model="value" @change="onChange">
   <template v-for="item in navigationItems">
            <a-radio :key="item.key">
                <router-link :to="{name: item.link, params: CurrentAreaNo}" replace>
                <a-icon :type="item.iconType" />
                <span> {{item.spanText}} </span>
                </router-link>
            </a-radio>
        </template>
  </a-radio-group>
  </div>
</template>

<script>
export default {
    name: "NavItem",
    data () {
        return {
            //Eventually return these from a store via a computed value
            navigationItems: [
                {key: 1, spanText: "k-12 Building", link: "/MapImg", AreaNo: "0"},
                {key: 2, spanText: "Admin & Elementary", link: "/MapImg", AreaNo: "1"},
                {key: 3, spanText: "High School", link: "/MapImg", AreaNo: "2"},
                {key: 4, spanText: "Gymnasium", link: "/MapImg", AreaNo: "3"},
                {key: 5, spanText: "Music & Cafeteria", link: "/MapImg", AreaNo: "4"},
                {key: 6, spanText: "Admin & Elementary 2nd Floor", link: "/MapImg", AreaNo: "5"}, 
                {key: 7, spanText: "High School 2nd Floor", link: "/MapImg", AreaNo: "6"}, 
            ],
            collapsed: false
        }
    },
    methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
      this.CurrentAreaNo = e.target.AreaNo;
    },
  },
};

<style lang="less">
</style>