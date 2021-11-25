import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Router>
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register}/>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
