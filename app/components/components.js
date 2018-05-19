/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import video from './video'

const components = angular
  .module('app.components', [video])
  .name

export default components
