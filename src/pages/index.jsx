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

export default function IndexPage ({ data }) {
  const { html, frontmatter} = data.allMarkdownRemark.edges[0].node
  const { title, date, start, startTime, endTime, meetup_url: meetupUrl, presenter } = frontmatter
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
                <h3 className="header">Next event: {date}</h3>
                <h5 className="header light">{startTime} to {endTime}</h5>
              </div>
            </div>

            <EventCard event={{ title, date, start, html, meetupUrl, presenter }} />

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

  // <Layout>
  //   <SEO title='Home' />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to='/page-2/'>Go to page 2</Link>
  // </Layout>
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
          }
        }
      }
    }
  }
`