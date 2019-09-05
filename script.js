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

app.controller('homeCtrl', ['$scope', 
    function($scope){
        $scope.goToLogin = function() {
            $location.path('/login');
        };
        $scope.register = function () {
            $location.path('/register');
        }
}]);

app.controller('loginCtrl',['$scope', 
    function($scope){
        $scope.login = function() {
            let username = $scope.username;
            let password = $scope.password;
        }
    }
]);