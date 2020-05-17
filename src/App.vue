<template>
  <div id="app">
    <Dashboard>
      <router-view />
    </Dashboard>
  </div>
</template>
<script lang="ts">
import Dashboard from '@/Layout/Dashboard.vue';
export default {
  name: 'App',
  components: {
    Dashboard,
  },
};
</script>
