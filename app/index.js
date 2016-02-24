import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from './store/store.js'
import createRoutes from './routes/root.js'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={createRoutes(store)} />
  </Provider>,
  document.getElementById('app')
)
