<template>
  <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn small text>edit</v-btn>
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-item v-else :key="i" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
export default {
  name: 'SideBar',
  data: () => ({
    drawer: null,
    items: [
      { icon: 'add', text: 'Create new Text' },
      { divider: true },
      { icon: 'delete', text: 'Trash' },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { icon: 'help', text: 'Help' },
    ],
  }),
}
</script>
