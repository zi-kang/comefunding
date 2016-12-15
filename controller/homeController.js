app.controller('homeController', ['$scope','$interval', function($scope,$interval){
	$scope.imgSlide = ['images/homepage-banner1.png','images/homepage-banner2.png','images/homepage-banner3.png','images/homepage-banner5.png'];
	
	/*var timer = function(){
        if( $scope.showIndex >= $scope.imgSlide.length-1){
        	$scope.showIndex = 0;
        	return;
        }
        $scope.showIndex++;
    };
    var inter = $interval(timer,2000);  
    $scope.end = function(index){
     	$interval.cancel(inter);
     	$scope.showIndex = index;
    }
    $scope.start = function(){
     	 inter = $interval(timer,2000);
    }*/

    //渐隐的动画效果
    $scope.showIndex = $scope.imgSlide.length-1;
    function runloop(){
        $scope.showIndex = ($scope.showIndex+1)%$scope.imgSlide.length;
    }
    var inter = $interval(runloop,2000);
    $scope.end = function(index){
        $scope.showIndex = index;
        $interval.cancel(inter);
    }
    $scope.start = function(){
        inter = $interval(runloop,2000);
    }








    $scope.choices = ['最新故事','推荐故事','众筹结束'];
    $scope.choiceIndex = 0;
    $scope.chooseFn = function(i){
         $scope.choiceIndex = i;
    }
}]);