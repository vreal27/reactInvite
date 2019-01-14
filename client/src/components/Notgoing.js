import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotGoing } from '../actions/people'
import '../styles/NotGoing.css'

class Notgoing extends Component {
    componentDidMount(){
        getNotGoing()
    }

    render(){
        return (
            <div className = "notgoingcontainer">
            <h1>Not Going</h1>
            <div className = "attendees">
                <ul className="notgoinginfo">
                {this.props.notgoing.map((title,i) => (
                    <li key={'title' + i}>
                        <img key={'pic' + i} src={title.picture}/> 
                        <p className ="name"><b>name:</b> {title.fname} {title.lname}</p>
                        <p><b>phone:</b> {title.phone}</p>
                        <p><b>email:</b> {title.email}</p>
                    </li>
                ))}

                </ul>
            </div>
        </div>
        )
    }
}


function mapStateToProps(appState) {
    console.log('appstate', appState)
    return {
      notgoing: appState.peopleReducer.notgoing
    }
  }

  export default connect(mapStateToProps)(Notgoing)