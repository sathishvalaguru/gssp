import React from 'react';
import ReactDOM from 'react-dom';

export default class TopNavigation extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button> <a className="navbar-brand" href="#/">myApp</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/#/customers">Customers</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
