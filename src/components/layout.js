import React from 'react'
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components'
import 'normalize.css'
import {graphql, StaticQuery} from 'gatsby'
import Helmet from 'react-helmet'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');


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
    `} render={props => <Helmet><link rel='icon' href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
  </div>
)

export default Layout
