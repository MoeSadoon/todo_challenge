var app = angular.module('toDo',[ ]);

app.controller('toDoCtrl', function($scope) {

  $scope.tab = 1;

  $scope.todos = [
    {text:'first', editing: false},
    {text:'second', editing: false},
    {text:'third', editing: false}

  ];

  $scope.completed =[
    {text:'completed task', editing: false}

  ];

  $scope.editedTodo = null;


  $scope.date = new Date();

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
    $scope.todos.push({text:newToDo, editing: false})
  };

  $scope.editToDo = function(todo) {
    todo.editing=true;
    $scope.editedTodo = todo;

  };

  $scope.doneEditing = function(todo) {
    todo.editing=false;
    $scope.editedTodo = null;

  };

  $scope.restore = function(todone) {

  var indexOf = $scope.completed.indexOf(todone);
  if (indexOf !== -1) {
      $scope.todos.push(todone);
      $scope.completed.splice(indexOf,1);
    }
  };



  $scope.clear = function() {
    $scope.newToDo = null
  };

  $scope.reset = function() {
    $scope.todos = [];
    $scope.completed = [];
  };

  $scope.enterAndClear = function(newToDo) {
    $scope.addToDo(newToDo);
    $scope.newToDo = null;

  };

  $scope.clearActive = function() {
    $scope.todos = []
  };

  $scope.clearCompleted = function() {
    $scope.completed = []
  };


});
