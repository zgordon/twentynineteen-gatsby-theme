import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import { wordPressUrl } from '../../config';
import { createLocalLink } from '../utils'
import MenuButton from '../images/menu-button.svg'

const MENU_QUERY = `
fragment MenuFields on MenuItem {
  id
  label
  url
  connectedObject {
    __typename
  }
}
query GET_MENU_ITEMS {
    menuItems(where: { location: PRIMARY }) {
      nodes {
        ...MenuFields
        childItems {
          nodes {
            ...MenuFields
            childItems {
              nodes {
                ...MenuFields
                childItems {
                  nodes {
                    ...MenuFields
                    childItems {
                      nodes {
                        ...MenuFields
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

class Menus extends React.Component {
  state = {
    menuItems: {}
  }
  async componentDidMount() {
    if (typeof window !== 'undefined' && window.menuItems) {
      this.setState({ menuItems: window.menuItems })
    } else {
      const menus = await axios({
        url: `${wordPressUrl}/graphql`,
        method: 'post',
        data: {
          query: MENU_QUERY
        }
      })
  
      const { menuItems } = menus.data.data
      window.menuItems = menuItems
      this.setState({ menuItems })
    }
  }
  
  renderMenuItem(menuItem) {
    // const link = createLocalLink(menuItem.url)
    if (menuItem.childItems && menuItem.childItems.nodes.length) {
      return this.renderSubMenu(menuItem)
    } else {
      return (
        <li
        key={menuItem.id}
        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item is-focused"
        >
          <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
        </li>
      )
    }
  }
  
  renderSubMenu = menuItem => {
    return (
      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item is-focused">
      <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
      <button className="submenu-expand" tabIndex="-1">
        <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>
      </button>
      <ul className="sub-menu">
        <li className="mobile-parent-nav-menu-item menu-item--1">
          <button className="menu-item-link-return" tabIndex="-1">
            {/* <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg> */}
            <img src={MenuButton} />
            {menuItem.label}
            {menuItem.childItems.nodes.map(item => this.renderMenuItem(item))}
          </button>
        </li>
      </ul>
    </li>
    )
  }

  render() {
    const { menuItems } = this.state;
    if (Object.entries(menuItems).length !== 0) {
      return (
        <nav id="site-navigation" className="main-navigation" aria-label="Top Menu">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="main-menu">
              {menuItems.nodes.map(menuItem => {
                if (menuItem.childItems.nodes.length) {
                  return this.renderSubMenu(menuItem)
                } else {
                  return this.renderMenuItem(menuItem)
                }
              })}
            </ul>
          </div>
        </nav>
      )
    } else {
      return null
    }
    
  }
}

export default Menus
