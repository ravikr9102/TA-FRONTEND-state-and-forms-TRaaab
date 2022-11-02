import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 0,
      max: Infinity,
    };
  }

  handleSteps = (e) => {
    let value = Number(e.target.value);
    this.setState({
      step: value,
    });
  };

  handleMax = (e) => {
    let value = Number(e.target.value);
    this.setState({
      max: value,
    });
  };

  handleIncrement = () => {
    if (this.state.counter + this.state.step < this.state.max) {
      if (this.state.step === 5) {
        this.setState({
          counter: this.state.counter + 5,
        });
      } else if (this.state.step === 10) {
        this.setState({
          counter: this.state.counter + 10,
        });
      } else if (this.state.step === 15) {
        this.setState({
          counter: this.state.counter + 15,
        });
      } else {
        this.setState({
          counter: this.state.counter + 1,
        });
      }
    }
  };

  handleDecrement = () => {
    if (this.state.step === 5) {
      this.setState({
        counter: this.state.counter - 5,
      });
    } else if (this.state.step === 10) {
      this.setState({
        counter: this.state.counter - 10,
      });
    } else if (this.state.step === 15) {
      this.setState({
        counter: this.state.counter - 15,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <>
        <center>
          <h1>{this.state.counter}</h1>
          <h2>Steps</h2>
          <button value="5" onClick={this.handleSteps} className="max-btn">
            5
          </button>
          <button value="10" onClick={this.handleSteps} className="max-btn">
            10
          </button>
          <button value="15" onClick={this.handleSteps} className="max-btn">
            15
          </button>
        </center>
        <center>
          <h2>Max Value</h2>
          <button value="15" onClick={this.handleMax} className="max-btn">
            15
          </button>
          <button value="100" onClick={this.handleMax} className="max-btn">
            100
          </button>
          <button value="200" onClick={this.handleMax} className="max-btn">
            200
          </button>
        </center>
        <center>
          <button onClick={this.handleIncrement} className="btn">
            Increment
          </button>
          <button onClick={this.handleDecrement} className="btn">
            Decrement
          </button>
          <button onClick={this.handleReset} className="btn">
            Reset
          </button>
        </center>
      </>
    );
  }
}

export default App;
