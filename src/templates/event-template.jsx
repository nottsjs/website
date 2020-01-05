import React from 'react'
import { graphql } from 'gatsby'
import EventCard from '../components/event-card'

const transformPresenter = ({ presenter, presenter_bio, presenter_img, presenter_url }) => ({
  name: presenter,
  bio: presenter_bio,
  img: presenter_img,
  url: presenter_url
})

const transformEvent = ({
  html,
  frontmatter: {
    date, path, title, start, meetup_url: meetupUrl,
    presenter, presenter_bio, presenter_img, presenter_url
  }
}) => ({
  html,
  date,
  path,
  title,
  start,
  meetupUrl,
  presenter: transformPresenter({ presenter, presenter_bio, presenter_img, presenter_url })
})

export default function EventTemplate({ data }) {
  const event = transformEvent(data.markdownRemark)
  return <EventCard data={event} />
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
    }
  }
`
