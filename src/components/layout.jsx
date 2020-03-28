/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

// import Header from './header'
import LeftContent from '../components/left-content'
import Declaration from '../components/declaration'
import HelpOut from '../components/help-out'
import Footer from '../components/footer'
import Scripts from '../components/scripts'

const Layout = ({ children }) => {
  return (
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
