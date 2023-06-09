import { Component } from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 100,
  backgroundColor: 'orangered',
  color: 'white',
  textTransform: 'uppercase',
  marginTop: 10,
  userSelect: 'none',
  fontSize: 24,
};

export class Box extends Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateValue = () => {
    this.setState(state => {
      return { value: state.value + 1 };
    });
  };

  render() {
    console.log('render');
    return (
      <div style={styles} onClick={this.updateValue}>
        {this.state.value}
      </div>
    );
  }
}
