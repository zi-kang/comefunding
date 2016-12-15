app.controller('signProgramController',['$scope','$interval','$http',function($scope,$interval,$http){
	$scope.showTitle = 0;
	$scope.title = ['1.帮助与须知','2.填写信息','3.完成'];
	$scope.titleNum = function(index){
		$scope.showTitle = index;
	}
}]);