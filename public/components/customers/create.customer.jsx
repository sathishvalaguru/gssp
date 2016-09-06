import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'

export default class CreateCustomer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName:'',
			lastName:'',
			email:'',
			phone:'',
		}
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onCreateCustomer = this.onCreateCustomer.bind(this);
	}

	onFirstNameChange(e) {
		this.setState({firstName:e.target.value});
	}

	onLastNameChange(e){
		this.setState({lastName:e.target.value});
	}
	onEmailChange(e){
		this.setState({email:e.target.value});
	}
	onPhoneChange(e){
		this.setState({phone:e.target.value});
	}

	onCreateCustomer(){
		console.log('yes');
		console.log(this.props.params.customerId)
		fetch('/api/customers/', {
			method: 'post',
			headers: {
      			"Content-type": "application/json; charset=UTF-8"
			},
			body:JSON.stringify({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				phone: this.state.phone
			})
		}).then(response => {
			console.log(response);
			return response.json();
		}).then(response => {
			location = "/#/customers/" + response._id;
		}).catch(err => {
			console.log(err)
		});
	}
   render() {
    return (
		<section>
			<h1>Create / <span> New Customer</span></h1>
			<form>
				<div className="form-group">
					<label>First Name:</label>
					<input type="text" className="form-control" name="customer.firstName" value={this.state.firstName} onChange={this.onFirstNameChange} />
				</div>
				<div className="form-group">
					<label>Last Name:</label>
					<input type="text" className="form-control" name="customer.lastName" value={this.state.lastName} onChange={this.onLastNameChange} />
				</div>
				<div className="form-group">
					<label>Email:</label>
					<input type="text" className="form-control" name="customer.email" value={this.state.email} onChange={this.onEmailChange} />
				</div>
				<div className="form-group">
					<label>Phone:</label>
					<input type="text" className="form-control" name="customer.phone" value={this.state.phone} onChange={this.onPhoneChange} />
				</div>
				<button type="button" className="btn btn-primary" onClick={this.onCreateCustomer}>Create Customer</button>&nbsp;
				<a href="/#/customers" className="btn btn-primary">Back</a>
			</form>
		</section>
	)
   }
}