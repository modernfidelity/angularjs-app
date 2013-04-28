'use strict';

/* App Module */

angular.module('approutes', []).
  config(['$routeProvider', function($routeProvider) {

  $routeProvider.
      when('/portfolio', {templateUrl: 'partials/portfolio.html',   controller: PortfolioListCtrl}).
  	  when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      //when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/'});


}]);