/**
 * common/common.js
 *
 * Module that contains the common components for the application.
 */

import angular from 'angular'

import { HeaderComponent } from './header/header.component'

const common = angular
  .module('app.common', [])
  .component('acHeader', HeaderComponent)
  .name

export default common
