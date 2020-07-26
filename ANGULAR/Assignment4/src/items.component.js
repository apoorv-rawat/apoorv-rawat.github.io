(function () {

    'use strict';

    angular.module('data')
    .component('items',{

        templateUrl: 'ANGULAR/Assignment4/src/templates/itemlistcomp-template.html',
        bindings: {
            itemsArray: '<',
            itemCat: '<' 
        }
    });
    
})();