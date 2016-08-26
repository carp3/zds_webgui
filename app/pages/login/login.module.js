(function () {
    'use strict';

    var login = angular.module('ZDSGUI.pages.login', [])
        .config(routeConfig);
    login.controller('loginAction', function($scope) {
        $scope.dologin = function () {
            console.log("Hello! " + $scope.username )

        }
    });


    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/pages/login/login.html',
                title: 'ورود'
            });
    }

})();