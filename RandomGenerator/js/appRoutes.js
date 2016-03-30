angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
                // home page
                .when('/~smac/RandomGenerator/public_html/', {
                    templateUrl: 'views/home.html',
                    controller: 'MainController'
                })

                .otherwise({
                    redirectTo: '/hello'
                });
        

        $locationProvider.html5Mode(true);

    }]);

