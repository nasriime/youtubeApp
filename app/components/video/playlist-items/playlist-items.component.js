
export const PlaylistItemsComponent = {
  bindings: {
    playlistItems: '<'
  },
  template: `
    <div>
      <p>PlayList Details :</p><br>  
      <p>{{ $ctrl.playlistItems.items[0].snippet.title }}</p><br>
      <p>{{ $ctrl.playlistItems.items[0].snippet.description }}</p><br>
    </div>
  `
}