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
      <form class="form" ng-submit="$ctrl.submitForm()" id="searchform">
        <div class="form__element">
          <i class="fa fa-youtube-play"></i>
          <input ng-if="!$ctrl.disableSearch" class="header__search-input" type="text" ng-model="$ctrl.searchInput" placeholder="Search" >
          <span ng-if="$ctrl.disableSearch">{{$ctrl.searchInput}}</span>
        </div>
        <div>
          <button ng-click="$ctrl.submitForm();$ctrl.disableSearch = !$ctrl.disableSearch" type="submit" class="header__btn">
            <a>
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </button>
        </div>
      </form>
    </header>
  `
}
