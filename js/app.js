var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController',
    })
    .when('/newLocation', {
      templateUrl: 'views/newLocation.html',
      controller: 'NewLocationController',
    })
    .otherwise({
      templateUrl: '/',
    });
});