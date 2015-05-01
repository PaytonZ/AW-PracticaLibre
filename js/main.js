/**
 * Main AngularJS Web Application
 */
 var app = angular.module('practicaLibreAW', [
  'ngRoute'
  ]);

/**
 * Configure the Routes
 */
 app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/ultrasonidos", {templateUrl: "partials/ultrasonidos.html", controller: "PageCtrl"})
    .when("/electromagnetico", {templateUrl: "partials/electromagnetico.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
  }]);


/**
 * Controls the pages
 */
 app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Controlador de Páginas Activado");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });