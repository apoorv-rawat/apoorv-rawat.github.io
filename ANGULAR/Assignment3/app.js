(function () {

    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirectiveController() {
    }

    function FoundItemsDirective() {

        var ddo = {
            templateUrl: 'listDisplay.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'dirCtrl',
            bindToController: true,
            transclude: true
        };
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = "";// mandatory for scope accessing in this function
        ctrl.emp = false;
        ctrl.getData = function () {

            if (!ctrl.searchTerm) {
                ctrl.emp = true;
                ctrl.found = [];
            }
            else {
                ctrl.emp = false;
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
                promise.then(function (response) {
                    ctrl.found = response;
                    if (ctrl.found.length == 0) {
                        ctrl.emp = true;
                    }
                })
                    .catch(function (error) {
                        console.log(error);
                    });

            }
        }

        ctrl.removeitem = function (index) {
            ctrl.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.finder = function (data, searchTerm) {

            searchTerm = searchTerm.toLowerCase();
            var arr = [];

            for (let i = 0; i < data.menu_items.length; i++) {
                var element = data.menu_items[i].description;

                if (element.indexOf(searchTerm) >= 0) {
                    arr.push(data.menu_items[i]);
                }
            }
            return arr;
        }

        service.getMatchedMenuItems = function (searchTerm) {

            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            });
            return response.then(function (result) {
                // console.log(result.data);
                var foundItems = service.finder(result.data, searchTerm);
                // console.log(foundItems);

                return foundItems;
            });

        }
    }
})();