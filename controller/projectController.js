app.controller('projectController', ['$scope','$interval','$http' ,function($scope,$interval,$http){
	$scope.showTitle = 0;
	$scope.title = ['1.基本信息','2.项目描述','3.支持选项'];
	$scope.subTitle = function(){
		$scope.showTitle--;
	}
	$scope.addTitle = function(){
		$scope.showTitle++;
	}
	$scope.state = false;
	$scope.showFn = function(){
        $scope.state = !$scope.state;
	}
    $scope.eState = false;
	$scope.showEmail = function(){
        $scope.eState = !$scope.eState;
	}

	//提交表单时验证是否通过(这块不会)
   // $http()
}]);