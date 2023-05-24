import React from 'react';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
      isVisible: false,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        isDisplay: !prevState.isDisplay,
      };
    });
  };
  handleDisplay = () => {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
  };
  render() {
    return (
      <>
        <aside>
          <button onClick={this.handleDisplay} className="btn-two">
          SIDEBAR
          </button>
        </aside>
        <center>
          <button className="btn" onClick={this.handleClick}>
            SHOW MODAL
          </button>
        </center>
        {this.state.isDisplay ? <Modal show={this.handleClick} /> : ''}
        {this.state.isVisible ? <Aside showaside={this.handleDisplay} /> : ''}
      </>
    );
  }
}

function Modal(props) {
  return (
    <>
      <center className="modal">
        <h1 className="heading">Modal Content</h1>
        <button onClick={props.show}>X</button>
      </center>
    </>
  );
}

function Aside(props) {
  return (
    <>
      <div className='asidebar'>
        <h1>Coding Addict</h1>
        <button onClick={props.showaside}>X</button>
      </div>
    </>
  );
}

export default Cards;
