// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App.jsx'
import Home from './Home/index.jsx'

export default function createRoutes (store) {
  const root = {
    path: '/',
    component: App,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // require('./Home').default // no need to modify store, no reducer
          // require('./Post').default(store) // add async reducer
        ])
      })
    },

    indexRoute: {
      component: Home
    }
  }

  return root
}
