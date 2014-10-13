angular.module('jarp.services', ['firebase'])

.factory('JarpSrvcs', function($firebase) {
  var ref = new Firebase("https://jarvins-pizza.firebaseio.com/");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object

  return {
    allPizza: function() {
      return sync.$asObject();
    }
  }

})
/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    yoh: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
