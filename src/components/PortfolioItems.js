import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import styled from 'styled-components'

const PortfolioItemContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioItem = styled.div`
  max-width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`

const PortfolioImage = styled.img`
  max-width: 100%;
  height: auto;
`

const PortfolioItems = () => {
  return (
    <StaticQuery query={graphql`
      {
        allWordpressWpPortfolio{
          edges{
            node{
              id
              title
              excerpt
              slug
              content
              featured_media{
                alt_text
                source_url
              }
            }
          }
        }
      }
    `} render={props => (
      <PortfolioItemContainer>
        {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
          <PortfolioItem key={portfolioItem.node.id}>
            <h2>{portfolioItem.node.title}</h2>
            <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt={portfolioItem.node.featured_media.alt_text} />
            <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>
          Read More
            </Link>
          </PortfolioItem>
        ))}
      </PortfolioItemContainer>)} />
  )
}

export default PortfolioItems
