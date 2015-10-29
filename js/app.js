var app = angular.module('toDo',[ ]);

app.controller('toDoCtrl', function($scope) {

  $scope.tab = 1;

  $scope.todos = [
    'first',
    'second',
    'third',
  ];

  $scope.completed =[
    'completed task'

  ];

  $scope.isSet = function(newValue) {
    return $scope.tab === newValue
  };

  $scope.setTab = function(tabName) {
    $scope.tab = (tabName)
  };


  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
        $scope.completed.push(todo);
        $scope.todos.splice(indexOf,1);
    }
  };

  $scope.addToDo = function(newToDo) {
    $scope.todos.push(newToDo)
  };

  $scope.restore = function(todone) {

  var indexOf = $scope.completed.indexOf(todone);
  if (indexOf !== -1) {
      $scope.todos.push(todone);
      $scope.completed.splice(indexOf,1);
  }
};

});
