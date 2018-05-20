/**
 * components/video/video-list/video-list.controller.js
 *
 * Controller for <video-list> component
 */
import VideoService from '../video.service'

class VideoListController {
  constructor (VideoService, $stateParams) {
    this._VideoService = VideoService
    this.query = $stateParams.query
  }

  $onInit(){
    this._VideoService.getVideos(this.query).then( res =>{  
    this.items = res.items
    })
  }

  // sayHello ({ videoName }) {
  //   window.alert(`Hello ${videoName}!`)
  // }
}


export default VideoListController
