import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import LeftContent from '../components/left-content'
import Declaration from '../components/declaration'
import HelpOut from '../components/help-out'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l3 center-align">
          <LeftContent />
        </div>

        <div className="col s12 m8 l9 left-align">
          <h1>SOME CONTENT</h1>
          {/* {{ range first 1 .Pages }}
          <div className="row">
            <div className="col s12">
              <h3 className="header">Next event: {{ .Date.Format "Monday, January 2, 2006" }}</h3>
              <h5 className="header light">{{ .Params.starttime }} to {{ .Params.endtime }}</h5>
            </div>
          </div>

          {{ partial "event.html" . }}
          {{ end }} */}

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

export default IndexPage
