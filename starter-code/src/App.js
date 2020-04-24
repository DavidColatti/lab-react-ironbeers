import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Beers from './components/Beers'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />}></Route>
          <Route exact path="/beers" component={(props) => <Beers {...props} /> }></Route>
        </Switch>
			</div>
		);
	}
}

export default App;
