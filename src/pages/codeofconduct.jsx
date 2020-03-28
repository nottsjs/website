import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function CodeOfConductPage () {
  return (
    <Layout>
      <SEO title='Code Of Conduct' />
      <h2>Code of Conduct</h2>

        <div className="flow-text">
        <p>NottsJS is dedicated to providing a harassment-free meetup experience for everyone. We do not tolerate harassment of meetup participants in any form. Participants violating these rules may be sanctioned or expelled from the meetup at the discretion of the organisers.</p>
        <p>This code of conduct applies to attendees, speakers, and organisers at the monthly meetups and in related social events. This includes slide decks and listings on the job board.</p>

        <h3>Unacceptable Behaviour</h3>
        <p>The following behaviour is considered unacceptable and constitutes harassment:</p>
        <p>Offensive verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, religion.
          Sexual images in public spaces.
          Deliberate intimidation, stalking, following, harassing photography or recording.
          Sustained disruption of talks or other events.
          Inappropriate physical contact.
          Unwelcome sexual attention.
          Participants asked to stop any harassing behavior are expected to comply immediately.
          Consequences Of Unacceptable Behaviour
          If a participant engages in harassing behavior, the meetup organisers may take any action they deem appropriate, including warning the offender or expulsion from the meetup.</p>

        <h3>Reporting</h3>
        <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact one of the organisers immediately.</p>

        <h3>Organizers</h3>
        <p>email: <a href="mailto:contact@nottsjs.org">contact@nottsjs.org</a></p>
        <p>Meetup organisers will also be happy to help participants contact local law enforcement, or otherwise assist those experiencing harassment to feel safe for the duration of the meetup. We value your attendance.</p>
      </div>
    </Layout>
  )
}
