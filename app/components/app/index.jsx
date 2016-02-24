import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import styles from './styles.styl'

import Header from '../header'
import Footer from '../footer'

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

const App = ({ push, children }) => (
  <div>
    <Header title='Stove v Oven Backend' />
    <main styleName='main'>
      { children }
    </main>
    <Footer />
  </div>
)

export default CSSModules(App, styles, CSSModuleConfig)
