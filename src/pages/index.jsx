import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EventCard from '../components/event-card'

import { transformEvent } from '../utils/transforms'

export default function IndexPage ({ data }) {
  const event = transformEvent(data.allMarkdownRemark.edges[0].node)
  return (
    <Layout>
      <SEO title='Home' />
      <div className="row">
        <div className="col s12">
          <h3 className="header">Next event: {event.date}</h3>
          <h5 className="header light">{event.startTime} to {event.endTime}</h5>
        </div>
      </div>

      <EventCard event={event} />

      <div className="row">
        <div className="col s12">
          <h5 className="header"><Link to='/past'>View past events</Link></h5>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { end: { ne: null } } }
      sort: { fields: [frontmatter___end], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            date: start(formatString: "dddd, MMMM Do, YYYY")
            title
            start
            startTime: start(formatString: "HH:mm")
            end
            endTime: end(formatString: "HH:mm")
            meetup_url
            presenter
            presenter_bio
            presenter_img
            presenter_url
            github_url
            twitter_url
          }
          fields {
            presenter_bio_html
          }
        }
      }
    }
  }
`