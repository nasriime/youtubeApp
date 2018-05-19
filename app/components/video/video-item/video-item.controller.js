/**
 * components/video/speaker-item/video-item.controller.js
 *
 * Controller for <video-item> component
 */

class VideoItemController {
  constructor () {}

  onClick () {
    this.onSayHello({
      $event: {
        videoName: this.data.name
      }
    })
  }
}

export default VideoItemController
