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

    <div ng-show="$ctrl.items.length" class="select-container">

      <div class="select-wrapper"> 
        <select ng-model="$ctrl.filter1">
          <option value="" selected>All</option>
          <option value="channel">Channel</option>
          <option value="playlist">Playlist</option>
        </select>
      </div>

      <div class="select-wrapper"> 
        <select ng-model="$ctrl.filter2">
          <option value="" selected>Today</option>
          <option value="week">This week</option>
          <option value="month">This month</option>
        </select>
      </div>
    </div>

    <ul class="collection" ng-show="$ctrl.items.length">
      <li ng-repeat="item in $ctrl.items | limitTo: $ctrl.itemsLimit()">

        <a class="collection__channel" ng-if="item.id.kind == 'youtube#channel'" ui-sref="channel({id: item.id.channelId })">
          <div class="collection__channel--left">
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__channel--right">
            <p>{{item.snippet.publishedAt | date }}</p>
            <p class="collection__title">{{item.snippet.title}}</p>
            <p>{{item.snippet.channelTitle}}</p>
          </div>
        </a>        
      
        <a class="collection__video" ng-if="item.id.kind == 'youtube#video'" ui-sref="video({id: item.id.videoId })">
          <div class="collection__video--left">
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__video--right">
            <p>{{item.snippet.publishedAt | date }}</p>
            <p class="collection__title">{{item.snippet.title}}</p>
            <p>{{item.snippet.channelTitle}}</p>
          </div>
        </a>
    
        <a class="collection__playlist" ng-if="item.id.kind == 'youtube#playlist'" ui-sref="playlist({id: item.id.playlistId })">
          <div class="collection__playlist--left">
            <div class="playlist__overlay">
              <i class="fa fa-navicon" style="color:#fff"></i>
            </div>
            <img ng-src="{{item.snippet.thumbnails.medium.url}}" >
          </div> 
          <div class="collection__playlist--right">
            <p>{{item.snippet.publishedAt | date }}</p>
            <p class="collection__title">{{item.snippet.title}}</p>
            <p>{{item.snippet.channelTitle}}</p>
          </div>
        </a>
       
      </li>
    </ul>

    <div class="show-more" ng-show="$ctrl.items.length">
      <span ng-show="$ctrl.hasMoreItemsToShow()" ng-hide="$ctrl.items.length < $ctrl.itemsLimit()" ng-click="$ctrl.showMoreItems()" class="show-more__btn">Show more items</span>
      <i ng-show="$ctrl.items.length < $ctrl.itemsLimit()" class="fa fa-spinner fa-spin" style="font-size:24px;margin-bottom:10px"></i>     
    </div>
  `
}
