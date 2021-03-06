/**
 * app.js
 *
 * Root module that imports all modules of the app.
 */

import angular from 'angular'
import uiRouter from '@uirouter/angularjs'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular
  .module('angularCamp', [
    uiRouter,
    common,
    components
  ])
  .component('acApp', AppComponent)

// Bootstrap the app.
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['angularCamp']))

export default root
