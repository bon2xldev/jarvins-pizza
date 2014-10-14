angular.module('jarp.controllers', [])

.controller('pizzamenuCtrl', function($scope, menuSrvcs) {
	$scope.lists = menuSrvcs.menu();
})
.controller('pizzadetailCtrl', function($scope, $stateParams, menuSrvcs) {
  $scope.item = menuSrvcs.itemDetail($stateParams.pizzaId);

})



.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.yoh($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
