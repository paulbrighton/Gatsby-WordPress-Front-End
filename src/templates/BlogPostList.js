import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end !important;
`

const PageNumberWrapper = styled.div`
  border: 1px solid #eeeeee;
  background: ${props => props.isCurrentPage ? '#eee' : 'white'}
`
const PageLinkNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
`

const blogPostLayout = ({pageContext}) => {
  return (
    <Layout>
      {pageContext.posts.map(post => (
        <div key={post.node.wordpress_id}>
          <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
          <small>
            {post.node.date}
          </small>
          <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
          <div>
            <Link to={`/post/${post.node.slug}`}>
              Read More
            </Link>
          </div>
        </div>
      ))}
      <Pagination>
        {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
          <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
            <PageLinkNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
              {index + 1}
            </PageLinkNumber>
          </PageNumberWrapper>
        ))}
      </Pagination>
    </Layout>
  )
}

export default blogPostLayout
