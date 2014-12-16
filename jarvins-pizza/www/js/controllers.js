var app = angular.module('jarp.controllers', []);

app.controller('pizzamenuCtrl', function($scope, menuSrvcs) {
	$scope.lists = menuSrvcs.menu();
});

app.controller('pizzadetailCtrl', function($scope, $stateParams, menuSrvcs) {
  $scope.item = menuSrvcs.itemDetail($stateParams.pizzaId);
});

app.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
});

app.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.yoh($stateParams.friendId);
});

app.controller('AccountCtrl', function($scope) {
});
