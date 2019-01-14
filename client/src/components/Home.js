import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeople, sendStatus, getGoing, getNotGoing } from '../actions/people'
import '../styles/Home.css'

class Home extends Component {
  componentDidMount() {
    getPeople()
    getGoing()
    getNotGoing()
  }
  
  going = (e) => {
   sendStatus(this.props.person.id, 'going') 
  } 
 
   notGoing = (e) => {
    sendStatus(this.props.person.id, 'not going')
   }
 


  render() {

    const person = this.props.person
    return (
      <div className = "homecontainer">
        <div className = "invites">
          <p>Going: {this.props.going.length} </p>
          <p>Not going:{this.props.notgoing.length}</p>
        </div>        
        <img src={person.picture}/> 
        <ul className = "infolist">
           <li>
              <p className="name"><b>Name:</b> {person.fname} {person.lname}</p>
              <p><b>Home:</b> {person.phone}</p>
              <p><b>Email:</b> {person.email}</p>
           </li>
        </ul>
    
        <div className="buttons">
          <button className="green" onClick={this.going}>Going</button>
          <button className="red" onClick={this.notGoing} >Not going</button> 
        </div>
          
        
      </div>
    )
  }
}



function mapStateToProps(appState) {
  console.log('appstate', appState)
  return {
    person: appState.peopleReducer.person,
    going: appState.peopleReducer.going,
    notgoing: appState.peopleReducer.notgoing
  }
}

export default connect(mapStateToProps)(Home)