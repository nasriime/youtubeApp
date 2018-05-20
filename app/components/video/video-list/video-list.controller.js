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
    this.pagesShown = 1
    this.pageSize = 5
    this.itemsLimit = () => {
        return this.pageSize * this.pagesShown
    }
    this.hasMoreItemsToShow = () => {
        return this.pagesShown < ( 25 / this.pageSize);
    }
    this.showMoreItems = () => {
      this.pagesShown = this.pagesShown + 1        
    }

  }

  $onInit(){
    this.getVideos()
    
  }
  
  getVideos(){
    this._VideoService.getVideos(this.query).then( res => {  
      this.items = res.items
      })
  }
  
}


export default VideoListController
