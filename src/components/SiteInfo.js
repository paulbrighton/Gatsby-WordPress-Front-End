import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'
import SiteLogo from './Logo'

const SiteInfoContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: #ffffff;
  margin: auto 0;
`

const SiteTitle = styled.div`
  font-weight: 700;
`

const SiteInfo = () => (
  <StaticQuery query={graphql`
  {
    allWordpressSiteMetadata{
      edges{
        node{
          name
          description
        }
      }
    }
  }
  `} render={props => (
    <SiteInfoContainer>
      <SiteLogo />
      <SiteInfoWrapper>
        <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        <div>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </div>
      </SiteInfoWrapper>
    </SiteInfoContainer>
  )} />
)

export default SiteInfo
