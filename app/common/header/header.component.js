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
          <input class="header__search-input" type="text" ng-model="$ctrl.searchInput" placeholder="Search" >
        </div>
        <div>
          <button class="header__btn">
            <a ui-sref="videos({ query: $ctrl.searchInput })">
              <i class="fa fa-search" aria-hidden="true"></i>
            </a>
          </button>
        </div>
      </form>
    </header>
  `
}
