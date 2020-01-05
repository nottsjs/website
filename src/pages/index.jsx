import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LeftContent from '../components/left-content'
import Declaration from '../components/declaration'
import HelpOut from '../components/help-out'
import Footer from '../components/footer'
import Scripts from '../components/scripts'
import EventCard from '../components/event-card'

const transformPresenter = ({ presenter, presenter_bio, presenter_img, presenter_url, github_url, twitter_url }) => ({
  name: presenter,
  bio: presenter_bio,
  img: presenter_img,
  url: presenter_url,
  githubUrl: github_url,
  twitterUrl: twitter_url
})

const transformEvent = ({
  html,
  frontmatter: {
    date, path, title, start, meetup_url,
    startTime, endTime,
    ...otherFields
  }
}) => ({
  html,
  date,
  path,
  title,
  start,
  startTime,
  endTime,
  meetupUrl: meetup_url,
  presenter: transformPresenter(otherFields)
})

export default function IndexPage ({ data }) {
  const event = transformEvent(data.allMarkdownRemark.edges[0].node)
  return (
    <Layout>
      <SEO title='Home' />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3 center-align">
            <LeftContent />
          </div>

          <div className="col s12 m8 l9 left-align">
            <div className="row">
              <div className="col s12">
                <h3 className="header">Next event: {event.date}</h3>
                <h5 className="header light">{event.startTime} to {event.endTime}</h5>
              </div>
            </div>

            <EventCard event={event} />

            <div className="row">
              <div className="col s12">
                <h5 className="header"><a href="past.html">View past events</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Declaration />
      <HelpOut />
      <Footer />
      <Scripts />
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
        }
      }
    }
  }
`