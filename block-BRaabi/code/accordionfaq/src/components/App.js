import React from 'react';
import questions from '../question';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <>
        <ul>
          {questions.map((e, i) => (
            <li>
              <h2
                onClick={() => {
                  this.setState({
                    activeIndex: this.state.activeIndex === i ? null : i,
                  });
                }}
              >
                {e.Q} {this.state.activeIndex === i ? '👆' : '👇'}
              </h2>
              {i === this.state.activeIndex && <p>{e.A}</p>}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
