import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import styles from './Home.styl'

const Home = (props) => (
  <div>This is a test</div>
)

Home.propTypes = {

}

export default CSSModules(Home, styles, CSSModuleConfig)
