import { createStore, combineReducers } from 'redux'

import peopleReducer from './reducers/peopleReducer'
// import all reducers here

const rootReducer = combineReducers({
  peopleReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store