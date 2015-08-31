'use strict';

/**
 * @ngdoc function
 * @name nasInFinderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nasInFinderApp
 */
nasInFinderApp
  .controller('ListCtrl', function ($scope, dirService) {
		$scope.listContents = [];
		
		// hard coded at this time 
		var path = '/Ethan/SharedWithTeam/eBook/';

		init();

		function init() {
			dirService.getList(path)
				.success(function(data) {
					angular.copy(data.dir.entry, $scope.listContents);
	            });
		}

  });
