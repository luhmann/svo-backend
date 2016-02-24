import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/app'
import Home from './Home'
import RecipeAdd from './RecipeAdd'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home } />
    <Route path='addrecipe' component={ RecipeAdd } />
  </Route>
)
