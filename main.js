/**
 * Created by e067616 on 11/17/16.
 */
require.config({
    waitSeconds: 60,
    //path to base url
    baseUrl: "",
    // Paths for just the core application and its controllers/factories/services
    paths: {
        "appName": "app/app",
        //jquery
        "jquery": [
            "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min",
            "bower_components/jquery/dist/jquery.min" //fallback in case CDN fails
        ],
        //angular
        "angular": [
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular",
            "bower_components/angular/angular" //fallback in case CDN fails
        ],
        "angularAMD": "bower_components/angularAMD/angularAMD.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap",
        "angular-sanitize": "bower_components/angular-sanitize/angular-sanitize.min",
        "angular-animate": "bower_components/angular-animate/angular-animate.min",
        //Add user Defined files here
        "app-constant":"app/app-constant",
        "app-url-constant":"app/app-url-constant",
        //End here
        //underscore
        "underscore": "bower_components/underscore/underscore-min"
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        "appName": ["angular"],
        //Tell requirejs to pipe in angular's return variable as "angular"
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        },
        "angularAMD": ["angular"],
        "angular-ui-router": ["angular"],
        "angular-resource": ["angular"],
        "angular-sanitize": ["angular"],
        "angular-animate": ["angular"],
        "angular-bootstrap": ["angular"]
    }
});

require(['appName'], function (appName) { });
