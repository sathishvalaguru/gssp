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

export default class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers').then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        customers: response
      });
    }).catch(err => {
      console.log(err)
    });
  }

  render() {
    return (
      <section>
        <h1>Customers</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((person, i) => <Row key={i} data={person.doc}/>)}
          </tbody>
        </table>
        <div>
          <Link to="/customers/create" className="btn btn-primary" activeClassName="active">Create Customer</Link>
        </div>
      </section>
    )
  }
}

//Rows
class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <Link to={"/customers/" + this.props.data._id}>{this.props.data.firstName}</Link>
        </td>
        <td>{this.props.data.lastName}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.phone}</td>
      </tr>
    );
  }
}
