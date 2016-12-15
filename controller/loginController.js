app.controller('loginController',['$scope','$state',function($scope,$state){
	$scope.clickFn = function(){
		if( $scope.loginForm.$valid ){
           $state.go('home');
		}
	}
}]);