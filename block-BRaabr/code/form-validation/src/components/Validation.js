import React from 'react';

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPass: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPass: '',
      },
    };
  }

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =
          value.length < 3 ? 'username must be atleast 3 character' : '';
        break;
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 6 ? 'password must be atleast 6 characters' : '';
        break;
      case 'confirmPass':
        errors.confirmPass =
          this.state.password === value ? '' : 'password is not matching';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let { email, password, username, confirmPass } = this.state.errors;
    return (
      <>
        <h1 className="heading">Register With Us</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Username">Username</label>
          <input
            value={this.state.username}
            onChange={this.handleInput}
            name="username"
            type="text"
            id="username"
            placeholder="Enter Username"
            className={username && 'error'}
          />
          <span>{username}</span>
          <label htmlFor="Username">Email</label>
          <input
            value={this.state.email}
            onChange={this.handleInput}
            name="email"
            type="text"
            id="email"
            placeholder="Enter email"
            className={email && 'error'}
          />
          <span>{email}</span>
          <label htmlFor="Username">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleInput}
            name="password"
            type="password"
            id="password"
            placeholder="Enter Password"
            className={password && 'error'}
          />
          <span>{password}</span>
          <label htmlFor="Username">Confirm Password</label>
          <input
            value={this.state.confirmPass}
            onChange={this.handleInput}
            name="confirmPass"
            type="password"
            id="confirmPass"
            placeholder="Enter Password again"
            className={confirmPass && 'error'}
          />
          <span>{confirmPass}</span>
          <input className="submit" type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Validation;
