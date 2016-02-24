import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from './store/store.js'
import Routes from './routes/routes.jsx'

render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('app')
)
