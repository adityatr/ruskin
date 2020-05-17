<template>
  <v-app id="keep">
    <TopBar />
    <SideBar />
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>
<
<script>
import { TopBar, SideBar } from './components'

export default {
  name: 'Dashboard',
  components: {
    TopBar,
    SideBar,
  },
}
</script>
