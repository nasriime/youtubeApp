/**
 * components/video/video-list/video-list.component.js
 *
 * Stateless Component that defines a videos list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './video-list.controller'

export const VideoListComponent = {
  bindings: {
    // videos: '<'

  },
  controller,
  template: `
    <ul class="collection">
      <li ng-repeat="item in $ctrl.items">
        <span ng-if="item.id.kind == 'youtube#channel'">
          <a style="color:red" ui-sref="channel({id: item.id.channelId })">{{item.id.kind}}</a>
        </span>  
        
        <span ng-if="item.id.kind == 'youtube#video'">
          <a style="color:yellow" ui-sref="video({id: item.id.videoId })">{{item.id.kind}}</a>
        </span>  

        <span  ng-if="item.id.kind == 'youtube#playlist'">
          <a style="color:green" ui-sref="playlist({id: item.id.playlistId })">{{item.id.kind}}</a>
        </span>  
      </li>
    </ul>
  `
}
