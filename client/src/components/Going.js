import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoing } from '../actions/people'
import '../styles/Going.css'

class Going extends Component {
    componentDidMount(){
        getGoing()
    }

    render(){
        console.log(this.props)
        return (
            <div className = "goingcontainer">
                <h1>Going</h1>
                <div className = "attendees">
                    <ul className="goinginfo">
                    {this.props.going.map((title,i) => (
                        <li key={'title' + i}>
                            <img key={'pic' + i} src={title.picture}/> 
                            <p className= "name"><b>name:</b> {title.fname} {title.lname}</p>
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
      going: appState.peopleReducer.going
    }
  }

  export default connect(mapStateToProps)(Going)