//imports
import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
// components imports
// import Home from './components/Home'
import Records from './components/Record/Records'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import  {selectedSong} from './actions';
import records1 from './components/records1';
class App extends Component {

  constructor(props) {
    super(props)

    this.navigation = this.navigation.bind(this)
    this.state = {
      data:1, data2:2
    }
  }

  navigation() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/records1">Records</Link>
            </li>
          </ul>

        </nav>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.navigation()}
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path='/records' component={Records} />
          <Route path='/records1' component={records1} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
