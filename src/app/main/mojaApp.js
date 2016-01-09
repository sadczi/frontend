var mojaApp = angular.module('mojaApp',[]);

mojaApp.controller('AboutController', ['$scope', function($scope){
	$scope.elo = 'cos robie';
}]);


mojaApp.directive('abouts',function(){
	return{
		restrict: 'E',
		scope:{},
		templateUrl: 'app/main/directives/about.html'
	};

});