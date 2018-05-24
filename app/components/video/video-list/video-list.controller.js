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
    // this.filter1 = ""
    // this.filter2 = ""
    this.pagesShown = 1
    this.pageSize = 5
    this.maxResults = 5
    this.itemsLimit = () => {
        return this.pageSize * this.pagesShown
    }
    this.hasMoreItemsToShow = () => {
        return this.pagesShown < ( 25 / this.pageSize);
    }
    this.showMoreItems = () => {
      this.pagesShown = this.pagesShown + 1    
      this.maxResults = this.maxResults + 5  
      this.obj.m = this.maxResults
      this.getVideos()
    }
    this.obj = {
      q:this.query,
      m:this.maxResults,
      f1:this.filter1,
      f2:this.filter2
    }

  }

  $onInit(){
    this.getVideos()
    
  }
  
  getVideos(){
    this._VideoService.getVideos(this.obj).then( res => {  
      this.items = res.items
      })
  }
  
}


export default VideoListController
