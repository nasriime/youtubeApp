/**
 * components/videos/video.service.js
 *
 * Service to fetch data from Videos API
 */
 
export default class VideoService {
  constructor ($http) {
    this.$http = $http
  }

  getVideos (query) {
    return this.$http.get('https://www.googleapis.com/youtube/v3/search',
    {
      params:{
        q:query,
        maxResults: 25,
        part :'snippet',
        key:'AIzaSyCC-Msso9uDZxEBkSMcaafE-3WiVcsv98I'
      }
    }).then(response => response.data)
  }

  getVideo (id) {
    // return this.$http.get(`/api/videos/${id}`).then(response => response.data)
    return this.$http.get('https://www.googleapis.com/youtube/v3/search',
    {
      params:{
        q:query,
        maxResults: 25,
        part :'snippet',
        key:'AIzaSyCC-Msso9uDZxEBkSMcaafE-3WiVcsv98I'
      }
    }).then(response => response.data)
  }
}
