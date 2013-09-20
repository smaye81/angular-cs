var shoppingModule = angular.module('ShoppingModule', []);

shoppingModule.factory('Items', function()
{
	var items = {};
	items.query = function(){
		return [
			{title: 'Bucket', description: 'Put stuff in it.', price: 3.95},
			{title: 'Shovel', description: 'Dig stuff with this', price: 12.95},
			{title: 'Axe', description: 'Cut stuff with this', price: 6.95}
		];
	};
	return items;
});

shoppingModule.controller('ShoppingController', ['$scope', 'Items', function() {
	$scope.items = Items.query();
}]);