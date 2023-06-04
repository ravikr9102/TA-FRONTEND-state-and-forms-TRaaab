import React from 'react';

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShippingAddress: '',
      ShippingCode: '',
      ShippingCity: '',
      ShippingCountry: '',
      BillingAddress: '',
      BillingCode: '',
      BillingCity: '',
      BillingCountry: '',
      error: {
        address: '',
      },
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;
    switch (name) {
      case 'address':
        error.address =
          value.length < 8 ?'You need to enter at-least 8 characters' : '';
        break;
      default:
        break;
    }
    this.setState({ error, [name]: value });
  };
  handelChange = (event) => {
    if (event.target.checked) {
      this.setState({
        BillingAddress: this.state.ShippingAddress,
        BillingCode: this.state.ShippingCode,
        BillingCity: this.state.ShippingCity,
        BillingCountry: this.state.ShippingCountry,
      });
    } else {
      this.setState({
        BillingAddress: '',
        BillingCode: '',
        BillingCity: '',
        BillingCountry: '',
      });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    let { address } = this.state.error;
    return (
      <>
        <div>
          <h1>Shipping Address</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Address</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="ShippingAddress"
              id="address"
              placeholder="e.g New Delhi Vasnat Vihar"
              className={address && 'error'}
            />
            <span>{address}</span>
            <label>ZIP/Postal Code</label>
            <input
              onChange={this.handleInput}
              type="number"
              name="ShippingCode"
              id="zip"
              placeholder="e.g. 176057"
            />
            <label>City</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="ShippingCity"
              id="city"
              placeholder="e.g New Delhi"
            />
            <label>Country</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="ShippingCountry"
              id="Country"
              placeholder="e.g India"
            />
            <input className="submit" type="submit" value="submit" />
          </form>
        </div>
        <div>
          <h1>Billing Address</h1>
          <input onChange={this.handelChange} type="checkbox" />
          <label> Same as the Shipping Address?</label>
          <form>
            <label>Address</label>
            <input
              onChange={this.handleInput}
              value={this.state.BillingAddress}
              type="text"
              name="BillingAddress"
              id="address"
              placeholder="e.g New Delhi Vasnat Vihar"
            />
            <label>ZIP/Postal Code</label>
            <input
              onChange={this.handleInput}
              value={this.state.BillingCode}
              type="number"
              name="BillingCode"
              id="code"
              placeholder="e.g. 176057"
            />
            <label>City</label>
            <input
              onChange={this.handleInput}
              value={this.state.BillingCity}
              type="text"
              name="BillingCity"
              id="city"
              placeholder="e.g New Delhi"
            />
            <label>Country</label>
            <input
              onChange={this.handleInput}
              value={this.state.BillingCountry}
              type="text"
              name="BillingCountry"
              id="country"
              placeholder="e.g India"
            />
            <input className="submit" type="submit" value="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default Shipping;
