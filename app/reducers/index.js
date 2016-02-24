import { combineReducers } from 'redux-immutablejs'
import Immutable from 'immutable'
import { reducer as formReducer } from 'redux-form'

import routeReducer from './RouteReducer.js'

const rootReducer = combineReducers({
  form: (state = Immutable.fromJS({}), action) => Immutable.fromJS(formReducer(state.toJS(), action)),
  route: routeReducer
})

export default rootReducer
