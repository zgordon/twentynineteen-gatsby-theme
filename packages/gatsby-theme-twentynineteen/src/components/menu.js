import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import ChevronDownIcon from "./icons/chevron-down"

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
    site {
      _xexperimentalThemes {
        options {
          wordPressUrl
        }
      }
    }
    wpgraphql {
      menuItems(where: { location: MENU_1 }) {
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

const createLocalLink = (url, wpUrl) => {
  if (`#` === url) {
    return null
  }
  return url.replace(wpUrl, ``)
}

const renderMenuItem = (menuItem, wpUrl) => {
  const link = createLocalLink(menuItem.url, wpUrl)
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem)
  } else {
    return (
      <li
        key={menuItem.id}
        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-100"
      >
        <Link to={link}>{menuItem.label}</Link>
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wpUrl) => {
  return (
    <li
      key={menuItem.label}
      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-100 menu-item-has-children"
    >
      <Link to="/">{menuItem.label}</Link>
      <button className="submenu-expand" tabIndex="-1">
        <ChevronDownIcon />
      </button>
      <ul className="sub-menu">
        {menuItem.childItems.nodes.map(item => renderMenuItem(item, wpUrl))}
      </ul>
    </li>
  )
}

const Menu = () => (
  <StaticQuery
    query={MENU_QUERY}
    render={({ wpgraphql, site }) => {
      const wpUrl = site._xexperimentalThemes[0].options.wordPressUrl
      if (wpgraphql.menuItems) {
        return (
          <nav
            id="site-navigation"
            className="main-navigation"
            aria-label="Top Menu"
          >
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="main-menu">
                {wpgraphql.menuItems.nodes.map(menuItem => {
                  if (menuItem.childItems.nodes.length) {
                    return renderSubMenu(menuItem, wpUrl)
                  } else {
                    return renderMenuItem(menuItem, wpUrl)
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

export default Menu
