import { Component } from 'react';
import axios from 'axios';

// 1 запуск > НЕТ КОНТРОЛЛЕРА > НАДО СОЗДАТЬ
// 2+ > ЕСЛИ КОНТРОЛЛЕР ЕСТЬ > ОТМЕНИТЬ СТАРЫЙ И СОЗДАТЬ НОВЫЙ

export class HttpReqAbortOnEvent extends Component {
  abortCtrl;

  fetchData = async () => {
    // Если контроллер ЕСТЬ, отменить запрос
    if (this.abortCtrl) {
      this.abortCtrl.abort();
    }

    // Если контроллера НЕТ, создать его
    this.abortCtrl = new AbortController();

    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      await axios.get(url, {
        signal: this.abortCtrl.signal,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchData}>Make request</button>
        <button onClick={() => this.abortCtrl.abort()}>Cancel request</button>
      </div>
    );
  }
}
