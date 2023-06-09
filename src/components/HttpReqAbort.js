import { Component } from 'react';
import axios from 'axios';

export class HttpReqAbort extends Component {
  state = {
    isVisible: false,
  };

  toggleVisibility = () => {
    this.setState(state => {
      return { isVisible: !state.isVisible };
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {isVisible ? 'Unmount' : 'Mount'}
        </button>
        {isVisible && <ChildComponent />}
      </div>
    );
  }
}

class ChildComponent extends Component {
  abortCtrl;

  state = {
    todos: [],
  };

  async componentDidMount() {
    this.abortCtrl = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      const response = await axios.get(url, {
        signal: this.abortCtrl.signal,
      });
      this.setState({
        todos: response.data,
      });
    } catch (error) {}
  }

  componentWillUnmount() {
    this.abortCtrl.abort();
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>ChildComponent</h2>
        {todos.length > 0 && (
          <div>
            {todos.map(todo => (
              <div key={todo.id}>{todo.title}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
