import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  margin: 16px 0;
`

const FeaturedImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Portfolio = ({pageContext}) => (
  <Layout>
    <h1>
      {pageContext.title}
    </h1>
    <strong>Website url: <a href={pageContext.acf.portfolio_url} target='_blank' rel='noopener noreferrer'>{pageContext.acf.portfolio_link_text}</a></strong>
    <FeaturedImageContainer>
      <FeaturedImage src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} />
    </FeaturedImageContainer>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
)

export default Portfolio
