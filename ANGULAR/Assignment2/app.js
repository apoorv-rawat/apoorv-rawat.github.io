(function aa() {
    'use strict';


    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ShoppingListCtrl1)
        .controller('AlreadyBoughtController', ShoppingListCtrl2)
        .service('ShoppingListCheckOffService', ShoppingListService);


    ShoppingListCtrl1.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListCtrl1(ShoppingListService) {
        var list1 = this;
        list1.itemsArray = ShoppingListService.getItems();

        list1.removeItem = function (index) {
            ShoppingListService.removeItem(index);
        };
    }


    ShoppingListCtrl2.$inject = ['ShoppingListCheckOffService'];
    function ShoppingListCtrl2(ShoppingListService) {
        var list2 = this;
        list2.itemsArray = ShoppingListService.getItemsBought();

    }


    function ShoppingListService() {
        var service = this;
        var itemsBought = [];
        var itemsToBuy = [

            {
                name: 'Pasta Sauce',
                qty: 2
            },

            {
                name: 'Chocolates',
                qty: 5
            },

            {
                name: 'Cookies',
                qty: 10
            },

            {
                name: 'Chips',
                qty: 6
            },

            {
                name: 'Juice Bottles',
                qty: 5
            }

        ];


        service.removeItem = function (itemIndex) {

            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);

        }
        service.getItems = function () {
            return itemsToBuy;
        }
        service.getItemsBought = function () {

            return itemsBought;
        }
    }

})();