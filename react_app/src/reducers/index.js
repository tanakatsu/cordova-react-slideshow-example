import { combineReducers } from 'redux'
import pictures from './pictures'
import loading from './loading'
import login from './login'
import home from './home'

const rootReducers = combineReducers({
  pictures,
  loading,
  login,
  home
})

export default rootReducers
