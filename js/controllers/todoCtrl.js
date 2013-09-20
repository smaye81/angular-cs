todomvc.controller('TodoCtrl', ['$scope', 'todoStorage',
  function($scope, todoStorage){
    $scope.newTodo = '';
    var todos = $scope.todos = todoStorage.get();

    $scope.addTodo = function(){
      var newTodo = $scope.newTodo.trim();
      if(!newTodo.length){
        return;
      }
      todos.push({
        title: newTodo,
        completed: false
      });
      $scope.newTodo = '';
    };
  }
]);
