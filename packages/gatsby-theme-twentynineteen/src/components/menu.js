import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import MenuButton from "./images/menu-button.svg"
import config from '../../config';

const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
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
  }
`

const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url.replace(config.wordPressUrl, ``)
}

const renderMenuItem = menuItem => {
  const link = createLocalLink(menuItem.url)
  console.log('link', link)
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    console.log('renderMenuItem-if---', menuItem)
    return renderSubMenu(menuItem)
  } else {
    console.log('renderMenuItem-else---', menuItem)
    return (
      <li
      key={menuItem.id}
      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-100 is-focused"
      >
        <Link to={createLocalLink(menuItem.url)}>{menuItem.label}</Link>
      </li>
    )
  }
}

const renderSubMenu = menuItem => {
  console.log('renderSubMenu....', menuItem)
  return (
    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-100 is-focused">
    <Link to="/">sub Menu</Link>
    <button className="submenu-expand" tabIndex="-1">
      <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg>
    </button>
    <ul className="sub-menu">
      <li className="mobile-parent-nav-menu-item menu-item--1">
        <button className="menu-item-link-return" tabIndex="-1">
          {/* <svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg> */}
          {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
          <img src={MenuButton} />
        </button>
      </li>
    </ul>
  </li>
  )
}

const Menu = () => (
  <StaticQuery
    query={MENU_QUERY}
    render={({ wpgraphql }) => {
      if (wpgraphql.menuItems) {
        return (
          <nav id="site-navigation" className="main-navigation" aria-label="Top Menu">
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="main-menu">
                {wpgraphql.menuItems.nodes.map(menuItem => {
                  if (menuItem.childItems.nodes.length) {
                    return renderSubMenu(menuItem)
                  } else {
                    console.log('wpgraphql')
                    return renderMenuItem(menuItem)
                  }
                })}
              </ul>
            </div>
          </nav>
        )
      }
    }}
  />
)

export default Menu;
