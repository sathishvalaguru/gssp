import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  IndexLink,
  browserHistory,
  hashHistory
} from 'react-router';

export default class EditCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onUpdateCustomer = this.onUpdateCustomer.bind(this);
  }

  componentDidMount() {
    fetch('/api/customers/' + this.props.params.customerId).then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        firstName: response.firstName
      });
      this.setState({
        lastName: response.lastName
      });
      this.setState({
        email: response.email
      });
      this.setState({
        phone: response.phone
      });
      this.setState({
        id: response.phone
      });
    }).catch(err => {
      console.log(err)
    });
  }

  onFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  onPhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onUpdateCustomer() {
    fetch('/api/customers/' + this.props.params.customerId, {
      method: 'put',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone
      })
    }).then(response => {
      return response.json();
    }).then(response => {
      location = "/#/customers/" + response.id;
    }).catch(err => {
      console.log(err)
    });
  }
  render() {
    return (
      <section>
        <h1>Edit /
          <span>{this.state.firstName}</span>
        </h1>
        <form>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onFirstNameChange}/>
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" className="form-control" name="customer.lastName" value={this.state.lastName} onChange={this.onLastNameChange}/>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" name="customer.email" value={this.state.email} onChange={this.onEmailChange}/>
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="text" className="form-control" name="customer.phone" value={this.state.phone} onChange={this.onPhoneChange}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.onUpdateCustomer}>Update</button>&nbsp;
          <Link to={"/customers/" + this.props.params.customerId} className="btn btn-primary">cancel</Link>
        </form>
      </section>
    )
  }
}
