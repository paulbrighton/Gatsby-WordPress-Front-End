import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import SiteInfo from './SiteInfo'

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27,77);
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%auto;
`

const MenuItem = styled(Link)`
  color: #ffffff;
  display: block;
  padding: 16px 16px;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
