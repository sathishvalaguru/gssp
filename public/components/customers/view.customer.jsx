import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'

export default class ViewCustomer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			customer:[]
		}
		this.onDeleteCustomer = this.onDeleteCustomer.bind(this);
	}

	componentDidMount() {
		fetch('/api/customers/'+this.props.params.customerId).then(response => {
			return response.json();
		}).then(response => {
			this.setState({customer:response});
		}).catch(err => {
			console.log(err)
		});
	}

	onDeleteCustomer(){
		console.log('yes');
		fetch('/api/customers/'+this.props.params.customerId, {
			method: 'delete',
			headers: {
      			"Content-type": "application/json; charset=UTF-8"
			},
			body:JSON.stringify({
				_id: this.props.params.customerId
			})
		}).then(response => {
			return response.json();
		}).then(response => {
			location = "/#/customers/"
		}).catch(err => {
			console.log(err)
		});
	}

   render() {
    return (
		<section>
			<h1>{this.state.customer.firstName}</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<td>Firstname</td>
						<td>{this.state.customer.firstName}</td>
					</tr>
					<tr>
						<td>Lastname</td>
						<td>{this.state.customer.lastName}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>{this.state.customer.email}</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>{this.state.customer.phone}</td>
					</tr>
				</thead>
			</table>
			<div>
				<Link to={"/customers/"+this.props.params.customerId+"/edit"} className="btn btn-primary">Edit</Link>&nbsp; 
				<a className="btn btn-primary" onClick={this.onDeleteCustomer}>Delete</a> &nbsp;
				<Link to={"/customers/"} className="btn btn-primary">Back</Link>
			</div>
		</section>
	)
   }
}