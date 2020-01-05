import React from 'react'
import { Link } from 'gatsby'
import Profile from './profile'

import './event-card.css'

export default function EventCard({ event: { html, path, date, title, start, meetupUrl, presenter }, disableTitleLink }) {
  const eventIsInThePast = (new Date(start)).valueOf() < Date.now().valueOf()
  return (
    <div className="row">
    <div className="col s12">
      <div className="card-panel talk">
        <h3 className="header light">{disableTitleLink ? title : <Link to={path}>{title}</Link>}</h3>
        <h6 className="light">{date}</h6>

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
            <Profile presenter={presenter} />
          </>}
      </div>
    </div>
  </div>
    // <div className='blog-post-container'>
    //   <div className='blog-post'>
    //     <h1>{frontmatter.title}</h1>
    //     <h2>{frontmatter.date}</h2>
    //     <div
    //       className='blog-post-content'
    //       dangerouslySetInnerHTML={{ __html: html }}
    //     />
    //   </div>
    // </div>
  )
}
