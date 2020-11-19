<template>
    <div id="id">
        <a-layout>
        <Sidebar />
        <a-layout>
            <a-layout-content :style="{height: '100vh'}">
            <router-view />
            </a-layout-content>
        </a-layout>
        </a-layout>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: "",
  data () {
    return {

    }
  },
  components: {
    Sidebar
  }
}
</script>