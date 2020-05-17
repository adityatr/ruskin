<template>
  <v-navigation-drawer v-model="$store.state.ui.drawer" expand-on-hover app>
    <v-list dense class="">
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-item v-else :key="i" link :to="item.to">
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
<script>
import { mapState } from 'vuex'
export default {
  name: 'SideBar',
  computed: {
    ...mapState({
      items: (state) => state.ui.items,
    }),
  },
}
</script>
