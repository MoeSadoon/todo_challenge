var app = angular.module('toDo',[ ]);

app.controller('toDoCtrl', function($scope) {

  $scope.todos = [
    'first',
    'second',
    'third',
  ];

  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
        $scope.todos.splice(indexOf,1);
    }
  };

  $scope.addToDo = function(newToDo) {
    $scope.todos.push(newToDo)
  };
// 


});
