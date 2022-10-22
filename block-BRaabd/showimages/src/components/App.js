import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: 'phone',
    };
  }
  handleClick = (e) => {
    console.log(e.target.innerText);
    let imageName = e.target.innerText;
    this.setState({
      imageData: imageName.toLowerCase(),
    });
  };
  render() {
    return (
      <>
        <center>
          <h1>Show Images</h1>
          <button onClick={this.handleClick}>Basketball</button>
          <button onClick={this.handleClick}>pubG</button>
          <button onClick={this.handleClick}>Tiger</button>
          <button onClick={this.handleClick}>Phone</button>
          <button onClick={this.handleClick}>Laptop</button>
          <button onClick={this.handleClick}>Cricket</button>
        </center>
        <center>
          <img
            alt={this.state.imageData}
            src={`./images/${this.state.imageData}.jpg`}
          />
        </center>
      </>
    );
  }
}

export default App;
