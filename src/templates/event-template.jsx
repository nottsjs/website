import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EventCard from '../components/event-card'

const transformPresenter = ({ presenter, presenter_bio, presenter_img, presenter_url }, presenter_bio_html) => ({
  name: presenter,
  bio: presenter_bio_html,
  img: presenter_img,
  url: presenter_url
})

const transformEvent = ({
  html,
  frontmatter: {
    date, path, title, start, meetup_url: meetupUrl,
    ...otherFields
  },
  fields: {
    presenter_bio_html
  }
}) => ({
  html,
  date,
  path,
  title,
  start,
  meetupUrl,
  presenter: transformPresenter(otherFields, presenter_bio_html)
})

export default function EventTemplate({ data }) {
  const event = transformEvent(data.markdownRemark)
  return (
    <Layout>
      <SEO title={event.title} />

      <div className="row">
        <div className="col s12">
          <h5 className="header"><Link to="/">View next event</Link></h5>
        </div>
      </div>

      <EventCard event={event} disableTitleLink={true} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
      }
      fields {
        presenter_bio_html
      }
    }
  }
`
