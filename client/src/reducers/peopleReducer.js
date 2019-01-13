const initialState = {
  person: {},
  going: [],
  notgoing: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_INFO':
      return {...state, person: action.person}
    case 'GET_GOING':
      return {...state, going: action.going}
    case 'GET_NOT_GOING':
      return {...state, notgoing: action.notgoing}
    default:
      return state
  }
}