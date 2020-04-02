import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EventCard from '../components/event-card'

import { transformEvent } from '../utils/transforms'

export default function IndexPage ({ data }) {
  const eventNode = data.allMarkdownRemark.nodes[0]
  const event = transformEvent(eventNode)

  const timeFormat = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric', hour12: false })
  const startTime = timeFormat.format(new Date(eventNode.frontmatter.start))
  const endTime = timeFormat.format(new Date(eventNode.frontmatter.end))

  return (
    <Layout>
      <SEO title='Home' />
      <div className="row">
        <div className="col s12">
          <h3 className="header">Next event: {event.date}</h3>
          <h5 className="header light">{startTime} to {endTime}</h5>
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
      nodes {
        html
        frontmatter {
          path
          title
          start
          end
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
`
