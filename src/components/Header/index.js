import React from 'react'

import {
  Content, Logo, SiteTitle,
  Nav, NavLink, ToggleNav
} from './styles'
import logo from '../../assets/logo.svg'

const events = ['mousedown', 'touchstart']

class Header extends React.Component {
  state = { hideNav: true }

  toggleNav = () => {
    this.setState({ hideNav: !this.state.hideNav })
  }

  handleClickOutside = (event) => {
    if (this.node && !this.node.contains(event.target) && !this.state.hideNav) {
      this.toggleNav()
    }
  }

  componentDidMount() {
    events.forEach(event =>
      document.addEventListener(event, this.handleClickOutside)
    )
  }

  componentWillUnmount() {
    events.forEach(event =>
      document.removeEventListener(event, this.handleClickOutside)
    )
  }
  
  render() {
    const { meta, header } = this.props
    return <Content>
      <SiteTitle to="/" title={meta.title} rel="home">
        <Logo src={logo} alt="Logo" />
      </SiteTitle>
      <Nav innerRef={node => this.node = node} hideNav={this.state.hideNav}>
        <ToggleNav inside onClick={this.toggleNav}>&times;</ToggleNav>
        {header.nav.map(item => (
            <NavLink
              onClick={this.toggleNav}
              activeClassName='active'
              key={item.url}
              to={item.url}
              title={item.title}
              {...item.props}
            >
              {item.title}
            </NavLink>
        ))}
      </Nav>
      <ToggleNav onClick={this.toggleNav}>&#9776;</ToggleNav>
    </Content>
  }
}

export default Header
