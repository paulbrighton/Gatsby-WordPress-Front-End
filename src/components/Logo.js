import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px 20px 5px 0;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node{
              url {
                source_url
                alt_text
              }
            }
          }
        }
      }
    `}
    render={props => (
      <Logo src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt={props.allWordpressWpLogo.edges[0].node.url.alt_text} />
    )}
  />
)
export default SiteLogo
