import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'

const PortfolioItem = () => {
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
    `} render={props => props.allWordpressWpPortfolio.edges.map(portfolioItem => (
      <div key={portfolioItem.node.id}>
        <h2>{portfolioItem.node.title}</h2>
        <img src={portfolioItem.node.featured_media.source_url} alt={portfolioItem.node.featured_media.alt_text} />
        <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
        <Link to={`/portfolio/${portfolioItem.node.slug}`}>
          Read More
        </Link>
      </div>
    ))} />
  )
}

export default PortfolioItem
