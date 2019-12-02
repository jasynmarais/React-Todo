import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleCompleted = id => {
    let todos = [...this.state.todos];
    let todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;

    this.setState({ todo });
    console.log(this.state);
  };

  handleTodoChanged = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          task: this.state.newTodo,
          completed: false
        }
      ]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.addTodo}
          handleTodoChanged={this.handleTodoChanged}
          newTodo={this.state.newTodo}
        />
        <TodoList
        todos={this.state.todos}
        handleCompleted={this.handleCompleted}
        />
      </div>
    );
  }
}

export default App;
