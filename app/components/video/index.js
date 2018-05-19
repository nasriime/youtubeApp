/**
 * components/video/index.js
 *
 * Module that contains the speakers components and service and configure the routed component for
 * /videos path route.
 */

import angular from 'angular'

import { VideoItemComponent } from './video-item/video-item.component'
import { VideoListComponent } from './video-list/video-list.component'
import { VideoDetailComponent } from './video-detail/video-detail.component'
import VideoService from './video.service'

const video = angular
  .module('videos', [])
  .service('VideoService', VideoService)
  .component('videoItem', VideoItemComponent)
  .component('videoList', VideoListComponent)
  .component('videoDetail', VideoDetailComponent)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('videos', {
        url: '/',
        component: 'videoList',
        // resolve: {
        //   videos: VideoService => VideoService.getVideos()
        // }
      })
      .state('video', {
        url: '/videos/:id',
        component: 'videoDetail',
        resolve: {
          video: (VideoService, $stateParams) => VideoService.getVideo($stateParams.id)
        }
      })
    $urlRouterProvider.otherwise('/')
  })
  .name

export default video
