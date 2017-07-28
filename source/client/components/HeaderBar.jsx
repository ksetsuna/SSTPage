import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderBar.less'

class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="header_bar flexbox">
        <div className="logo">
          <Link to="/"><img src={require('./Layout/images/logo.svg')} alt="logo" /></Link>
        </div>
        <nav className="top_nav flexbox">
          <Link to="/member/">团队成员</Link>
          <Link to="/">科研项目</Link>
          <Link to="/publication/">学术论文</Link>
          <Link to="/">联系我们</Link>
        </nav>
      </header>
    )
  }
}

export default HeaderBar