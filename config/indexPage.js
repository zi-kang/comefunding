var app = angular.module('yktb',['ui.router','ngAnimate']);
app.directive("goToTop",function(){
	return{
            scope: {
            minHeight : '@'
		},
		template: '<div id="gotoTop" title="返回顶部"></div>',
		link:function(scope,elem,attrs){
            elem.click(function() {
                $('html,body').animate({scrollTop:0}, 700);
            });
            scope.minHeight = scope.minHeight ? scope.minHeight : 600;
            $(window).scroll(function() {
                  var s = $(window).scrollTop();
                  if( s > scope.minHeight) {
                      $("#gotoTop").fadeIn(100);
                  } else {
                      $("#gotoTop").fadeOut(200);
                  };
            });
        }
    }
});

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'view/home.html',
		controller:'homeController'
	})
	.state('home.homeItem1',{
		url:'/homeItem1',
		templateUrl:'view/homeItem1.html'
		//controller:'homeItem1Controller'
	})
	.state('home.homeItem2',{
		url:'/homeItem2',
		templateUrl:'view/homeItem2.html'
		//controller:'homeItem1Controller'
	})
	.state('project',{
		url:'/project',
		templateUrl:'view/project.html',
		controller:'projectController'
	})
	.state('project.info',{
		url:'/info',
		templateUrl:'view/project.info.html'
	})
	.state('project.detail',{
		url:'/detail',
		templateUrl:'view/project.detail.html'
	})
	.state('project.support',{
		url:'/support',
		templateUrl:'view/project.support.html'
	})
	.state('signProgram',{
		url:'/signProgram',
		templateUrl:'view/signProgram.html',
		controller:'signProgramController'
	})
	.state('signProgram.page2',{
		url:'/page2',
		templateUrl:'view/signProgram.page2.html'
	})
	.state('signProgram.page3',{
		url:'/page3',
		templateUrl:'view/signProgram.page3.html'
	})
	.state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginController'
	})
	.state('register',{
		url:'/register',
		templateUrl:'view/register.html',
		controller:'registerController'
	})
	.state('findPwd',{
		url:'/findPwd',
		templateUrl:'view/findPwd.html',
	})

}]);

