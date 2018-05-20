/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */
import controller from "./header.controller"

export const HeaderComponent = {
  controller,
  template: `
    <header class="header">
      <form class="form">
        <div class="form__element">
          <i class="fa fa-youtube-play"></i>
          <input ng-if="!$ctrl.disableSearch" class="header__search-input" type="text" ng-model="$ctrl.searchInput" placeholder="Search" >
          <span ng-if="$ctrl.disableSearch">{{$ctrl.searchInput}}</span>
        </div>
        <div>
          <button type="submit" class="header__btn">
            <a ng-click="$ctrl.disableSearch = !$ctrl.disableSearch" ng-if="!$ctrl.disableSearch" ui-sref="videos({ query: $ctrl.searchInput })">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
            <a ng-click="$ctrl.disableSearch = !$ctrl.disableSearch"  ng-if="$ctrl.disableSearch">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </button>
        </div>
      </form>
    </header>
  `
}
