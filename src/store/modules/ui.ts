export default {
  namespace: true,
  state: {
    drawer: null,
    items: [
      { icon: 'add', text: 'Create new Text', to: '/new' },
      { divider: true },
      { icon: 'delete', text: 'Trash' },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { icon: 'help', text: 'Help' },
    ],
  },
}
