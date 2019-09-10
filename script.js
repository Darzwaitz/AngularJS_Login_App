let app = angular.module('main', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: './components/home.html',
        controller: 'homeCtrl'
    }).when('/login', {
        templateUrl: './components/login.html',
        controller: 'loginCtrl'
    })
    .otherwise({
        template: '404 - not found'
    })
});

app.controller('homeCtrl', ['$scope', '$location', 
    function ($scope, $location){
        $scope.goToLogin = function() {
            $location.path('/login');
        };
        $scope.register = function () {
            $location.path('/register');
        }
}]);

app.controller('loginCtrl',['$scope', '$http',
    function ($scope, $http){
        $scope.login = function() { 
            let username = $scope.username;
            let password = $scope.password;
            console.log('Now' + username + password);
            $http({
                url: 'http://localhost/login-app/server.php',
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                data: `username= ${username}&password=${password}`
                // data: 'username=' + username + '&password=' + password

            }).then(function(response){
                console.log(response.data);
                
            })
        }
    }
]);