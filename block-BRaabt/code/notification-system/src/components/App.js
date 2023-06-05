import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activeIndex: null,
    };
  }
  handleClick = (i) => {
    this.setState({
      activeIndex: i,
      isVisible: !this.state.isVisible,
    });
  };
  handleCross = () => {
    this.setState({
      activeIndex: null,
    });
  };
  handleUi = () => {
    switch (this.state.activeIndex) {
      case 0:
        return (
          <>
            <button className="default">Default Notification </button>
            <span onClick={this.handleCross}>X</span>
          </>
        );

      case 1:
        return (
          <>
            <button className="success">Success Notification</button>
            <span onClick={this.handleCross}>X</span>
          </>
        );

      case 2:
        return (
          <>
            <button className="error">Error Notification </button>
            <span onClick={this.handleCross}>X</span>
          </>
        );

      case 3:
        return (
          <>
            <button className="warning">Warning Notification </button>
            <span onClick={this.handleCross}>X</span>
          </>
        );

      case 4:
        return (
          <>
            <button className="infor">Info Notification </button>
            <span onClick={this.handleCross}>X</span>
          </>
        );

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <ul>
          {[
            'Show Default',
            'Show success',
            'show error',
            'show warning',
            'show info',
          ].map((item, i) => (
            <li onClick={() => this.handleClick(i)} key={i}>
              {item}
            </li>
          ))}
        </ul>
        {this.handleUi()}
      </>
    );
  }
}

export default App;
