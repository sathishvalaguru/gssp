import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import Header from './core/header.jsx';
import Footer from './core/footer.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <main>
                <div className="container">
                    {this.props.children}
                </div>
            </main>
            <Footer />
         </div>
      );
   }
}

export default App;
