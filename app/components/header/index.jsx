import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import { Link } from 'react-router'
import styles from './styles.styl'

const Header = ({ title }) => (
  <header>
    <nav styleName='wrapper' className='nav-wrapper'>
      <a href='#' className='brand-logo'>{ title }</a>
      <a href='#' data-activates='mobile-demo' className='button-collapse'><i className='material-icons'>menu</i></a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><a href='#'>Recipe List</a></li>
        <li><Link to='/addrecipe'>Add</Link></li>
      </ul>
    </nav>

  </header>
)

Header.propTypes = {
  title: React.PropTypes.string
}

export default CSSModules(Header, styles, CSSModuleConfig)
