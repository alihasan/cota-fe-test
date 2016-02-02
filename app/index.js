'use strict';

require('angular-ui-router');

var mod = angular.module('app', [
  'ui.router',
  'lumx'
]);

mod.config([
  '$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
]);

module.exports = mod;
