import React from 'react'
import { Link } from 'gatsby'
import Profile from './profile'

import './event-card.css'

export default function EventCard({ event: { html, path, title, start, meetupUrl, presenter }, disableTitleLink }) {
  const eventIsInThePast = (new Date(start)).valueOf() < Date.now().valueOf()
  const dateString = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(start))
  return (
    <div className="row">
    <div className="col s12">
      <div className="card-panel talk">
        <h3 className="header light">{disableTitleLink ? title : <Link to={path}>{title}</Link>}</h3>
        <h6 className="light">{dateString}</h6>

        {meetupUrl &&
          <a className="btn waves-effect waves-light yellow black-text top-button" href={meetupUrl}>
            {eventIsInThePast
            ? <>View on Meetup<i className="material-icons left">reply</i></>
            : <>RSVP on Meetup<i className="material-icons left">reply</i></>}
          </a>}

        <div className="flow-text" dangerouslySetInnerHTML={{ __html: html }} />

        {presenter &&
          <>
            <hr />
            <Profile {...presenter} />
          </>}
      </div>
    </div>
  </div>
  )
}
