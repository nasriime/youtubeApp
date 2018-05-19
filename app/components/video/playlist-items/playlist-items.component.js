
export const PlaylistItemsComponent = {
  bindings: {
    playlistItems: '<'
  },
  template: `
    <div>
      {{ $ctrl.playlistItems }}
    </div>
  `
}