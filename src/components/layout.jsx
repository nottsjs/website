/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'
import LeftContent from '../components/left-content'
import Declaration from '../components/declaration'
import HelpOut from '../components/help-out'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <main>
          <div className="container">
            <div className="row">
              <div className="col s12 m4 l3 center-align">
                <LeftContent />
              </div>

              <div className="col s12 m8 l9 left-align">
                {children}
              </div>
            </div>
          </div>

          <Declaration />
          <HelpOut />
          <Footer />
          <Scripts />
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
