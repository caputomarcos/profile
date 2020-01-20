import React, { Component } from 'react'
import './App.css'
import './styles/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'font-awesome/css/font-awesome.min.css'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProfilePage from './components/ProfilePage'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Manipulate body class example</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
          <div className="page-wrapper">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route path="/profile" component={ProfilePage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
