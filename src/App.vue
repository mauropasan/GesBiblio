<script>
import { mapActions } from 'pinia'
import AppFooter from './components/AppFooter.vue'
import AppMenu from './components/AppMenu.vue'
import { useDataStore } from './stores/data'

export default {
  components: {
    AppFooter,
    AppMenu,
  },
  mounted() {
    this.loadData()
  },
  methods: {
    ...mapActions(useDataStore, ['loadData'])
  }
}
</script>

<template>
  <div class="container-fluid">
    <app-menu></app-menu>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>