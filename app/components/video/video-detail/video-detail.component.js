/**
 * components/video/video-detail/video-detail.js
 *
 * Stateful component that represents a detail view for a Video.
 */
import controller from './video-detail.contoller'

export const VideoDetailComponent = {
  bindings: {
    speaker: '<'
  },
  controller,
  template: `
  <video-item></video-item>
  `
}
