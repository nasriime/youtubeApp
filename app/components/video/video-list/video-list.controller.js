/**
 * components/video/video-list/video-list.controller.js
 *
 * Controller for <video-list> component
 */
import VideoService from '../video.service'

class VideoListController {
  constructor (VideoService) {
    this.query = 'PHP Front To Back'
    this._VideoService = VideoService
  }

  $onInit(){
    this._VideoService.getVideos(this.query).then( res =>{  
    this.items = res.items
    })
  }

  sayHello ({ videoName }) {
    window.alert(`Hello ${videoName}!`)
  }
}


export default VideoListController
