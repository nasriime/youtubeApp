/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */
import controller from "./header.controller"

export const HeaderComponent = {
  controller,
  template: `
    <nav>
      <form>
        <input type="text" ng-model="$ctrl.searchInput" placeholder="Search" >
        <button>
          <a ui-sref="videos({ query: $ctrl.searchInput })">Search</a>
        </button>
      </form>
    </nav>
  `
}
