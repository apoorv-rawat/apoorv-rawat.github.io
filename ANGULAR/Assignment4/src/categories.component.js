(function () {

    'use strict';

    angular.module('data')
    .component('categories',{

        templateUrl: 'ANGULAR/Assignment4/src/templates/categorylistcomp-template.html',
        bindings: {
            categoryArray: '<'
        }
    });
    
})();