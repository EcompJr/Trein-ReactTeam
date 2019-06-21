import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Service from './components/Service';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/'>Inicio</Link>
          <Link to='/serviços'>Serviços</Link>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        </header>

        <main>
            <Switch>
              <Route exact path="/" />
              <Route path="/serviços"  component={Service} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;
