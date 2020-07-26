(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // For redirecting back to home page
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'ANGULAR/Assignment4/src/templates/home-template.html'
        })

        // Next state - categories
        .state('categories', {
            url: '/cat',
            templateUrl: 'ANGULAR/Assignment4/src/templates/categorylist-template.html' ,
            controller: 'CategoriesListController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    var a = MenuDataService.getAllCategories();
                    return a;
                }]
            }
        })
        
        // Next  state-  category items (not a child)
        .state('items',{
            url: '/item/{catId}',
            templateUrl: 'ANGULAR/Assignment4/src/templates/itemlist-template.html',
            controller: 'ItemController as itemCtrl',
            resolve: {
                items: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {

                    var a = MenuDataService.getItemsForCategory($stateParams.catId);
                    return a;
                }]
            }
        });



    
    
    }

})();