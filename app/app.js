/**
 * Created by e067616 on 11/17/16.
 */
'use strict';

define(
    [
        'angular',
        'angularAMD',
        //Add custom files here
        'app-constant',
        'app-url-constant',
        //End
        'angular-ui-router',
        'angular-bootstrap',
        'angular-sanitize',
        'angular-animate'
    ],

    function (angular,
              angularAMD,
              AppConstant,
              UrlConstant) {

        var app = angular.module("AppName", [
            'ui.router',
            'ui.bootstrap',
            // 'ngResource',
            'ngSanitize'
        ]);

        app.controller('shellController', ['$scope', function ($scope) {
            $scope.displayMsg = "App started";

        }]);

        app.constant("UrlsConstant", UrlConstant);

        app.constant("appConstant", AppConstant);

        return angularAMD.bootstrap(app);
    });
