import VideoService from '../video.service'

class relatedVideosController {
  constructor (VideoService,$stateParams) {
    this.id = $stateParams.id
    this._VideoService = VideoService
  }

  $onInit(){
    this._VideoService.getRelatedVideos(this.id).then( res =>{  
    this.items = res.items
    })
  }

}


export default relatedVideosController