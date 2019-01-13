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
                <div className = "attendees">
                    <ul className="goinginfo">
                    {this.props.going.map((title,i) => (
                        <li key={'title' + i}>
                            <img key={'pic' + i} src={title.picture}/> 
                            <p>name: {title.fname} {title.lname}</p>
                            <p>phone: {title.phone}</p>
                            <p>email: {title.email}</p>
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