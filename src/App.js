import { Component } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

class App extends Component {
  state = {
    input: '',
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    editTodo: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  setInput = (input) => {
    this.setState({ input });
  };

  setTodos = (todos) => {
    this.setState({ todos });
  };

  setEditTodo = (editTodo) => {
    this.setState({ editTodo });
  };

  render() {
    const { input, todos, editTodo } = this.state;

    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
            <Form
              input={input}
              setInput={this.setInput}
              todos={todos}
              setTodos={this.setTodos}
              editTodo={editTodo}
              setEditTodo={this.setEditTodo}
            />
            <Tasks todos={todos} setTodos={this.setTodos} setEditTodo={this.setEditTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
