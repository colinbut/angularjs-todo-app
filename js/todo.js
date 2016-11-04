
// controller in same file as the angularjs application
// this file should be app.js for instance
angular.module('todoApp', [])
  .controller('TodoListController', function() {

    var todoList = this;

    todoList.todos = [
      {text: 'learn angular', done:true},
      {text: 'build an angular app', done:false}
    ];

    // when adding a new todo
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    // when getting number of remainings
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    // when archiving todos
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          todoList.todos.push(todo); // push onto todos array
        }
      });
    };



  });
