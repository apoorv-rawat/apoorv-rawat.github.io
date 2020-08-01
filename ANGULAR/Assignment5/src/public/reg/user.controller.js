(function () {
    "use strict";

    angular.module('public')
        .controller('UserInformationController', UserInformationController);

    UserInformationController.$inject = ['MenuService', 'ApiPath'];
    function UserInformationController(MenuService, ApiPath) {
        var $ctrl = this;
        $ctrl.user = "";
        $ctrl.imgPath = "";

        $ctrl.getData = function () {
            $ctrl.user = MenuService.getUserData();
            $ctrl.imgPath = ApiPath + "/images/" + $ctrl.user.fav_itemno + ".jpg";
            // console.log($ctrl.user);
            if ($ctrl.user) {
                if (!$ctrl.user.phone) {
                    $ctrl.user.phone = "Data not supplied";
                }
            }

        }
        $ctrl.getData();
    }


})();