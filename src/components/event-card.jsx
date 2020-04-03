import React from 'react'
import { Link } from 'gatsby'
import Profile from './profile'

import './event-card.css'

export default function EventCard({ event: { html, path, title, dateAndTime, hasPast, meetupUrl, presenter }, disableTitleLink }) {
  return (
    <div className="row">
    <div className="col s12">
      <div className="card-panel talk">
        <h3 className="header light">{disableTitleLink ? title : <Link to={path}>{title}</Link>}</h3>
        <h6 className="light">{dateAndTime}</h6>

        {meetupUrl &&
          <a className="btn waves-effect waves-light yellow black-text top-button" href={meetupUrl}>
            {hasPast
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
