angular.module('jarp.controllers', [])

.controller('pizzamenuCtrl', function($scope, JarpSrvcs) {
	$scope.pizzas = JarpSrvcs.allPizza();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.yoh($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
