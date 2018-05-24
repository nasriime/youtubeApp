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
      <p>Video Details : </p><br>  
      <p>{{ $ctrl.video.items[0].snippet.title }}</p><br>
      <p>{{ $ctrl.video.items[0].snippet.description }}</p><br>

      <p>Related Videos</p><br><br>
      <ul>
        <li ng-repeat="item in $ctrl.items">
          {{ item.snippet.title }} 
        </li>
      </ul>
    </div>
  `
}
