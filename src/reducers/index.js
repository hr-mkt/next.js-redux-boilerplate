import { combineReducers } from 'redux'
// import signIn from './signIn'

const app = (state = {}, action) => {
    let newState = Object.assign({}, state)
    if(action.type === 'TOGGLE_SIDE_BAR'){
        newState.sideBar = action.bool
    }
    if(action.type === 'TICK'){
        newState.light = action.light
        newState.lastUpdate = action.lastUpdate

    }
    return newState
}

const rootReducer = combineReducers({
    app
})

export default rootReducer
