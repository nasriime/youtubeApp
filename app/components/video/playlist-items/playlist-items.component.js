
export const PlaylistItemsComponent = {
  bindings: {
    playlistItems: '<'
  },
  template: `
    <div>
      {{ $ctrl.video.items[0].id }}   
      <ul>
        <li ng-repeat="item in $ctrl.items">
          {{ item.id.videoId }} 
        </li>
      </ul>
    </div>
  `
}