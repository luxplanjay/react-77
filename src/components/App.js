import { Component } from 'react';
import { Box } from './Box';

const BOX_VISIBILITY_LS_KEY = 'box-visibility';

export class App extends Component {
  state = {
    isBoxMounted: false,
  };

  componentDidMount() {
    const savedBoxMountedState = localStorage.getItem(BOX_VISIBILITY_LS_KEY);
    if (savedBoxMountedState !== null) {
      this.setState({
        isBoxMounted: JSON.parse(savedBoxMountedState),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isBoxMounted !== this.state.isBoxMounted) {
      localStorage.setItem(BOX_VISIBILITY_LS_KEY, this.state.isBoxMounted);
    }
  }

  toggleBoxVisibility = () => {
    this.setState(state => {
      return {
        isBoxMounted: !state.isBoxMounted,
      };
    });
  };

  render() {
    const { isBoxMounted } = this.state;

    return (
      <>
        <b>React Component Lifecycle</b>
        <hr />
        <button onClick={this.toggleBoxVisibility}>
          {isBoxMounted ? 'Unmount' : 'Mount'} Box
        </button>
        {isBoxMounted && <Box />}
      </>
    );
  }
}
