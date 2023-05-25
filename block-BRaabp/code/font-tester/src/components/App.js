import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      size: 20,
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSize = (event) => {
    this.setState({
      size: event.target.value,
    });
  };

  render() {
    const fonts = [
      'Roboto',
      'Potta One',
      'Yusei Magic',
      'Lato',
      'Noto Sans JP',
      'Open Sans',
      'Monteserrat',
      'Fraunces',
      'Imbue',
    ];
    return (
      <>
        <main className="container">
          <header>
            <input
              onChange={this.handleChange}
              value={this.state.value}
              className="one"
              type="text"
              placeholder="Type Something"
            />
            <label>
              <span>{this.state.size}px</span>
              <input
                onChange={this.handleSize}
                value={this.state.size}
                className="two"
                type="range"
              />
            </label>
          </header>
          <section>
            <div className="parent">
              {fonts.map((font) => {
                return (
                  <div className="font">
                    <h2>{font}</h2>
                    <p
                      style={{
                        fontFamily: font,
                        fontSize: this.state.size + 'px',
                        color: 'red',
                      }}
                    >
                      {this.state.value.toUpperCase()}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </>
    );
  }
}
export default App;
