// Genero el Modulo de la app, e indico sus dependencias. 
(function() {
    'use strict';

    angular.module('exampleApp', ['ngRoute']);

    //// Configuración de ROUTES y asociacion de cada uno con Views y Controllers.
    angular.module('exampleApp').config(function($routeProvider) {
        $routeProviders
            .when('/', {
                controller: 'homeControler',
                controllerAs: 'hCtrl',
                templateUrl: '../app/views/home.html'
            })
            .otherwise({ redirectTo: '/' });
    });
})();