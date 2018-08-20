'use strict';

angular.module('dictList').
	component('dictList',{
/*		template:"<h1>TEST</h1><h2>{{title}}</h2>",*/
		templateUrl:'/templates/dict-list.html',

/*		templateUrl:'/templates/search.html',*/
		controller:function($scope,$http){
		console.log("hello")
		$scope.title = 'hi der'



		$http.get("http://localhost:8080/things").then(function(data){
		$scope.apiItem = data.data;
		console.log($scope.apiItem);
		});








		}




	});
/*	controller('DictListController', function($scope){
	console.log("hello")
	$scope.title = 'hi der'

	});*/