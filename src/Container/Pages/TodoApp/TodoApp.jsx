import React, { Component } from "react";
import { Todo } from "./Todo/Todo";

class TodoApp extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = () => {
    const newsItem = {
      id: Date.now(),
      text: this.state.text,
    };

    if (this.state.text.length === 0) {
      return;
    }

    this.setState({
      items: this.state.items.concat(newsItem),
      text: "",
    });
  };

  render() {
    return (
      <div className="contentTodo">
        <p className="headingTodo">Todo App</p>

        <Todo dataItems={this.state.items} />

        <div className="form">
          <input
            type="text"
            placeholder="Add items"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={this.state.text}
          />

          <button onClick={this.handleSubmit}>
            Add items {this.state.items.length + 1}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoApp;
