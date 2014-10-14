angular.module('jarp.services', ['firebase'])

.factory('menuSrvcs', function($firebase) {
  var url = "https://jarvins-pizza.firebaseio.com/menu/pizza/";

  return {
    menu: function() {
      var ref = new Firebase(url);
      var sync = $firebase(ref);
      return sync.$asObject();
    },
    itemDetail: function(pizzaId) {
      var ref = new Firebase(url + pizzaId);
      var sync = $firebase(ref);
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
