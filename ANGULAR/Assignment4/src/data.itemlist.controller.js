(function () {

    'use strict';

    angular.module('data')
    .controller('ItemController', ItemController);

    ItemController.$inject = ['MenuDataService','$stateParams', 'items']
    function ItemController(MenuDataService, $stateParams, items) {
        var itemCtrl = this;
        itemCtrl.items = items;
    }

})();