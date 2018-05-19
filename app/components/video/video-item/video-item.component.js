/**
 * components/video/video-item/video-item.component.js
 *
 * Stateful Component that defines a item in a speakers list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */

import controller from './video-item.controller'

export const VideoItemComponent = {
  bindings: {
    data: '<',
    onSayHello: '&'
  },
  controller,
  template: `
    <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
      <img class="circle" width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
      <span class="title">{{$ctrl.data.name}}</span>
      <p><a href="#!/speaker/{{$ctrl.data.id}}">{{$ctrl.data.talk}}</a></p>
      <div class="secondary-content" style="cursor: pointer;" ng-click="$ctrl.onClick();">
        <i class="material-icons">thumb_up</i>
      </div>
    </li>
  `
}
