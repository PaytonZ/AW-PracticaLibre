 /*Aplicación Principal Angular JS*/
 var app = angular.module('practicaLibreAW', [
  'ngRoute' // 'ngMódulo' de enroutado
  ]);
 /*Configurando que controlador se encarga de qué página*/
 app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
  .when("/pagina1", {templateUrl: "pagina1.html", controller: "PageCtrl"})
  .when("/pagina2", {templateUrl: "pagina2.html", controller: "PageCtrl"})
  .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);
 /*Configurando un Controlador */
 app.controller('PageCtrl', function (/* $scope, $location, $http */) {});