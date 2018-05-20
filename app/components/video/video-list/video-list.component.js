/**
 * components/video/video-list/video-list.component.js
 *
 * Stateless Component that defines a videos list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

import controller from './video-list.controller'

export const VideoListComponent = {
  controller,
  template: `
    <div class="spinner" ng-hide="$ctrl.items.length">
     <i class="fa fa-spinner fa-spin" style="font-size:24px;margin-bottom:10px"></i>
     <span>Loading...</span>
    </div>
    <ul class="collection" ng-show="$ctrl.items.length">
      <li ng-repeat="item in $ctrl.items">

        <a class="collection__channel" ng-if="item.id.kind == 'youtube#channel'" ui-sref="channel({id: item.id.channelId })">
          <div class="collection__channel--left">
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__channel--right">
            {{item.snippet.publishedAt}}<br>
            {{item.snippet.title}}<br>
            {{item.snippet.channelTitle}}
          </div>
        </a>        
      
        <a class="collection__video" ng-if="item.id.kind == 'youtube#video'" ui-sref="video({id: item.id.videoId })">
          <div class="collection__video--left">
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__video--right">
            {{item.snippet.publishedAt}}<br>
            {{item.snippet.title}}<br>
            {{item.snippet.channelTitle}}
          </div>
        </a>
    
        <a class="collection__playlist" ng-if="item.id.kind == 'youtube#playlist'" ui-sref="playlist({id: item.id.playlistId })">
          <div class="collection__playlist--left">
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__playlist--right">
            {{item.snippet.publishedAt}}<br>
            {{item.snippet.title}}<br>
            {{item.snippet.channelTitle}}
          </div>
        </a>
       
      </li>
    </ul>
  `
}
