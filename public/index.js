import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'

// Main Layout
import App from './components/App.jsx';

// Customers
import Customers from './components/customers/list.customer.jsx';
import CreateCustomer from './components/customers/create.customer.jsx';
import ViewCustomer from './components/customers/view.customer.jsx';
import EditCustomer from './components/customers/edit.customer.jsx';

//Home Page
class Home extends React.Component {
   render() {
    return (<h1>Home Page</h1>)
   }
}

class InputText extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: ""
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({value:e.target.value});
	}

	render(){
		return(
			<input type="text" className="form-control" name={this.props.name} value={this.props.value} onChange={this.handleChange} />
		)
	}
}



// Init and Route
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="customers">
			<IndexRoute component={Customers} />
			<Route path="/customers/create" component={CreateCustomer} />
			<Route path="/customers/:customerId" component={ViewCustomer} />
			<Route path="/customers/:customerId/edit" component={EditCustomer} />
		</Route>
	</Route>
  </Router>
), document.getElementById('root'));
