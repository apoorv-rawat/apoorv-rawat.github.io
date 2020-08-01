(function () {
  "use strict";

  angular.module('common')
    .service('MenuService', MenuService);


  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http, ApiPath) {
    var service = this;
    service.data = "";

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = { 'category': category };
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.validateFav = function (searchTerm) {

      var response = $http({
        method: "GET",
        url: ApiPath + "/menu_items/"+searchTerm +".json"
      });

      return response.then(function (result) {
        // console.log(result.data);
        return result.data;
      });
    }

    service.saveToService = function (user) {
      service.data = user;
    }

    service.getUserData = function () {
      return service.data;
    }

  }






  
})();
