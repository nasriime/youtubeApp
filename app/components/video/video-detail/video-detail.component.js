/**
 * components/video/video-detail/video-detail.js
 *
 * Stateful component that represents a detail view for a Video.
 */

export const VideoDetailComponent = {
  bindings: {
    video: '<'
  },
  template: `
    <div>
      {{ $ctrl.video.items[0].id }}    
    </div>
  `
}
