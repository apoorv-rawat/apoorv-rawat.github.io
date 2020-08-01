(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'ANGULAR/Assignment5/src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'ANGULAR/Assignment5/src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'ANGULAR/Assignment5/src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'ANGULAR/Assignment5/src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'ANGULAR/Assignment5/src/public/reg/register.html',
      controller: 'RegistrationController',
      controllerAs: 'regCtrl'
    })
    .state('public.myinfo', {
      url: '/userinfo',
      templateUrl: 'ANGULAR/Assignment5/src/public/reg/user.html',
      controller: 'UserInformationController',
      controllerAs: 'userCtrl'
    });

}
})();
