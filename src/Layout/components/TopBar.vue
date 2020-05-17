<template>
  <v-app-bar app clipped-left color="blue darken-4">
    <v-app-bar-nav-icon v-model="$store.state.ui.drawer"></v-app-bar-nav-icon>
    <span class="text-white ml-3 mr-5">Yet Another Notes App</span>
    <v-text-field
      prepend-inner-icon="search"
      solo-inverted
      flat
      hide-details
      label="Search"
    ></v-text-field>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script lang="ts">
export default {
  name: 'TopBar',
}
</script>
