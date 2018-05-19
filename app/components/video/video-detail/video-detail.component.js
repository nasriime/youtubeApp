/**
 * components/video/video-detail/video-detail.js
 *
 * Stateful component that represents a detail view for a Video.
 */
import controller from './video-detail.controller'

export const VideoDetailComponent = {
  bindings: {
    video: '<'
  },
  controller,
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
