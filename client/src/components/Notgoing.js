import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotGoing } from '..actions/people'

class Notgoing extends Component {
    componentDidMount(){
        getNotGoing()
    }

    render() {
        return (
            <div></div>
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