import React from 'react'
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components'
import 'normalize.css'
import {graphql, StaticQuery} from 'gatsby'
import Helmet from 'react-helmet'

const GlobalStyles = createGlobalStyle`


  body, html {
    font-family: 'Open sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
  .wp-block-image {
    display: flex;
    justify-content: center;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <div>
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet>
      <link rel='icon' href={props.allWordpressWpFavicon.edges[0].node.url.source_url} />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' rel="stylesheet" />
    </Helmet>} />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
  </div>
)

export default Layout
