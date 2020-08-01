(function () {
    "use strict";

    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['MenuService'];
    function RegistrationController(MenuService) {
        var $ctrl = this;
        $ctrl.found = true;

        $ctrl.saved = false;

        $ctrl.saveData = function () {
            MenuService.saveToService($ctrl.user);
            $ctrl.saved = true;
        }

        $ctrl.submit = function () {
            var promise = MenuService.validateFav($ctrl.user.fav_itemno);
            promise.then(function (response) {
                $ctrl.found = true;

                //adding item desc and item title here
                $ctrl.user.desc = response.description;
                $ctrl.user.name = response.name;

                $ctrl.saveData();
                // console.log("Saving....");
            })
                .catch(function (error) {
                    // console.log(error.data.error);
                    $ctrl.found = false;
                    $ctrl.saved = false;
                });

        }

    }


})();