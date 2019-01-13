import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'
import '../styles/App.css'

import Home from './Home'
import Going from './Going'
import Notgoing from './Notgoing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="maincontainer">
            <Route path="/" exact component={Home} />
            <Route path="/going" component={Going}/>
            <Route path="/notgoing" component={Notgoing}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
