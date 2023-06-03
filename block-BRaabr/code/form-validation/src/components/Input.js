import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '',
      message: '',
    };
    this.fileInput = React.createRef();
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.text +
        this.state.date +
        this.state.message +
        this.inputFile.current.files[0].name
    );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Text Input">Text Input</label>
        <input
          type="text"
          name="text"
          id="text"
          value={this.state.text}
          onChange={this.handleInput}
        />

        <label htmlFor="Date Input">Date Input</label>
        <input
          type="date"
          name="date"
          id="date"
          value={this.state.date}
          onChange={this.handleInput}
        />

        <label htmlFor="File Input">File Input</label>
        <input type="file" ref={this.fileInput} name="file" id="file" />

        <label htmlFor="Read-Only Input">Read-Only Input</label>
        <input
          type="text"
          name="read"
          value="This can only be copied"
          id="read"
          onChange={this.handleInput}
          readOnly
        />

        <label htmlFor="Disabled Input">Disabled Input</label>
        <input
          type="text"
          name="disabled"
          onChange={this.handleInput}
          id="disabled"
          disabled
        />

        <label htmlFor="Read-Only Input">Textarea Input</label>
        <textarea
          type="text"
          name="message"
          id="message"
          onChange={this.handleInput}
          rows="10"
          cols="30"
          value={this.state.message}
        />

        <label htmlFor="Read-Only Input">Textarea Input Disabled</label>
        <textarea
          type="text"
          name="message"
          rows="10"
          cols="30"
          onChange={this.handleInput}
          id="message"
          disabled
        />

        <input className="submit" type="submit" value="submit" />
      </form>
    );
  }
}

export default Input;
