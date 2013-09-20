todomvc.controller('TodoCtrl', ['$scope', 'todoStorage',
  function($scope, todoStorage){
    $scope.newTodo = '';
    var todos = $scope.todos = todoStorage.get();

    $scope.addTodo = function(){
      var newTodo = $scope.newTodo.trim(),
          addDate = new Date(),
          dateMM = addDate.getMonth(),
          dateDD = addDate.getDay(),
          dateYYYY = addDate.getFullYear();
      if(!newTodo.length){
        return;
      }
      todos.push({
        title: newTodo,
        completed: false,
        dateAdded: "Zut Alors! " + dateMM+"-"+dateDD+"-"+dateYYYY
      });
      $scope.newTodo = '';
    };
  }
]);
