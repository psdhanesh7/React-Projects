import React, {Component} from 'react';
import Todos from './Todos';
import Addform from './Addform';

class  App extends  Component{

  state = {
    todos : [
      {id : 1, content : "Get some mild"},
      {id : 2, content : "Play mario kart"}
    ]
  }

  deleteTodo = (id) =>{
    const todoList = this.state.todos.filter(todo => {
       return todo.id !== id;
    })

    this.setState({
      todos : todoList
    }
    )
  }

  addTodos = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos : todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
          <h1 className="center blue-text">Todo's List</h1>
          <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} />
          <Addform  addTodos = {this.addTodos} />
          
      </div>
    );
  }

}

export default App;
