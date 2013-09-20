var bytes = angular.module('Bytes', [])

bytes.filter('fileSize', [function () {
	return function (input) {
		if (angular.isUndefined(input)) {
			return '';
		}

		if (input < 1024) {
			return input + ' B';
		}

		if (1024 <= input && input < 1048576) {
			return (input / 1024).toFixed(2) + ' KB';
		}

		if (1048576 <= input && input < 1073741824) {
			return (input / 1048576).toFixed(2) + ' MB';
		}

		return input;
	};
}]);

bytes.controller('BytesCtrl', ['$scope',
function($scope) {
	$scope.file = {};
}]);