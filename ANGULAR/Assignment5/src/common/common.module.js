(function() {
"use strict";

angular.module('common', [])
// .constant('ApiPath', 'https://www.davidchuschinabistro.com')
.constant('ApiPath', 'https://ap-rawat-coursera.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
