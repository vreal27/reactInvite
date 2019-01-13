import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getPeople() {
  axios.get('/people').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_INFO', 
      person: resp.data.person
    })
  })
  getGoing()
  getNotGoing()
  
}
export function sendStatus(id, status) {
  axios.patch('/people' , {
    id: id,
    status: status 
  }) .then(resp =>{
   getPeople()
  })
}


export function getGoing() {
  axios.get('/going').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_GOING',
      going: resp.data
    })
  })
}

export function getNotGoing() {
  axios.get('/notgoing').then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_NOT_GOING',
      notgoing: resp.data
    })
  })
}




